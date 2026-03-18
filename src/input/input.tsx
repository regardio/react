import { Input as BaseUIInput } from '@base-ui/react/input';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

const input = tv({
  base: [],
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
  variants: {
    size: {
      lg: ['px-4', 'py-3'],
      md: ['px-3', 'py-2'],
      sm: ['px-2', 'py-1'],
    },
    variant: {
      default: [
        'w-full',
        'border',
        'border-current',
        'rounded-md',
        'bg-background-muted',
        'text-foreground',
        'placeholder:text-muted-foreground',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-ring',
        'focus:border-ring',
        'transition-colors',
        'duration-200',
      ],
      error: [
        'w-full',
        'border',
        'rounded-md',
        'bg-background-muted',
        'focus:outline-none',
        'focus:ring-2',
        'transition-colors',
        'duration-200',
        'border-destructive',
        'text-destructive',
        'placeholder:text-destructive',
        'focus:ring-destructive',
        'focus:border-destructive',
      ],
    },
  },
});

export type InputVariant = 'default' | 'error';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<ComponentProps<typeof BaseUIInput>, 'className' | 'size'> {
  className?: string;
  size?: InputSize;
  variant?: InputVariant;
}

export const Input = ({ className, variant, size, ...props }: InputProps): React.JSX.Element => {
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
