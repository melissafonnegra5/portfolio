'use client';

import { useLayoutEffect } from 'react';
import { applyPreferences, PREFERENCE_EVENT } from '@/lib/preferences';

/**
 * Re-applies theme and contrast after client navigations: switching
 * language re-renders <html>, which drops the attributes the <head> script
 * set. useLayoutEffect runs before paint, so there's no flash.
 */
export default function PreferencesSync() {
  useLayoutEffect(() => {
    applyPreferences();
    window.dispatchEvent(new Event(PREFERENCE_EVENT));
  });
  return null;
}
