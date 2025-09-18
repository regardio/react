import type { ComponentProps } from 'react';
import { cva, type VariantProps } from '../utils/cn';

const dl = cva({
  base: ['grid'],
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: {
      primary: ['grid-cols-[auto,1fr]', 'gap-x-s', 'gap-y-2xs'], // Two-column grid with gap
      unstyled: ['list-none', 'p-0', 'grid-cols-1'], // Unstyled, single column
    },
  },
});

const dt = cva({
  base: [],
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: {
      primary: ['uppercase', 'tracking-wide'],
    },
  },
});

const dd = cva({
  base: ['mb-xs'],
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: {
      primary: [],
    },
  },
});

export interface DefinitionListProps extends ComponentProps<'dl'>, VariantProps<typeof dl> {}

export interface DtProps extends ComponentProps<'dt'>, VariantProps<typeof dt> {}

export interface DdProps extends ComponentProps<'dd'>, VariantProps<typeof dd> {}

export const DefinitionList = (props: DefinitionListProps) => {
  const { children, className, variant } = props;

  return (
    <dl
      className={dl({
        className,
        variant,
      })}
    >
      {children}
    </dl>
  );
};

export const Dt = (props: DtProps) => {
  const { children, className, variant } = props;

  return (
    <dt
      className={dt({
        className,
        variant,
      })}
    >
      {children}
    </dt>
  );
};

export const Dd = (props: DdProps) => {
  const { children, className, variant } = props;

  return (
    <dd
      className={dd({
        className,
        variant,
      })}
    >
      {children}
    </dd>
  );
};
