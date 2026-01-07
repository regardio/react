'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { useCarousel } from './carousel-root';

export const CarouselNext = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const { canScrollNext, scrollNext } = useCarousel();

    return (
      <button
        className={className}
        disabled={!canScrollNext}
        onClick={scrollNext}
        ref={ref}
        type="button"
        {...props}
      />
    );
  },
);
CarouselNext.displayName = 'CarouselNext';
