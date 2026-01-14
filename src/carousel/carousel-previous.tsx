'use client';

import type { HTMLAttributes } from 'react';
import { Button } from '../button';
import { useCarousel } from './carousel-root';

export interface CarouselPreviousProps extends HTMLAttributes<HTMLButtonElement> {
  ref?: React.Ref<HTMLButtonElement>;
}

export const CarouselPrevious = function CarouselPrevious({
  className,
  ref,
  ...props
}: CarouselPreviousProps): React.JSX.Element {
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
};
