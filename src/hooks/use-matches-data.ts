'use client';

import { useMemo } from 'react';
import { useMatches } from 'react-router';

/**
 * This base hook is used in other hooks to quickly search for specific data
 * across all loader data using useMatches.
 * @param {string} id The route id
 * @returns {JSON|undefined} The router data or undefined if not found
 */
export function useMatchesData<T>(id: string): T | undefined {
  const matchingRoutes = useMatches();
  const route = useMemo(() => {
    return matchingRoutes.find((route) => {
      return route.id === id;
    });
  }, [matchingRoutes, id]);

  return (route?.data as T) || undefined;
}
