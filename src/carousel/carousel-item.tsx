'use client';

import { forwardRef, type HTMLAttributes } from 'react';

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  'aria-label'?: string;
}

export const CarouselItem = forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, ...props }, ref) => {
    return (
      // biome-ignore lint/a11y/useSemanticElements: False positive
      <div
        aria-roledescription="slide"
        className={className}
        ref={ref}
        role="group"
        {...props}
      />
    );
  },
);
CarouselItem.displayName = 'CarouselItem';
