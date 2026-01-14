import { Switch as BaseUISwitch } from '@base-ui/react/switch';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

const switchRoot = tv({
  base: [
    'relative',
    'inline-flex',
    'items-center',
    'rounded-full',
    'transition-colors',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:ring-offset-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'cursor-pointer',
    'bg-gray-300',
    'data-[checked]:bg-blue-600',
  ],
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      lg: ['h-8', 'w-14'],
      md: ['h-6', 'w-11'],
      sm: ['h-4', 'w-7'],
    },
  },
});

const switchThumb = tv({
  base: [
    'pointer-events-none',
    'inline-block',
    'rounded-full',
    'bg-white',
    'shadow-lg',
    'ring-0',
    'transition-transform',
    'duration-200',
    'translate-x-0',
    'data-[checked]:translate-x-full',
  ],
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      lg: ['h-6', 'w-6', 'data-[checked]:translate-x-6'],
      md: ['h-5', 'w-5', 'data-[checked]:translate-x-5'],
      sm: ['h-3', 'w-3', 'data-[checked]:translate-x-3'],
    },
  },
});

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchRootProps
  extends Omit<ComponentProps<typeof BaseUISwitch.Root>, 'className'> {
  className?: string;
  size?: SwitchSize;
}

export interface SwitchThumbProps
  extends Omit<ComponentProps<typeof BaseUISwitch.Thumb>, 'className'> {
  className?: string;
  size?: SwitchSize;
}

export const SwitchRoot = ({
  className,
  size = 'md',
  ...props
}: SwitchRootProps): React.JSX.Element => {
  return (
    <BaseUISwitch.Root
      className={switchRoot({
        className,
        size,
      })}
      {...props}
    />
  );
};

export const SwitchThumb = ({
  className,
  size = 'md',
  ...props
}: SwitchThumbProps): React.JSX.Element => {
  return (
    <BaseUISwitch.Thumb
      className={switchThumb({
        className,
        size,
      })}
      {...props}
    />
  );
};

export const Switch: {
  Root: typeof SwitchRoot;
  Thumb: typeof SwitchThumb;
} = {
  Root: SwitchRoot,
  Thumb: SwitchThumb,
};
