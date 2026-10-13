import Frame from '@/components/atoms/Frame';
import Icon from '@/components/atoms/Icon';
import { fill } from '@/lib/fill';
import styles from './BrandTile.module.scss';

/**
 * @param {{
 *   brand: { name: string, type: string, url?: string },
 *   labels: { site: string, siteSr: string },
 * }} props
 */
export default function BrandTile({ brand, labels }) {
  return (
    <Frame as="li" data-component="molecules/BrandTile">
      <div className={styles.tile}>
        <h4 className={styles.name}>{brand.name}</h4>
        <p className={styles.type}>{brand.type}</p>
        {brand.url && (
          <a href={brand.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
            <Icon name="external" size={14} />
            {labels.site}
            <span className="sr-only">{fill(labels.siteSr, { title: brand.name })}</span>
          </a>
        )}
      </div>
    </Frame>
  );
}
