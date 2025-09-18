import type { ComponentProps } from 'react';
import { cva, type VariantProps } from '../utils/cn';

const text = cva({
  base: ['relative', 'block'],
  defaultVariants: {
    themeColor: 'primary',
    variant: 'primary',
  },
  variants: {
    themeColor: {
      primary: [],
    },
    variant: {
      code: ['font-light', 'font-monospace'],
      primary: [],
      subtitle: ['text-lg'],
    },
  },
});

export interface TextProps extends ComponentProps<'p'>, VariantProps<typeof text> {}

export const Text = (props: TextProps) => {
  const { children, className, variant, themeColor } = props;

  return (
    <div
      className={text({
        className,
        themeColor,
        variant,
      })}
    >
      {children}
    </div>
  );
};
