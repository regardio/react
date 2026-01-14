import type { HTMLAttributes } from 'react';

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  'aria-label'?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export const CarouselItem = function CarouselItem({
  className,
  ref,
  ...props
}: CarouselItemProps): React.JSX.Element {
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
};
