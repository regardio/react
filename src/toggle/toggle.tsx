import { Toggle as BaseUIToggle } from '@base-ui/react/toggle';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps, ReactNode } from 'react';

const toggle: ReturnType<typeof tv> = tv({
  base: [
    'inline-flex',
    'items-center',
    'justify-center',
    'rounded-md',
    'text-sm',
    'font-medium',
    'transition-colors',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:ring-offset-2',
    'disabled:pointer-events-none',
    'disabled:opacity-50',
  ],
  defaultVariants: {
    size: 'md',
    variant: 'outline',
  },
  variants: {
    size: {
      lg: ['h-12', 'w-12', 'p-3'],
      md: ['h-10', 'w-10', 'p-2'],
      sm: ['h-8', 'w-8', 'p-1'],
    },
    variant: {
      default: [],
      ghost: [
        'bg-transparent',
        'text-gray-700',
        'hover:bg-gray-100',
        'hover:text-gray-900',
        'data-[pressed]:bg-gray-200',
        'data-[pressed]:text-gray-900',
      ],
      outline: [
        'border',
        'border-gray-300',
        'bg-white',
        'text-gray-700',
        'hover:bg-gray-50',
        'hover:text-gray-900',
        'data-[pressed]:bg-gray-100',
        'data-[pressed]:text-gray-900',
      ],
    },
  },
} as const);

export type ToggleVariant = keyof typeof toggle.variants.variant;
export type ToggleSize = keyof typeof toggle.variants.size;

export interface ToggleProps extends Omit<ComponentProps<typeof BaseUIToggle>, 'className'> {
  children?: ReactNode;
  className?: string;
  size?: ToggleSize;
  title?: string;
  variant?: ToggleVariant;
}

export const Toggle = ({
  className,
  variant = 'outline',
  size = 'md',
  title,
  children,
  ...props
}: ToggleProps): React.JSX.Element => {
  return (
    <BaseUIToggle
      className={toggle({
        className,
        size,
        variant,
      })}
      title={title}
      {...props}
    >
      {children}
    </BaseUIToggle>
  );
};
