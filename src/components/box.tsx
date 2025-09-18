import type { ComponentProps, ElementType } from 'react';

import { cva, type VariantProps } from '../utils/cn';

const box = cva({
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: {
      aside: [],
      code: ['font-monospace', 'overflow-scroll'],
      container: ['u-container'],
      flex: ['flex'],
      grid: ['u-grid'],
      main: [],
      primary: [],
      section: ['u-grid', 'content-start'],
    },
  },
});

export interface BoxProps extends ComponentProps<'div'>, VariantProps<typeof box> {
  as?: ElementType;
}

export const Box = ({
  as: Component = 'div',
  children,
  className,
  variant,
  ...props
}: BoxProps) => {
  return (
    <Component
      className={box({
        className,
        variant,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};
