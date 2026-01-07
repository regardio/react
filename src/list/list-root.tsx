'use client';

import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ForwardedRef,
  forwardRef,
  type ReactNode,
  useMemo,
} from 'react';
import { ListRootContext, type ListRootContextValue } from './list-root-context';

type ListRootElement = 'ul' | 'ol' | 'dl' | 'div' | 'menu' | 'nav';

export type ListRootProps<T extends ListRootElement = 'ul'> = Omit<
  ComponentPropsWithoutRef<T>,
  'children'
> & {
  /**
   * The element type to render.
   * @default 'ul'
   */
  render?: T;
  /**
   * The content of the list.
   */
  children?: ReactNode;
  /**
   * Default element type for list items.
   * When render is 'dl', defaults to 'dd'. Otherwise defaults to 'li'.
   */
  defaultItemElement?: ListRootContextValue['defaultItemElement'];
  /**
   * Default className to apply to all list items.
   */
  defaultItemClassName?: string;
};

function ListRootImpl<T extends ListRootElement = 'ul'>(
  props: ListRootProps<T>,
  ref: ForwardedRef<HTMLElement>,
) {
  const {
    render = 'ul' as T,
    children,
    defaultItemElement,
    defaultItemClassName,
    ...elementProps
  } = props;

  const resolvedDefaultItemElement = defaultItemElement ?? (render === 'dl' ? 'dd' : 'li');

  const contextValue = useMemo<ListRootContextValue>(
    () => ({
      defaultItemClassName,
      defaultItemElement: resolvedDefaultItemElement,
    }),
    [resolvedDefaultItemElement, defaultItemClassName],
  );

  const Component = render as ElementType;

  return (
    <ListRootContext.Provider value={contextValue}>
      <Component
        ref={ref}
        {...elementProps}
      >
        {children}
      </Component>
    </ListRootContext.Provider>
  );
}

export const ListRoot = forwardRef(ListRootImpl) as <T extends ListRootElement = 'ul'>(
  props: ListRootProps<T> & { ref?: ForwardedRef<HTMLElement> },
) => ReturnType<typeof ListRootImpl>;

export namespace ListRoot {
  export type Props<T extends ListRootElement = 'ul'> = ListRootProps<T>;
}
