import Comment from '@/components/molecules/Comment';
import Section from '@/components/templates/Section';
import styles from './Strengths.module.scss';

/** @param {{ t: Record<string, any>, id: string }} props */
export default function Strengths({ t, id }) {
  return (
    <Section id={id} title={t.title} lead={t.lead} component="organisms/Strengths">
      <ul className={styles.grid}>
        {t.items.map((item) => (
          <Comment key={item.title} initials="MF" title={item.title} text={item.text} />
        ))}
      </ul>
      <p className={styles.values}>{t.values}</p>
    </Section>
  );
}
