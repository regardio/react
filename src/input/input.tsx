import { Input as BaseUIInput } from '@base-ui/react/input';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

const inputVariants = {
  default: [
    'w-full',
    'px-3',
    'py-2',
    'border',
    'border-gray-300',
    'rounded-md',
    'bg-white',
    'text-gray-900',
    'placeholder-gray-500',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:border-blue-500',
    'transition-colors',
    'duration-200',
  ],
  error: [
    'border-red-300',
    'text-red-900',
    'placeholder-red-500',
    'focus:ring-red-500',
    'focus:border-red-500',
  ],
  success: [
    'border-green-300',
    'text-green-900',
    'placeholder-green-500',
    'focus:ring-green-500',
    'focus:border-green-500',
  ],
} as const;

const inputSizes = {
  lg: ['px-4', 'py-3', 'text-lg'],
  md: ['px-3', 'py-2', 'text-base'],
  sm: ['px-2', 'py-1', 'text-sm'],
} as const;

const input = tv({
  base: [
    'w-full',
    'px-3',
    'py-2',
    'border',
    'border-gray-300',
    'rounded-md',
    'bg-white',
    'text-gray-900',
    'placeholder-gray-500',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:border-blue-500',
    'transition-colors',
    'duration-200',
  ],
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
  variants: {
    size: {
      lg: ['px-4', 'py-3', 'text-lg'],
      md: [],
      sm: ['px-2', 'py-1', 'text-sm'],
    },
    variant: {
      default: [],
      error: [
        'border-red-300',
        'text-red-900',
        'placeholder-red-500',
        'focus:ring-red-500',
        'focus:border-red-500',
      ],
      success: [
        'border-green-300',
        'text-green-900',
        'placeholder-green-500',
        'focus:ring-green-500',
        'focus:border-green-500',
      ],
    },
  },
});

export type InputVariant = keyof typeof inputVariants;
export type InputSize = keyof typeof inputSizes;

export interface InputProps extends Omit<ComponentProps<typeof BaseUIInput>, 'className' | 'size'> {
  className?: string;
  variant?: InputVariant;
  size?: InputSize;
}

export const Input = ({ className, variant, size, ...props }: InputProps) => {
  return (
    <BaseUIInput
      className={input({
        className,
        size,
        variant,
      })}
      {...props}
    />
  );
};
