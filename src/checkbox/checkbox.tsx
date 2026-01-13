import { Checkbox as BaseUICheckbox } from '@base-ui/react/checkbox';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

const checkboxRoot = tv({
  base: [
    'h-4',
    'w-4',
    'rounded',
    'border',
    'border-gray-300',
    'bg-white',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:ring-offset-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'data-[checked]:bg-blue-600',
    'data-[checked]:border-blue-600',
    'transition-colors',
    'duration-200',
    'cursor-pointer',
  ],
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      lg: ['h-5', 'w-5'],
      md: ['h-4', 'w-4'],
      sm: ['h-3', 'w-3'],
    },
  },
});

const checkboxIndicator = tv({
  base: ['flex', 'items-center', 'justify-center', 'text-white', 'data-[unchecked]:invisible'],
});

export type CheckboxSize = 'sm' | 'md' | 'lg';

export interface CheckboxRootProps
  extends Omit<ComponentProps<typeof BaseUICheckbox.Root>, 'className'> {
  className?: string;
  size?: CheckboxSize;
}

export interface CheckboxIndicatorProps
  extends Omit<ComponentProps<typeof BaseUICheckbox.Indicator>, 'className'> {
  className?: string;
}

export const CheckboxRoot = ({ className, size = 'md', ...props }: CheckboxRootProps) => {
  return (
    <BaseUICheckbox.Root
      className={checkboxRoot({
        className,
        size,
      })}
      {...props}
    />
  );
};

export const CheckboxIndicator = ({ className, children, ...props }: CheckboxIndicatorProps) => {
  return (
    <BaseUICheckbox.Indicator
      className={checkboxIndicator({ className })}
      {...props}
    >
      {children || (
        <svg
          fill="none"
          height="12"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 12 12"
          width="12"
        >
          <polyline points="2,6 5,9 10,3" />
        </svg>
      )}
    </BaseUICheckbox.Indicator>
  );
};

export const Checkbox = {
  Indicator: CheckboxIndicator,
  Root: CheckboxRoot,
};
