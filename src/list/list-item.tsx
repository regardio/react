'use client';

import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
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
  /**
   * Ref to the root element.
   */
  ref?: React.Ref<HTMLElement>;
};

function ListItemImpl<T extends ListItemElement = 'li'>(
  props: ListItemProps<T>,
): React.JSX.Element {
  const context = useListRootContext();

  const { render, children, className, ref, ...elementProps } = props;

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

export const ListItem = ListItemImpl as <T extends ListItemElement = 'li'>(
  props: ListItemProps<T>,
) => React.JSX.Element;

export namespace ListItem {
  export type Props<T extends ListItemElement = 'li'> = ListItemProps<T>;
}
