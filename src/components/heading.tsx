import type { ElementType, HTMLAttributes } from 'react';
import { cn, cva, type VariantProps } from '../utils/cn';
import { lowerCaseSzett, shy } from '../utils/text';

const heading = cva({
  base: [],
  defaultVariants: {
    level: 3,
  },
  variants: {
    level: {
      1: ['text-2xl'],
      2: ['text-xl'],
      3: ['text-lg'],
      4: ['text-md'],
      5: ['text-sm'],
      6: ['text-xs'],
    },
    variant: {},
  },
});

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading> {
  as?: ElementType;
  className?: string;
  locale?: string;
}

export type HeadingLevel = HeadingProps['level'];

export const Heading = ({
  as,
  children,
  className,
  level = 2,
  variant,
  ...props
}: HeadingProps) => {
  const word = lowerCaseSzett(shy(children));
  const Component: ElementType = as || `h${level}`;

  return (
    <Component
      className={cn(
        heading({
          level,
          variant,
        }),
        className,
      )}
      {...props}
    >
      {word}
    </Component>
  );
};

Heading.displayName = 'Heading';
