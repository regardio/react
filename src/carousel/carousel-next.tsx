'use client';

import type { HTMLAttributes } from 'react';
import { Button } from '../button';
import { useCarousel } from './carousel-root';

export interface CarouselNextProps extends HTMLAttributes<HTMLButtonElement> {
  ref?: React.Ref<HTMLButtonElement>;
}

export const CarouselNext = function CarouselNext({
  className,
  ref,
  ...props
}: CarouselNextProps): React.JSX.Element {
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
};
