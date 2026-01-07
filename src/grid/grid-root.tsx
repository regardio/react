import { tv, type VariantProps } from '@regardio/tailwind/utils';
import { createContext, forwardRef, type HTMLAttributes, useContext } from 'react';

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
});

type GridVariants = VariantProps<typeof grid>;

interface GridContextValue {
  styles: ReturnType<typeof grid>;
}

const GridContext = createContext<GridContextValue | null>(null);

export function useGrid() {
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
}

export const GridRoot = forwardRef<HTMLDivElement, GridRootProps>(
  ({ children, className, classNames, flow, align, ...props }, ref) => {
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
  },
);
GridRoot.displayName = 'GridRoot';
