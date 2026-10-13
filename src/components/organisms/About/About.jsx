import StickyNote from '@/components/atoms/StickyNote';
import Section from '@/components/templates/Section';
import styles from './About.module.scss';

const colors = ['yellow', 'green', 'pink', 'blue'];

/** @param {{ t: Record<string, any>, id: string }} props */
export default function About({ t, id }) {
  return (
    <Section id={id} title={t.title} component="organisms/About">
      <div className={styles.grid}>
        <div className={styles.story}>
          {t.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <dl className={styles.facts}>
          {t.facts.map((fact, i) => (
            <StickyNote key={fact.term} color={colors[i % colors.length]} className={styles.fact}>
              <dt>{fact.term}</dt>
              <dd>{fact.detail}</dd>
            </StickyNote>
          ))}
        </dl>
      </div>
    </Section>
  );
}
