import { Button as BaseUIButton } from '@base-ui/react/button';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

const buttonVariants = {
  destructive: [
    'bg-red-600',
    'text-white',
    'border-red-600',
    'hover:bg-red-700',
    'hover:border-red-700',
    'focus-visible:ring-2',
    'focus-visible:ring-red-500',
    'focus-visible:ring-offset-2',
  ],
  ghost: [
    'bg-transparent',
    'text-gray-900',
    'border-transparent',
    'hover:bg-gray-100',
    'hover:border-transparent',
    'focus-visible:ring-2',
    'focus-visible:ring-gray-500',
    'focus-visible:ring-offset-2',
  ],
  outline: [
    'bg-transparent',
    'text-gray-900',
    'border-gray-300',
    'hover:bg-gray-50',
    'hover:border-gray-400',
    'focus-visible:ring-2',
    'focus-visible:ring-gray-500',
    'focus-visible:ring-offset-2',
  ],
  primary: [
    'bg-blue-600',
    'text-white',
    'border-blue-600',
    'hover:bg-blue-700',
    'hover:border-blue-700',
    'focus-visible:ring-2',
    'focus-visible:ring-blue-500',
    'focus-visible:ring-offset-2',
  ],
  secondary: [
    'bg-gray-100',
    'text-gray-900',
    'border-gray-300',
    'hover:bg-gray-200',
    'hover:border-gray-400',
    'focus-visible:ring-2',
    'focus-visible:ring-gray-500',
    'focus-visible:ring-offset-2',
  ],
} as const;

const buttonSizes = {
  '2xl': ['px-10', 'py-5', 'text-2xl', 'font-medium', 'rounded-lg'],
  lg: ['px-6', 'py-3', 'text-lg', 'font-medium', 'rounded-lg'],
  md: ['px-4', 'py-2', 'text-base', 'font-medium', 'rounded-md'],
  sm: ['px-3', 'py-1.5', 'text-sm', 'font-medium', 'rounded-md'],
  xl: ['px-8', 'py-4', 'text-xl', 'font-medium', 'rounded-lg'],
} as const;

const button = tv({
  base: [
    'inline-flex',
    'items-center',
    'justify-center',
    'border',
    'transition-colors',
    'duration-200',
    'ease-in-out',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:pointer-events-none',
  ],
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
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ children, className, variant, size, ...props }: ButtonProps) => {
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
