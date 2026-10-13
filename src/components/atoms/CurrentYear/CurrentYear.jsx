'use client';

import { useSyncExternalStore } from 'react';

// El año se lee en el navegador; en el prerender se usa el del último build
const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => 2026;

export default function CurrentYear() {
  return useSyncExternalStore(subscribe, getYear, getServerYear);
}
