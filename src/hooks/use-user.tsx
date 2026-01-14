import type { User } from '@supabase/supabase-js';
import { createContext, type ReactNode, useContext } from 'react';

/**
 * Context for storing and accessing the current authenticated user
 */
export interface UserContextType {
  /**
   * The current authenticated user, or null if not authenticated
   */
  user: User | null;
  /**
   * Whether the user data is currently loading
   */
  isLoading: boolean;
}

/**
 * Default context value when no provider is present
 */
const defaultContextValue: UserContextType = {
  isLoading: false,
  user: null,
};

/**
 * Context for storing and accessing the current authenticated user
 */
export const UserContext: React.Context<UserContextType> =
  createContext<UserContextType>(defaultContextValue);

/**
 * Props for the UserContextProvider component
 */
export interface UserContextProviderProps {
  /**
   * The current authenticated user, or null if not authenticated
   */
  user: User | null;
  /**
   * Whether the user data is currently loading
   */
  isLoading?: boolean;
  /**
   * Child components that will have access to the user context
   */
  children: ReactNode;
}

/**
 * Provider component for the UserContext
 */
export function UserContextProvider({
  user,
  isLoading = false,
  children,
}: UserContextProviderProps): React.JSX.Element {
  return <UserContext.Provider value={{ isLoading, user }}>{children}</UserContext.Provider>;
}

/**
 * Hook to access the current authenticated user from the UserContext
 * @returns The current user context containing the user object and loading state
 */
export function useUser(): UserContextType {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UserContextProvider');
  }

  return context;
}
