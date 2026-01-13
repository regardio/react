'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { Button } from '../button';
import { useCarousel } from './carousel-root';

export const CarouselPrevious = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const { canScrollPrev, scrollPrev } = useCarousel();

    return (
      <Button
        className={className}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        ref={ref}
        {...props}
      />
    );
  },
);
CarouselPrevious.displayName = 'CarouselPrevious';
