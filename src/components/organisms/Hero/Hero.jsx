import Image from 'next/image';
import Button from '@/components/atoms/Button';
import Cursor from '@/components/atoms/Cursor';
import Icon from '@/components/atoms/Icon';
import StickyNote from '@/components/atoms/StickyNote';
import styles from './Hero.module.scss';

/** @param {{ t: Record<string, any>, id: string }} props */
export default function Hero({ t, id }) {
  return (
    <section
      id={id}
      className={styles.hero}
      aria-labelledby="hero-title"
      data-component="organisms/Hero"
    >
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <h1 id="hero-title" className={styles.name}>
            <span className={styles.line}>Melissa</span>
            <span className={styles.line}>Fonnegra Zapata</span>
          </h1>

          <p className={styles.lead}>{t.lead}</p>

          <div className={styles.ctas}>
            <Button href={t.primaryHref}>{t.primary}</Button>
            <Button href={t.secondaryHref} variant="secondary">
              {t.secondary}
            </Button>
          </div>

          <p className={styles.hint}>
            <Icon name="inspect" size={16} />
            {t.hint}
          </p>
        </div>

        <div className={styles.stage}>
          <figure className={styles.photo} data-component="molecules/PhotoFrame">
            <figcaption className={styles.fileName} aria-hidden="true">
              melissa.jpg
            </figcaption>
            <div className={styles.selection}>
              <Image
                src="/melissa.jpg"
                alt={t.photoAlt}
                width={400}
                height={500}
                sizes="(max-width: 820px) 80vw, 400px"
                className={styles.image}
                preload
              />
              <span className={styles.handle} aria-hidden="true" />
              <span className={styles.handle} aria-hidden="true" />
              <span className={styles.handle} aria-hidden="true" />
              <span className={styles.handle} aria-hidden="true" />
              <Cursor name="Melissa" flip className={styles.cursor} />
            </div>
            <span className={styles.dimensions} aria-hidden="true">
              <span className={styles.w} /> × <span className={styles.h} />
            </span>
          </figure>

          <StickyNote className={styles.sticky}>
            {t.note.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </StickyNote>
        </div>
      </div>
    </section>
  );
}
