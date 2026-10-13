'use client';

import { lazy, startTransition, Suspense, useState } from 'react';
import BrandGrid from '@/components/molecules/BrandGrid';
import SectorFilter from '@/components/molecules/SectorFilter';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { fill } from '@/lib/fill';

// The carousel (and Embla) is only downloaded on mobile, where it's used.
// Until it arrives, the grid shows the same brands.
const BrandCarousel = lazy(() => import('@/components/molecules/BrandCarousel'));

/**
 * Dentsu brands with the sector filter: the only part of Projects that
 * needs JavaScript in the browser.
 * @param {{ t: Record<string, any> }} props
 */
export default function BrandExplorer({ t }) {
  const [sector, setSector] = useState('all');
  const [tried, setTried] = useState(false);
  // Carousel on mobile, grid on larger screens
  const isMobile = useMediaQuery('(max-width: 819px)');
  const visible = sector === 'all' ? t.brands : t.brands.filter((b) => b.sector === sector);

  // startTransition lets <ViewTransition> animate the cards moving
  const filter = (key) => {
    setTried(true);
    startTransition(() => setSector(key));
  };

  return (
    <div data-component="organisms/BrandExplorer">
      <SectorFilter
        sectors={t.sectors}
        value={sector}
        onChange={filter}
        label={t.filterLabel}
        nudge={tried ? null : t.nudge}
      />

      <p className="sr-only" aria-live="polite">
        {visible.length === 1 ? t.countOne : fill(t.countMany, { n: visible.length })}
      </p>

      {isMobile ? (
        <Suspense fallback={<BrandGrid brands={visible} labels={t.card} />}>
          {/* key: each filter starts its carousel on the first page */}
          <BrandCarousel key={sector} brands={visible} labels={t.carousel} cardLabels={t.card} />
        </Suspense>
      ) : (
        <BrandGrid brands={visible} labels={t.card} />
      )}
    </div>
  );
}
