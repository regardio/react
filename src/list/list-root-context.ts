import { createContext, useContext } from 'react';

export interface ListRootContextValue {
  /**
   * Default className to apply to all list items.
   */
  defaultItemClassName?: string;
  /**
   * Default element type for list items.
   * @default 'li'
   */
  defaultItemElement: 'li' | 'dd' | 'dt' | 'div' | 'span';
}

export const ListRootContext: React.Context<ListRootContextValue | undefined> = createContext<
  ListRootContextValue | undefined
>(undefined);

export function useListRootContext(): ListRootContextValue | undefined {
  return useContext(ListRootContext);
}
