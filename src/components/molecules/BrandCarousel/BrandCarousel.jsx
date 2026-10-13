'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import BrandGrid from '@/components/molecules/BrandGrid';
import { fill } from '@/lib/fill';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import styles from './BrandCarousel.module.scss';

const PAGE_SIZE = 4;

const chunk = (items, size) =>
  Array.from({ length: Math.ceil(items.length / size) }, (_, i) =>
    items.slice(i * size, i * size + size),
  );

/**
 * A filter's brands in swipeable pages of 4 (mobile only). The parent keys
 * it by filter, so each filter starts on its first page.
 * @param {{
 *   brands: { name: string, type: string, url?: string }[],
 *   labels: Record<string, string>,
 *   cardLabels: { site: string, siteSr: string },
 * }} props
 */
export default function BrandCarousel({ brands, labels, cardLabels }) {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [viewportRef, embla] = useEmblaCarousel({
    align: 'start',
    // Every page left-aligned, including the last one
    containScroll: false,
    duration: reduceMotion ? 10 : 25,
  });
  const [selected, setSelected] = useState(0);
  const pages = chunk(brands, PAGE_SIZE);

  const onSelect = useCallback((api) => setSelected(api.selectedScrollSnap()), []);

  useEffect(() => {
    if (!embla) return undefined;
    embla.on('select', onSelect).on('reInit', onSelect);
    return () => {
      embla.off('select', onSelect).off('reInit', onSelect);
    };
  }, [embla, onSelect]);

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-roledescription={labels.role}
      aria-label={labels.label}
      data-component="molecules/BrandCarousel"
    >
      <div className={styles.viewport} ref={viewportRef}>
        <div className={styles.track}>
          {pages.map((page, i) => (
            <div
              key={page[0].name}
              className={styles.slide}
              role="group"
              aria-roledescription={labels.slide}
              aria-label={fill(labels.slideLabel, { n: i + 1, total: pages.length })}
            >
              <BrandGrid brands={page} labels={cardLabels} className={styles.page} />
            </div>
          ))}
        </div>
      </div>

      {pages.length > 1 && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => embla?.scrollPrev()}
            disabled={selected === 0}
            aria-label={labels.prev}
          >
            <span aria-hidden="true">←</span>
          </button>
          <ol className={styles.dots}>
            {pages.map((page, i) => (
              <li key={page[0].name}>
                <button
                  type="button"
                  className={styles.dot}
                  onClick={() => embla?.scrollTo(i)}
                  aria-label={fill(labels.goTo, { n: i + 1 })}
                  aria-current={selected === i ? 'true' : undefined}
                />
              </li>
            ))}
          </ol>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => embla?.scrollNext()}
            disabled={selected === pages.length - 1}
            aria-label={labels.next}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      )}
    </div>
  );
}
