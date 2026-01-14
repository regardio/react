'use client';

import { useEffect, useState } from 'react';

/**
 * Orientation type representing device orientation
 */
export type Orientation = 'portrait' | 'landscape';

/**
 * Hook that tracks the current device orientation
 * @returns The current orientation ('portrait' or 'landscape')
 */
export function useOrientation(): Orientation {
  const [orientation, setOrientation] = useState<Orientation>(() => {
    // Initial orientation check
    if (typeof window !== 'undefined') {
      return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    }
    return 'portrait'; // Default for SSR
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // Handler to call on window resize
    const handleResize = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    // Set resize listener
    window.addEventListener('resize', handleResize);

    // Optional: Listen to orientation change event for mobile devices
    window.addEventListener('orientationchange', handleResize);

    // Call handler right away to set initial orientation
    handleResize();

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return orientation;
}
