'use client';

import { useCallback, useSyncExternalStore } from 'react';
import Icon from '@/components/atoms/Icon';
import { PREFERENCE_EVENT } from '@/lib/preferences';
import styles from './PreferenceToggle.module.scss';

const subscribe = (callback) => {
  window.addEventListener(PREFERENCE_EVENT, callback);
  return () => window.removeEventListener(PREFERENCE_EVENT, callback);
};

/**
 * On/off button for a display preference stored as a data-* attribute on
 * <html> (the <head> script sets it before paint) and in localStorage.
 * @param {{
 *   name: 'theme' | 'contrast',
 *   on: string,
 *   off: string,
 *   icon: string,
 *   label: string,
 *   showLabel?: boolean,
 *   onChange?: (value: string) => void,
 * }} props
 */
export default function PreferenceToggle({
  name,
  on,
  off,
  icon,
  label,
  showLabel = false,
  onChange,
}) {
  const getSnapshot = useCallback(() => document.documentElement.dataset[name] === on, [name, on]);
  const active = useSyncExternalStore(subscribe, getSnapshot, () => false);

  const toggle = () => {
    const next = active ? off : on;
    document.documentElement.dataset[name] = next;
    try {
      localStorage.setItem(name, next);
    } catch {
      // Storage unavailable (private mode): the choice lasts until reload
    }
    onChange?.(next);
    window.dispatchEvent(new Event(PREFERENCE_EVENT));
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-pressed={active}
      onClick={toggle}
      data-component="atoms/PreferenceToggle"
    >
      <Icon name={icon} size={18} />
      <span className={showLabel ? styles.label : 'sr-only'}>{label}</span>
    </button>
  );
}
