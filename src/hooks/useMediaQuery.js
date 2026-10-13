'use client';

import { useCallback, useSyncExternalStore } from 'react';

/**
 * true mientras la media query se cumpla. En el servidor (y en la primera
 * hidratación) devuelve false, así que lo que dependa de esto debe verse
 * bien también en su versión "false".
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
