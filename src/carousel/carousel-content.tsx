'use client';

import { forwardRef, type HTMLAttributes } from 'react';

export const CarouselContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={className}
        ref={ref}
        {...props}
      />
    );
  },
);
CarouselContent.displayName = 'CarouselContent';
