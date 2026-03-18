import { Radio as BaseUIRadio } from '@base-ui/react/radio';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

const radioRoot = tv({
  base: [
    'flex',
    'items-center',
    'justify-center',
    'rounded-full',
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

const radioIndicator = tv({
  base: ['flex', 'text-primary-foreground', 'data-[unchecked]:hidden'],
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

export const RadioRoot = ({
  className,
  size = 'md',
  ...props
}: RadioRootProps): React.JSX.Element => {
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

export const RadioIndicator = ({
  className,
  children,
  ...props
}: RadioIndicatorProps): React.JSX.Element => {
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

export const Radio: {
  Indicator: typeof RadioIndicator;
  Root: typeof RadioRoot;
} = {
  Indicator: RadioIndicator,
  Root: RadioRoot,
};
