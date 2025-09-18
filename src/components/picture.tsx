import type React from 'react';
import { cn } from '../utils/cn';

// Define screen size variants for responsive images
// Define screen size variants for responsive images (used in srcset generation)
export const screenSizeVariants = {
  lg: 1280,
  max: 1920,
  md: 960,
  min: 360,
  sm: 640,
  xl: 1600,
  xs: 480,
} as const;

// Define image format for different providers
export type ImageFormat = {
  size: string; // Size descriptor (e.g., '480x360', 'sm', etc.)
  width: number; // Width in pixels for srcset
};

export interface PictureProps {
  alt: string;
  baseUrl: string; // Base URL template that can include placeholders
  className?: string;
  formats?: ImageFormat[]; // Custom formats if needed
  imgClassName?: string; // Additional class for the img element
  placeholder?: string; // Placeholder to replace in baseUrl
  sizes?: string; // Custom sizes attribute
}

/**
 * Generic Picture component that works with any image provider
 *
 * @param alt - Alt text for the image
 * @param baseUrl - Base URL with optional placeholder (e.g., 'https://example.com/images/{format}/image.jpg')
 * @param className - Optional class for the picture element
 * @param formats - Custom formats with size and width
 * @param imgClassName - Optional class for the img element
 * @param placeholder - Placeholder to replace in baseUrl (default: '{format}')
 * @param sizes - Custom sizes attribute
 */
const Picture: React.FC<PictureProps> = ({
  alt,
  baseUrl,
  className,
  formats,
  imgClassName,
  placeholder = '{format}',
  sizes = '(max-width: 480px) 480px, (max-width: 768px) 600px, (max-width: 1200px) 1024px, 1920px',
}) => {
  // Default formats if none provided
  const imageFormats = formats || [
    { size: '480x360', width: 480 },
    { size: '600x600', width: 600 },
    { size: '1024x768', width: 1024 },
    { size: '1920x1440', width: 1920 },
  ];

  if (imageFormats.length === 0) {
    return null;
  }

  // Generate srcset by replacing placeholder in baseUrl
  const srcSet = imageFormats
    .map(({ size, width }) => {
      const url = baseUrl.replace(placeholder, size);
      return `${url} ${width}w`;
    })
    .join(', ');

  // Use the first format as the default src
  const defaultFormat = imageFormats[0];
  // Add a null check for defaultFormat
  const defaultSrc = defaultFormat ? baseUrl.replace(placeholder, defaultFormat.size) : baseUrl;

  return (
    <picture className={className}>
      <source
        sizes={sizes}
        srcSet={srcSet}
      />
      <img
        alt={alt}
        className={cn(imgClassName)}
        src={defaultSrc}
      />
    </picture>
  );
};

export { Picture };
