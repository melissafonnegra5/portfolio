import { ViewTransition } from 'react';
import BrandTile from '@/components/molecules/BrandTile';
import { slug } from '@/lib/slug';
import styles from './BrandGrid.module.scss';

/**
 * Brand list. Each card has its own view transition name, so filtering
 * moves it to its new place instead of popping in.
 * @param {{
 *   brands: { name: string, type: string, url?: string }[],
 *   labels: { site: string, siteSr: string },
 *   className?: string,
 * }} props
 */
export default function BrandGrid({ brands, labels, className = styles.grid }) {
  return (
    <ul className={className}>
      {brands.map((brand) => (
        <ViewTransition key={brand.name} name={`brand-${slug(brand.name)}`}>
          <BrandTile brand={brand} labels={labels} />
        </ViewTransition>
      ))}
    </ul>
  );
}
