'use client';

import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ForwardedRef,
  forwardRef,
  type ReactNode,
} from 'react';
import { useListRootContext } from './list-root-context';

type ListItemElement = 'li' | 'dd' | 'dt' | 'div' | 'span';

export type ListItemProps<T extends ListItemElement = 'li'> = Omit<
  ComponentPropsWithoutRef<T>,
  'children'
> & {
  /**
   * The element type to render.
   * Falls back to the defaultItemElement from ListRoot context, or 'li'.
   */
  render?: T;
  /**
   * The content of the list item.
   */
  children?: ReactNode;
};

function ListItemImpl<T extends ListItemElement = 'li'>(
  props: ListItemProps<T>,
  ref: ForwardedRef<HTMLElement>,
) {
  const context = useListRootContext();

  const { render, children, className, ...elementProps } = props;

  const resolvedElement = render ?? context?.defaultItemElement ?? 'li';
  const resolvedClassName = context?.defaultItemClassName
    ? className
      ? `${context.defaultItemClassName} ${className}`
      : context.defaultItemClassName
    : className;

  const Component = resolvedElement as ElementType;

  return (
    <Component
      className={resolvedClassName}
      ref={ref}
      {...elementProps}
    >
      {children}
    </Component>
  );
}

export const ListItem = forwardRef(ListItemImpl) as <T extends ListItemElement = 'li'>(
  props: ListItemProps<T> & { ref?: ForwardedRef<HTMLElement> },
) => ReturnType<typeof ListItemImpl>;

export namespace ListItem {
  export type Props<T extends ListItemElement = 'li'> = ListItemProps<T>;
}
