import { Radio as BaseUIRadio } from '@base-ui/react/radio';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

const radioRoot = tv({
  base: [
    'h-4',
    'w-4',
    'rounded-full',
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

const radioIndicator = tv({
  base: ['flex', 'items-center', 'justify-center', 'text-white', 'data-[unchecked]:invisible'],
});

export type RadioSize = 'sm' | 'md' | 'lg';

export interface RadioRootProps extends Omit<ComponentProps<typeof BaseUIRadio.Root>, 'className'> {
  className?: string;
  size?: RadioSize;
}

export interface RadioIndicatorProps
  extends Omit<ComponentProps<typeof BaseUIRadio.Indicator>, 'className'> {
  className?: string;
}

export const RadioRoot = ({ className, size = 'md', ...props }: RadioRootProps) => {
  return (
    <BaseUIRadio.Root
      className={radioRoot({
        className,
        size,
      })}
      {...props}
    />
  );
};

export const RadioIndicator = ({ className, children, ...props }: RadioIndicatorProps) => {
  return (
    <BaseUIRadio.Indicator
      className={radioIndicator({ className })}
      {...props}
    >
      {children || (
        <svg
          fill="currentColor"
          height="8"
          viewBox="0 0 8 8"
          width="8"
        >
          <circle
            cx="4"
            cy="4"
            r="3"
          />
        </svg>
      )}
    </BaseUIRadio.Indicator>
  );
};

export const Radio = {
  Indicator: RadioIndicator,
  Root: RadioRoot,
};
