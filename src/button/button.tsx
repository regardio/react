import { Button as BaseUIButton } from '@base-ui/react/button';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

export const buttonVariants = {
  destructive: [
    'inline-flex',
    'items-center',
    'justify-center',
    'transition-colors',
    'bg-destructive',
    'text-destructive-foreground',
    'border-destructive',
    'hover:bg-destructive-hover',
    'hover:border-destructive-hover',
  ],
  ghost: [
    'inline-flex',
    'items-center',
    'justify-center',
    'transition-colors',
    'bg-transparent',
    'text-foreground',
    'border-transparent',
    'hover:bg-muted',
  ],
  outline: [
    'inline-flex',
    'items-center',
    'justify-center',
    'transition-colors',
    'bg-transparent',
    'text-foreground',
    'border-current',
    'hover:bg-muted',
  ],
  primary: [
    'inline-flex',
    'items-center',
    'justify-center',
    'transition-colors',
    'bg-primary',
    'text-primary-foreground',
    'border-primary',
    'hover:bg-primary-hover',
    'hover:border-primary-hover',
  ],
  secondary: [
    'inline-flex',
    'items-center',
    'justify-center',
    'transition-colors',
    'bg-secondary',
    'text-secondary-foreground',
    'border-secondary',
    'hover:bg-secondary-hover',
    'hover:border-secondary-hover',
  ],
} as const;

export const buttonSizes = {
  '2xl': ['px-8', 'py-4', 'text-xl'],
  lg: ['px-6', 'py-3', 'text-lg'],
  md: ['px-4', 'py-2', 'text-base'],
  sm: ['px-3', 'py-1.5', 'text-sm'],
  xl: ['px-7', 'py-3.5', 'text-lg'],
} as const;

export const button: ReturnType<typeof tv> = tv({
  base: [],
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
  variants: {
    size: buttonSizes,
    variant: buttonVariants,
  },
});

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;

export interface ButtonProps extends Omit<ComponentProps<typeof BaseUIButton>, 'className'> {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export const Button = ({
  children,
  className,
  size,
  variant,
  ...props
}: ButtonProps): React.JSX.Element => {
  return (
    <BaseUIButton
      className={button({
        className,
        size,
        variant,
      })}
      {...props}
    >
      {children}
    </BaseUIButton>
  );
};
