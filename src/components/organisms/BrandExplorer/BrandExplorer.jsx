'use client';

import { startTransition, useState } from 'react';
import BrandCarousel from '@/components/molecules/BrandCarousel';
import BrandGrid from '@/components/molecules/BrandGrid';
import SectorFilter from '@/components/molecules/SectorFilter';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { fill } from '@/lib/fill';

/**
 * Las marcas de Dentsu con su filtro por sector. Es la única parte de
 * Proyectos que necesita JavaScript en el navegador.
 * @param {{ t: Record<string, any> }} props
 */
export default function BrandExplorer({ t }) {
  const [sector, setSector] = useState('all');
  const [tried, setTried] = useState(false);
  // En móvil las marcas van en un carrusel; en pantallas grandes, en grilla
  const isMobile = useMediaQuery('(max-width: 819px)');
  const visible = sector === 'all' ? t.brands : t.brands.filter((b) => b.sector === sector);

  // startTransition hace que <ViewTransition> anime el reacomodo de las tarjetas
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
        // key: cada filtro arranca su carrusel en la primera página
        <BrandCarousel key={sector} brands={visible} labels={t.carousel} cardLabels={t.card} />
      ) : (
        <BrandGrid brands={visible} labels={t.card} />
      )}
    </div>
  );
}
