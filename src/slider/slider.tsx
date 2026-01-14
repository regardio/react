import { Slider as BaseUISlider } from '@base-ui/react/slider';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

const sliderRoot = tv({
  base: ['relative', 'flex', 'items-center', 'w-full'],
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      lg: ['h-8'],
      md: ['h-6'],
      sm: ['h-4'],
    },
  },
});

const sliderControl = tv({
  base: ['relative', 'flex', 'items-center', 'w-full', 'touch-none'],
});

const sliderTrack = tv({
  base: ['relative', 'w-full', 'rounded-full', 'bg-gray-200', 'overflow-hidden'],
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      lg: ['h-3'],
      md: ['h-2'],
      sm: ['h-1'],
    },
  },
});

const sliderIndicator = tv({
  base: ['absolute', 'h-full', 'bg-blue-600', 'rounded-full'],
});

const sliderThumb = tv({
  base: [
    'block',
    'rounded-full',
    'bg-white',
    'border-2',
    'border-blue-600',
    'shadow-lg',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue-500',
    'focus:ring-offset-2',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
    'cursor-grab',
    'active:cursor-grabbing',
  ],
  defaultVariants: {
    size: 'md',
  },
  variants: {
    size: {
      lg: ['h-6', 'w-6'],
      md: ['h-5', 'w-5'],
      sm: ['h-3', 'w-3'],
    },
  },
});

const sliderValue = tv({
  base: ['text-sm', 'font-medium', 'text-gray-700', 'mb-2'],
});

export type SliderSize = 'sm' | 'md' | 'lg';

export interface SliderRootProps
  extends Omit<ComponentProps<typeof BaseUISlider.Root>, 'className'> {
  className?: string;
  size?: SliderSize;
}

export interface SliderControlProps
  extends Omit<ComponentProps<typeof BaseUISlider.Control>, 'className'> {
  className?: string;
}

export interface SliderTrackProps
  extends Omit<ComponentProps<typeof BaseUISlider.Track>, 'className'> {
  className?: string;
  size?: SliderSize;
}

export interface SliderIndicatorProps
  extends Omit<ComponentProps<typeof BaseUISlider.Indicator>, 'className'> {
  className?: string;
}

export interface SliderThumbProps
  extends Omit<ComponentProps<typeof BaseUISlider.Thumb>, 'className'> {
  className?: string;
  size?: SliderSize;
}

export interface SliderValueProps
  extends Omit<ComponentProps<typeof BaseUISlider.Value>, 'className'> {
  className?: string;
}

export const SliderRoot = ({
  className,
  size = 'md',
  ...props
}: SliderRootProps): React.JSX.Element => {
  return (
    <BaseUISlider.Root
      className={sliderRoot({
        className,
        size,
      })}
      {...props}
    />
  );
};

export const SliderControl = ({ className, ...props }: SliderControlProps): React.JSX.Element => {
  return (
    <BaseUISlider.Control
      className={sliderControl({ className })}
      {...props}
    />
  );
};

export const SliderTrack = ({
  className,
  size = 'md',
  ...props
}: SliderTrackProps): React.JSX.Element => {
  return (
    <BaseUISlider.Track
      className={sliderTrack({
        className,
        size,
      })}
      {...props}
    />
  );
};

export const SliderIndicator = ({
  className,
  ...props
}: SliderIndicatorProps): React.JSX.Element => {
  return (
    <BaseUISlider.Indicator
      className={sliderIndicator({ className })}
      {...props}
    />
  );
};

export const SliderThumb = ({
  className,
  size = 'md',
  ...props
}: SliderThumbProps): React.JSX.Element => {
  return (
    <BaseUISlider.Thumb
      className={sliderThumb({
        className,
        size,
      })}
      {...props}
    />
  );
};

export const SliderValue = ({ className, ...props }: SliderValueProps): React.JSX.Element => {
  return (
    <BaseUISlider.Value
      className={sliderValue({ className })}
      {...props}
    />
  );
};

export const Slider: {
  Control: typeof SliderControl;
  Indicator: typeof SliderIndicator;
  Root: typeof SliderRoot;
  Thumb: typeof SliderThumb;
  Track: typeof SliderTrack;
  Value: typeof SliderValue;
} = {
  Control: SliderControl,
  Indicator: SliderIndicator,
  Root: SliderRoot,
  Thumb: SliderThumb,
  Track: SliderTrack,
  Value: SliderValue,
};
