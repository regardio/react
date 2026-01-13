'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { Button } from '../button';
import { useCarousel } from './carousel-root';

export const CarouselNext = forwardRef<HTMLButtonElement, HTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const { canScrollNext, scrollNext } = useCarousel();

    return (
      <Button
        className={className}
        disabled={!canScrollNext}
        onClick={scrollNext}
        ref={ref}
        {...props}
      />
    );
  },
);
CarouselNext.displayName = 'CarouselNext';
