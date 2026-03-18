import { Fieldset as BaseUIFieldset } from '@base-ui/react/fieldset';
import { tv } from '@regardio/tailwind/utils';
import type { ComponentProps } from 'react';

const fieldsetRootVariants = {
  compact: ['border', 'border-current', 'rounded-lg', 'p-4', 'space-y-2'],
  default: ['border', 'border-current', 'rounded-lg', 'p-4', 'space-y-4'],
} as const;

const fieldsetRoot = tv({
  base: [],
  defaultVariants: {
    variant: 'default',
  },
  variants: {
    variant: fieldsetRootVariants,
  },
});

const fieldsetLegend = tv({
  base: [],
  defaultVariants: {
    size: 'default',
  },
  variants: {
    size: {
      default: ['text-foreground', 'mb-2'],
      small: ['text-foreground', 'mb-1'],
    },
  },
});

export type FieldsetRootVariant = keyof typeof fieldsetRootVariants;
export type FieldsetLegendSize = 'default' | 'small';

export interface FieldsetRootProps
  extends Omit<ComponentProps<typeof BaseUIFieldset.Root>, 'className'> {
  className?: string;
  variant?: FieldsetRootVariant;
}

export interface FieldsetLegendProps
  extends Omit<ComponentProps<typeof BaseUIFieldset.Legend>, 'className'> {
  className?: string;
  size?: FieldsetLegendSize;
}

export const FieldsetRoot = ({
  className,
  variant,
  ...props
}: FieldsetRootProps): React.JSX.Element => {
  return (
    <BaseUIFieldset.Root
      className={fieldsetRoot({
        className,
        variant,
      })}
      {...props}
    />
  );
};

export const FieldsetLegend = ({
  className,
  size,
  ...props
}: FieldsetLegendProps): React.JSX.Element => {
  return (
    <BaseUIFieldset.Legend
      className={fieldsetLegend({
        className,
        size,
      })}
      {...props}
    />
  );
};

export const Fieldset: {
  Legend: typeof FieldsetLegend;
  Root: typeof FieldsetRoot;
} = {
  Legend: FieldsetLegend,
  Root: FieldsetRoot,
};
