'use client';

import { useSyncExternalStore } from 'react';
import Icon from '@/components/atoms/Icon';
import styles from './ContrastToggle.module.scss';

const EVENT = 'contrastchange';

// El script del <head> ya dejó data-contrast según la preferencia guardada
// o la del sistema; aquí solo se lee y se cambia.
const subscribe = (callback) => {
  window.addEventListener(EVENT, callback);
  return () => window.removeEventListener(EVENT, callback);
};
const getSnapshot = () => document.documentElement.dataset.contrast === 'more';
const getServerSnapshot = () => false;

/** @param {{ label: string }} props */
export default function ContrastToggle({ label }) {
  const on = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next = on ? 'normal' : 'more';
    document.documentElement.dataset.contrast = next;
    try {
      localStorage.setItem('contrast', next);
    } catch {
      // Sin almacenamiento (modo privado): el cambio dura hasta recargar
    }
    window.dispatchEvent(new Event(EVENT));
  };

  return (
    <button
      type="button"
      className={styles.toggle}
      aria-pressed={on}
      onClick={toggle}
      data-component="atoms/ContrastToggle"
    >
      <Icon name="contrast" size={18} />
      <span className={styles.label}>{label}</span>
    </button>
  );
}
