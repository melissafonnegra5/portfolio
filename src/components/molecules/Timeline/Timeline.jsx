'use client';

import { useEffect, useRef } from 'react';

/**
 * Timeline list whose rail fills up to the middle of the screen as you
 * scroll, marking each item it reaches. Plain scroll math instead of CSS
 * scroll-driven animations, so it behaves the same in every browser.
 * Without JavaScript (or with reduced motion) everything shows as reached.
 * @param {{ className?: string, children: React.ReactNode }} props
 */
export default function Timeline({ className, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const list = ref.current;
    if (!list || matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const middle = window.innerHeight / 2;
      const rect = list.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (middle - rect.top) / rect.height));
      list.style.setProperty('--progress', progress.toFixed(4));
      for (const item of list.children) {
        const marker = item.querySelector('[data-marker]');
        const reached = marker && marker.getBoundingClientRect().top <= middle;
        item.toggleAttribute('data-reached', Boolean(reached));
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    list.dataset.tracking = '';
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      delete list.dataset.tracking;
      list.style.removeProperty('--progress');
    };
  }, []);

  return (
    <ol ref={ref} className={className} data-component="molecules/Timeline">
      {children}
    </ol>
  );
}
