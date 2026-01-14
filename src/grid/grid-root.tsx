import { tv } from '@regardio/tailwind/utils';
import { createContext, type HTMLAttributes, useContext } from 'react';

const GRID_VARIANTS = {
  align: ['center', 'end', 'start', 'stretch'] as const,
  flow: ['column', 'dense', 'row'] as const,
} as const;

interface GridVariantProps {
  align?: (typeof GRID_VARIANTS.align)[number];
  flow?: (typeof GRID_VARIANTS.flow)[number];
}

interface GridSlotProps {
  class?: string;
  className?: string;
}

interface GridSlots {
  root: (props?: GridSlotProps) => string;
}

type GridStyleFn = (props?: GridVariantProps) => GridSlots;

const grid = tv({
  defaultVariants: {
    flow: 'dense',
  },
  slots: {
    root: [
      'u-grid',
      'grid',
      'grid-cols-12',
      'gap-[var(--spacing-grid-gutter)]',
      'w-full',
      'container-[grid]/inline-size',
    ],
  },
  variants: {
    align: {
      center: { root: 'content-center' },
      end: { root: 'content-end' },
      start: { root: 'content-start' },
      stretch: { root: 'content-stretch' },
    },
    flow: {
      column: { root: 'grid-auto-flow-col' },
      dense: { root: 'grid-auto-flow-dense' },
      row: { root: 'grid-auto-flow-row' },
    },
  },
}) as GridStyleFn;

type GridVariants = GridVariantProps;

interface GridContextValue {
  styles: ReturnType<typeof grid>;
}

const GridContext = createContext<GridContextValue | null>(null);

export function useGrid(): GridContextValue {
  const context = useContext(GridContext);
  if (!context) {
    throw new Error('useGrid must be used within a <Grid.Root />');
  }
  return context;
}

export interface GridRootProps extends HTMLAttributes<HTMLDivElement>, GridVariants {
  classNames?: {
    root?: string;
  };
  ref?: React.Ref<HTMLDivElement>;
}

export const GridRoot = function GridRoot({
  children,
  className,
  classNames,
  flow,
  align,
  ref,
  ...props
}: GridRootProps): React.JSX.Element {
  const styles = grid({ align, flow });

  return (
    <GridContext.Provider value={{ styles }}>
      <div
        className={styles.root({ className: classNames?.root ?? className })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    </GridContext.Provider>
  );
};
