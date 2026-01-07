'use client';

import { createContext, useContext } from 'react';

export interface ListRootContextValue {
  /**
   * Default element type for list items.
   * @default 'li'
   */
  defaultItemElement: 'li' | 'dd' | 'dt' | 'div' | 'span';
  /**
   * Default className to apply to all list items.
   */
  defaultItemClassName?: string;
}

export const ListRootContext = createContext<ListRootContextValue | undefined>(undefined);

export function useListRootContext(): ListRootContextValue | undefined {
  return useContext(ListRootContext);
}
