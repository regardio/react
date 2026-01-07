import { tv, type VariantProps } from '@regardio/tailwind/utils';
import { forwardRef, type HTMLAttributes } from 'react';

const gridItem = tv({
  defaultVariants: {
    span: 12,
  },
  slots: {
    root: ['relative'],
  },
  variants: {
    end: {
      1: { root: 'col-end-1' },
      2: { root: 'col-end-2' },
      3: { root: 'col-end-3' },
      4: { root: 'col-end-4' },
      5: { root: 'col-end-5' },
      6: { root: 'col-end-6' },
      7: { root: 'col-end-7' },
      8: { root: 'col-end-8' },
      9: { root: 'col-end-9' },
      10: { root: 'col-end-10' },
      11: { root: 'col-end-11' },
      12: { root: 'col-end-12' },
      13: { root: 'col-end-13' },
      auto: { root: 'col-end-auto' },
    },
    rowSpan: {
      1: { root: 'row-span-1' },
      2: { root: 'row-span-2' },
      3: { root: 'row-span-3' },
      4: { root: 'row-span-4' },
      5: { root: 'row-span-5' },
      6: { root: 'row-span-6' },
      full: { root: 'row-span-full' },
    },
    span: {
      1: { root: 'col-span-1' },
      2: { root: 'col-span-2' },
      3: { root: 'col-span-3' },
      4: { root: 'col-span-4' },
      5: { root: 'col-span-5' },
      6: { root: 'col-span-6' },
      7: { root: 'col-span-7' },
      8: { root: 'col-span-8' },
      9: { root: 'col-span-9' },
      10: { root: 'col-span-10' },
      11: { root: 'col-span-11' },
      12: { root: 'col-span-12' },
      full: { root: 'col-span-full' },
    },
    spanLg: {
      1: { root: '@lg:col-span-1' },
      2: { root: '@lg:col-span-2' },
      3: { root: '@lg:col-span-3' },
      4: { root: '@lg:col-span-4' },
      5: { root: '@lg:col-span-5' },
      6: { root: '@lg:col-span-6' },
      7: { root: '@lg:col-span-7' },
      8: { root: '@lg:col-span-8' },
      9: { root: '@lg:col-span-9' },
      10: { root: '@lg:col-span-10' },
      11: { root: '@lg:col-span-11' },
      12: { root: '@lg:col-span-12' },
      full: { root: '@lg:col-span-full' },
    },
    spanMd: {
      1: { root: '@md:col-span-1' },
      2: { root: '@md:col-span-2' },
      3: { root: '@md:col-span-3' },
      4: { root: '@md:col-span-4' },
      5: { root: '@md:col-span-5' },
      6: { root: '@md:col-span-6' },
      7: { root: '@md:col-span-7' },
      8: { root: '@md:col-span-8' },
      9: { root: '@md:col-span-9' },
      10: { root: '@md:col-span-10' },
      11: { root: '@md:col-span-11' },
      12: { root: '@md:col-span-12' },
      full: { root: '@md:col-span-full' },
    },
    spanSm: {
      1: { root: '@sm:col-span-1' },
      2: { root: '@sm:col-span-2' },
      3: { root: '@sm:col-span-3' },
      4: { root: '@sm:col-span-4' },
      5: { root: '@sm:col-span-5' },
      6: { root: '@sm:col-span-6' },
      7: { root: '@sm:col-span-7' },
      8: { root: '@sm:col-span-8' },
      9: { root: '@sm:col-span-9' },
      10: { root: '@sm:col-span-10' },
      11: { root: '@sm:col-span-11' },
      12: { root: '@sm:col-span-12' },
      full: { root: '@sm:col-span-full' },
    },
    spanXl: {
      1: { root: '@xl:col-span-1' },
      2: { root: '@xl:col-span-2' },
      3: { root: '@xl:col-span-3' },
      4: { root: '@xl:col-span-4' },
      5: { root: '@xl:col-span-5' },
      6: { root: '@xl:col-span-6' },
      7: { root: '@xl:col-span-7' },
      8: { root: '@xl:col-span-8' },
      9: { root: '@xl:col-span-9' },
      10: { root: '@xl:col-span-10' },
      11: { root: '@xl:col-span-11' },
      12: { root: '@xl:col-span-12' },
      full: { root: '@xl:col-span-full' },
    },
    spanXs: {
      1: { root: '@xs:col-span-1' },
      2: { root: '@xs:col-span-2' },
      3: { root: '@xs:col-span-3' },
      4: { root: '@xs:col-span-4' },
      5: { root: '@xs:col-span-5' },
      6: { root: '@xs:col-span-6' },
      7: { root: '@xs:col-span-7' },
      8: { root: '@xs:col-span-8' },
      9: { root: '@xs:col-span-9' },
      10: { root: '@xs:col-span-10' },
      11: { root: '@xs:col-span-11' },
      12: { root: '@xs:col-span-12' },
      full: { root: '@xs:col-span-full' },
    },
    start: {
      1: { root: 'col-start-1' },
      2: { root: 'col-start-2' },
      3: { root: 'col-start-3' },
      4: { root: 'col-start-4' },
      5: { root: 'col-start-5' },
      6: { root: 'col-start-6' },
      7: { root: 'col-start-7' },
      8: { root: 'col-start-8' },
      9: { root: 'col-start-9' },
      10: { root: 'col-start-10' },
      11: { root: 'col-start-11' },
      12: { root: 'col-start-12' },
      13: { root: 'col-start-13' },
      auto: { root: 'col-start-auto' },
    },
  },
});

export type GridItemVariants = VariantProps<typeof gridItem>;

export interface GridItemProps extends HTMLAttributes<HTMLDivElement>, GridItemVariants {
  classNames?: {
    root?: string;
  };
}

export const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
      children,
      className,
      classNames,
      span,
      spanXs,
      spanSm,
      spanMd,
      spanLg,
      spanXl,
      start,
      end,
      rowSpan,
      ...props
    },
    ref,
  ) => {
    const styles = gridItem({ end, rowSpan, span, spanLg, spanMd, spanSm, spanXl, spanXs, start });

    return (
      <div
        className={styles.root({ className: classNames?.root ?? className })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
GridItem.displayName = 'GridItem';

export { gridItem };
