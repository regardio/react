'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Picture } from '../picture';

export type ImageData = {
  at: Record<string, string>; // Alt text in different languages
  fn: string; // File name
  hu: number; // Hue in HSL degrees
  id: string; // ID of the image
  po: boolean; // Whether the image is a placeholder
};

export interface BackgroundSlideshowProps {
  baseUrl: string; // URL template with {id} and {format} placeholders
  className?: string; // CSS class for the container
  filter?: (image: ImageData) => boolean; // Optional filter function
  images: ImageData[]; // Array of images
  imgClassName?: string; // CSS class for the image
  locale: string; // Locale for the alt text
  pictureClassName?: string; // CSS class for the picture component
  slideshow?: boolean; // Whether to enable the slideshow
  slideshowInterval?: number; // Time in ms between transitions
  transitionDuration?: number; // Time in ms for the fade transition
}

export function BackgroundSlideshow({
  baseUrl,
  className = '',
  imgClassName = '',
  locale,
  pictureClassName = '',
  images = [],
  slideshow = true,
  slideshowInterval = 6000,
  transitionDuration = 6000,
  filter,
}: BackgroundSlideshowProps): React.JSX.Element {
  // Validate images synchronously for immediate first image render
  const validatedImages = useMemo(() => {
    return images
      .map((img) => {
        if (typeof img !== 'object' || img === null) return null;
        return {
          at: img.at || {},
          fn: img.fn || '',
          hu: img.hu || 0,
          id: img.id || '',
          po: img.po || false,
        };
      })
      .filter((img): img is ImageData => img !== null);
  }, [images]);

  // Get filtered images for slideshow
  const availableImages = useMemo(() => {
    const filtered = filter ? validatedImages.filter(filter) : validatedImages;
    return filtered.length > 0 ? filtered : validatedImages;
  }, [validatedImages, filter]);

  // First image is shown immediately (no animation needed)
  const firstImage = availableImages[0] || null;

  // Track if slideshow has started (client-side only)
  const [slideshowStarted, setSlideshowStarted] = useState(false);

  // The overlay image that fades in over the first image
  const [overlayImage, setOverlayImage] = useState<ImageData | null>(null);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<number | undefined>(undefined);
  const isTransitioning = useRef(false);

  // Start slideshow after mount
  useEffect(() => {
    if (!slideshow || availableImages.length <= 1) return;

    // Delay slideshow start to allow first image to be LCP
    const timeout = window.setTimeout(() => {
      setSlideshowStarted(true);
    }, slideshowInterval);

    return () => window.clearTimeout(timeout);
  }, [slideshow, availableImages.length, slideshowInterval]);

  // Run the slideshow cycle
  useEffect(() => {
    if (!slideshowStarted || availableImages.length <= 1) return;

    // Clear any existing timers
    if (timerRef.current) window.clearTimeout(timerRef.current);

    const cycleImages = () => {
      if (isTransitioning.current) return;

      isTransitioning.current = true;

      // Get next image index
      const nextIdx = (currentIndex + 1) % availableImages.length;
      const nextImage = availableImages[nextIdx];

      if (!nextImage) {
        isTransitioning.current = false;
        return;
      }

      // Load next image into overlay (hidden)
      setOverlayImage(nextImage);

      // Short delay to ensure image starts loading, then fade in
      window.setTimeout(() => {
        setOverlayVisible(true);

        // After transition completes, update state
        window.setTimeout(() => {
          setCurrentIndex(nextIdx);
          setOverlayVisible(false);
          isTransitioning.current = false;

          // Schedule next transition
          timerRef.current = window.setTimeout(cycleImages, slideshowInterval);
        }, transitionDuration);
      }, 100);
    };

    // Start first transition
    cycleImages();

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [slideshowStarted, availableImages, currentIndex, slideshowInterval, transitionDuration]);

  // If no valid images, return empty div
  if (validatedImages.length === 0 || !firstImage) {
    return <div className={className} />;
  }

  // Get current base image (first image initially, then cycles)
  const baseImage = availableImages[currentIndex] || firstImage;

  return (
    <div className={className}>
      {/* Base image - always visible, no fade-in animation */}
      <div className="absolute inset-0 w-full h-full">
        <Picture
          alt={baseImage.at[locale] || ''}
          baseUrl={baseUrl.replace('{id}', baseImage.id).replace('{fn}', baseImage.fn)}
          className={pictureClassName}
          formats={[{ size: '', width: 1080 }]}
          imgClassName={imgClassName}
          placeholder=""
        />
      </div>

      {/* Overlay image - fades in over base image during transitions */}
      {overlayImage && (
        <div
          className={`absolute inset-0 w-full h-full transition-opacity ${overlayVisible ? 'opacity-100' : 'opacity-0'} ${transitionDuration <= 3000 ? 'duration-3000' : transitionDuration <= 4000 ? 'duration-4000' : transitionDuration <= 5000 ? 'duration-5000' : 'duration-6000'}`}
        >
          <Picture
            alt={overlayImage.at[locale] || ''}
            baseUrl={baseUrl.replace('{id}', overlayImage.id).replace('{fn}', overlayImage.fn)}
            className={pictureClassName}
            formats={[{ size: '', width: 1080 }]}
            imgClassName={imgClassName}
            placeholder=""
          />
        </div>
      )}
    </div>
  );
}
