import { cn, tv } from '@regardio/tailwind/utils';
import type { ElementType, HTMLAttributes } from 'react';
import { lowerCaseSzett, shy } from '../utils/text';

const levelVariants = {
  1: ['text-2xl'],
  2: ['text-xl'],
  3: ['text-lg'],
  4: ['text-md'],
  5: ['text-sm'],
  6: ['text-xs'],
} as const;

const heading = tv({
  base: [],
  defaultVariants: {
    level: 3,
  },
  variants: {
    level: levelVariants,
  },
});

export type HeadingLevel = keyof typeof levelVariants;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: ElementType;
  className?: string;
  level?: HeadingLevel;
  locale?: string;
}

export const Heading = ({ as, children, className, level = 2, ...props }: HeadingProps) => {
  const word = lowerCaseSzett(shy(children));
  const Component: ElementType = as || `h${level}`;

  return (
    <Component
      className={cn(
        heading({
          level,
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
