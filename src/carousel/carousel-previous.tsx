'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { useCarousel } from './carousel-root';

export const CarouselPrevious = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const { canScrollPrev, scrollPrev } = useCarousel();

    return (
      <button
        className={className}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        ref={ref}
        type="button"
        {...props}
      />
    );
  },
);
CarouselPrevious.displayName = 'CarouselPrevious';
