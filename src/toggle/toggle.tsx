import { Toggle as BaseUIToggle } from '@base-ui/react/toggle';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps, ReactNode } from 'react';

const toggle: ReturnType<typeof tv> = tv({
  base: [],
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
      default: [
        'inline-flex',
        'items-center',
        'justify-center',
        'rounded-md',
        'transition-colors',
        'duration-200',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-ring',
        'focus:ring-offset-2',
        'disabled:pointer-events-none',
      ],
      ghost: [
        'inline-flex',
        'items-center',
        'justify-center',
        'rounded-md',
        'transition-colors',
        'duration-200',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-ring',
        'focus:ring-offset-2',
        'disabled:pointer-events-none',
        'bg-transparent',
        'text-foreground',
        'hover:bg-muted',
        'data-[pressed]:bg-muted',
      ],
      outline: [
        'inline-flex',
        'items-center',
        'justify-center',
        'rounded-md',
        'transition-colors',
        'duration-200',
        'focus:outline-none',
        'focus:ring-2',
        'focus:ring-ring',
        'focus:ring-offset-2',
        'disabled:pointer-events-none',
        'border',
        'border-current',
        'bg-background-muted',
        'text-foreground',
        'hover:bg-muted',
        'data-[pressed]:bg-muted',
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
