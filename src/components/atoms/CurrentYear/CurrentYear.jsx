'use client';

import { useSyncExternalStore } from 'react';

// The year is read in the browser; the prerender uses the build year
const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => 2026;

export default function CurrentYear() {
  return useSyncExternalStore(subscribe, getYear, getServerYear);
}
