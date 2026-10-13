'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '@/components/atoms/Icon';
import styles from './Inspector.module.scss';

const SIDES = ['top', 'right', 'bottom', 'left'];

/**
 * Modo inspección: como Dev Mode en Figma. Al pasar el mouse o navegar con
 * Tab sobre un componente (cualquier elemento con data-component) dibuja su
 * caja, sus paddings y su nombre dentro del Atomic Design del sitio.
 */
/** @param {{ label: string, message: string }} props */
export default function Inspector({ label, message }) {
  const [active, setActive] = useState(false);
  const [box, setBox] = useState(null);
  const targetRef = useRef(null);

  const measure = useCallback((el) => {
    if (!el) {
      setBox(null);
      return;
    }
    const rect = el.getBoundingClientRect();
    const style = getComputedStyle(el);
    setBox({
      name: el.dataset.component,
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      padding: Object.fromEntries(
        SIDES.map((side) => [side, parseFloat(style.getPropertyValue(`padding-${side}`)) || 0])
      ),
    });
  }, []);

  const toggle = () => {
    setActive((on) => !on);
    setBox(null);
  };

  useEffect(() => {
    document.documentElement.dataset.inspect = active ? 'on' : 'off';
    if (!active) return undefined;

    let frame = 0;
    const schedule = (el) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => measure(el));
    };
    const pick = (event) => {
      const node = event.target instanceof Element ? event.target : null;
      const el = node?.closest('[data-component]') ?? null;
      targetRef.current = el;
      schedule(el);
    };
    const remeasure = () => schedule(targetRef.current);
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActive(false);
        setBox(null);
      }
    };

    document.addEventListener('pointermove', pick, { passive: true });
    document.addEventListener('focusin', pick);
    window.addEventListener('scroll', remeasure, { passive: true, capture: true });
    window.addEventListener('resize', remeasure);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', pick);
      document.removeEventListener('focusin', pick);
      window.removeEventListener('scroll', remeasure, { capture: true });
      window.removeEventListener('resize', remeasure);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [active, measure]);

  return (
    <>
      <button
        type="button"
        className={styles.toggle}
        aria-pressed={active}
        onClick={toggle}
        data-component="molecules/Inspector"
      >
        <Icon name="inspect" size={18} />
        {label}
      </button>

      <p className="sr-only" aria-live="polite">
        {active ? message : ''}
      </p>

      {active && box && (
        <div
          className={styles.overlay}
          aria-hidden="true"
          style={{
            top: box.top,
            left: box.left,
            width: box.width,
            height: box.height,
          }}
        >
          {SIDES.map(
            (side) =>
              box.padding[side] > 0 && (
                <span
                  key={side}
                  className={`${styles.padding} ${styles[side]}`}
                  style={{ '--size': `${box.padding[side]}px` }}
                >
                  <span className={styles.value}>{Math.round(box.padding[side])}</span>
                </span>
              )
          )}
          <span className={styles.label}>{box.name}</span>
          <span className={styles.size}>
            {Math.round(box.width)} × {Math.round(box.height)}
          </span>
        </div>
      )}
    </>
  );
}
