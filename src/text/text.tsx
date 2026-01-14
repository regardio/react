import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

const themeColorVariants = {
  primary: [],
} as const;

const textVariants = {
  code: ['font-light', 'font-monospace'],
  primary: [],
  subtitle: ['text-lg'],
} as const;

const text = tv({
  base: ['relative', 'block'],
  defaultVariants: {
    themeColor: 'primary',
    variant: 'primary',
  },
  variants: {
    themeColor: themeColorVariants,
    variant: textVariants,
  },
});

export type TextThemeColor = keyof typeof themeColorVariants;
export type TextVariant = keyof typeof textVariants;

export interface TextProps extends ComponentProps<'p'> {
  themeColor?: TextThemeColor;
  variant?: TextVariant;
}

export const Text = ({
  children,
  className,
  variant,
  themeColor,
}: TextProps): React.JSX.Element => {
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
