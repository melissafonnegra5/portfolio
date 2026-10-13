'use client';

import { useCallback, useSyncExternalStore } from 'react';

/**
 * True while the media query matches. On the server (and during the first
 * hydration) it returns false, so whatever depends on it must also look
 * right in its "false" version.
 * @param {string} query
 */
export function useMediaQuery(query) {
  const subscribe = useCallback(
    (callback) => {
      const list = matchMedia(query);
      list.addEventListener('change', callback);
      return () => list.removeEventListener('change', callback);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => matchMedia(query).matches,
    () => false,
  );
}
