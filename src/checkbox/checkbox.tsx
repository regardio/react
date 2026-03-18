import { Checkbox as BaseUICheckbox } from '@base-ui/react/checkbox';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

const checkboxRoot = tv({
  base: [
    'flex',
    'items-center',
    'justify-center',
    'rounded',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-ring',
    'disabled:cursor-not-allowed',
    'data-[checked]:bg-primary',
    'data-[unchecked]:border',
    'data-[unchecked]:border-current',
    'data-[unchecked]:bg-background-muted',
    'transition-colors',
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
  base: ['flex', 'text-primary-foreground', 'data-[unchecked]:hidden'],
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

export const CheckboxRoot = ({
  className,
  size = 'md',
  ...props
}: CheckboxRootProps): React.JSX.Element => {
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

export const CheckboxIndicator = ({
  className,
  children,
  ...props
}: CheckboxIndicatorProps): React.JSX.Element => {
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

export const Checkbox: {
  Indicator: typeof CheckboxIndicator;
  Root: typeof CheckboxRoot;
} = {
  Indicator: CheckboxIndicator,
  Root: CheckboxRoot,
};
