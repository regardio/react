import type { ReactElement } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Picture } from './picture';

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
  imgClassName?: string; // CSS class for the image
  locale: string; // Locale for the alt text
  pictureClassName?: string; // CSS class for the picture component
  images: ImageData[]; // Array of images
  filter?: (image: ImageData) => boolean; // Optional filter function
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
}: BackgroundSlideshowProps): ReactElement {
  // Track if component is mounted (client-side only)
  const [isMounted, setIsMounted] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(false);

  // State for managing the slideshow
  const [frontImage, setFrontImage] = useState<ImageData | null>(null);
  const [backImage, setBackImage] = useState<ImageData | null>(null);
  const [activeFront, setActiveFront] = useState(true);
  const [validatedImages, setValidatedImages] = useState<ImageData[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isTransitioning = useRef(false);

  // Set mounted state after component mounts (client-side only)
  useEffect(() => {
    setIsMounted(true);
    // Defer slideshow until after FCP
    const timeout = setTimeout(() => setShowSlideshow(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // Validate images array using Zod
  useEffect(() => {
    const validatedImages = images
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

    setValidatedImages(validatedImages);
  }, [images]);

  // Initialize images once we have validated data
  useEffect(() => {
    if (validatedImages.length === 0) return;

    // Apply custom filter if provided
    const filteredImages = filter ? validatedImages.filter(filter) : validatedImages;

    // If no images match the filter, use all valid images
    const imagesToUse = filteredImages.length > 0 ? filteredImages : validatedImages;

    // Use the first image as the initial image
    const imageToUse = imagesToUse[0];

    // Only if we have a valid image
    if (imageToUse) {
      // Set initial images if not already set
      if (!frontImage) {
        setFrontImage(imageToUse);
      }
      if (!backImage) {
        setBackImage(imageToUse);
      }
    }
  }, [validatedImages, filter, frontImage, backImage]);

  // Set up slideshow if enabled
  useEffect(() => {
    // Don't proceed if we don't have images or slideshow isn't enabled
    if (!slideshow || !isMounted || !showSlideshow || !frontImage || !backImage) {
      return;
    }

    // Clear any existing timers
    if (timerRef.current) clearTimeout(timerRef.current);

    const cycleImages = () => {
      // Don't start a new transition if one is already in progress
      if (isTransitioning.current) return;

      // Apply custom filter if provided
      const availableImages = filter ? validatedImages.filter(filter) : validatedImages;

      if (availableImages.length <= 1) return; // No need to cycle if only one image

      // Get current image index
      const currentImage = activeFront ? frontImage : backImage;
      if (!currentImage) return; // Safety check

      const currentIndex = availableImages.findIndex((img) => img.id === currentImage.id);

      // Get next image (or loop back to first)
      const nextIndex = (currentIndex + 1) % availableImages.length;
      const nextImage = availableImages[nextIndex];

      // Safety check - shouldn't happen but TypeScript needs this
      if (!nextImage) return;

      // Mark that we're starting a transition
      isTransitioning.current = true;

      // 1. Load the new image into the inactive container
      if (activeFront) {
        // Front is active, so update the back image
        setBackImage(nextImage);
      } else {
        // Back is active, so update the front image
        setFrontImage(nextImage);
      }

      // 2. Wait for a longer delay to ensure the new image is fully loaded
      setTimeout(() => {
        // Toggle which container is active (this triggers the animation via CSS classes)
        setActiveFront(!activeFront);

        // 3. After the animation completes, reset the transition flag
        setTimeout(() => {
          isTransitioning.current = false;

          // 4. Schedule the next transition
          timerRef.current = setTimeout(cycleImages, slideshowInterval);
        }, transitionDuration); // Use the configurable transition duration
      }, 100); // Short delay to ensure the new image is loaded
    };

    // Start the cycle after the initial interval
    timerRef.current = setTimeout(cycleImages, slideshowInterval);

    // Clean up on unmount
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [
    slideshow,
    isMounted,
    showSlideshow,
    frontImage,
    backImage,
    slideshowInterval,
    transitionDuration,
    validatedImages,
    filter,
    activeFront,
  ]);

  // If no valid images, return empty div
  if (validatedImages.length === 0) {
    return <div className={className} />;
  }

  // Show loading state before slideshow starts
  if (!showSlideshow || !frontImage || !backImage) {
    return <div className={`relative ${className}`} />;
  }

  return (
    <div className={className}>
      {/* Front image container */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity ${activeFront ? 'opacity-100' : 'opacity-0'} ${transitionDuration <= 3000 ? 'duration-3000' : transitionDuration <= 4000 ? 'duration-4000' : transitionDuration <= 5000 ? 'duration-5000' : 'duration-6000'}`}
      >
        <Picture
          alt={frontImage.at[locale] || ''}
          baseUrl={baseUrl.replace('{id}', frontImage.id)}
          className={pictureClassName}
          imgClassName={imgClassName}
        />
      </div>

      {/* Back container */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity ${!activeFront ? 'opacity-100' : 'opacity-0'} ${transitionDuration <= 3000 ? 'duration-3000' : transitionDuration <= 4000 ? 'duration-4000' : transitionDuration <= 5000 ? 'duration-5000' : 'duration-6000'}`}
      >
        <Picture
          alt={backImage.at[locale] || ''}
          baseUrl={baseUrl.replace('{id}', backImage.id)}
          className={pictureClassName}
          imgClassName={imgClassName}
        />
      </div>
    </div>
  );
}
