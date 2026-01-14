import type { HTMLAttributes } from 'react';

export interface CarouselContentProps extends HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export const CarouselContent = function CarouselContent({
  className,
  ref,
  ...props
}: CarouselContentProps): React.JSX.Element {
  return (
    <div
      className={className}
      ref={ref}
      {...props}
    />
  );
};
