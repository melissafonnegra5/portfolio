import TimelineItem from '@/components/molecules/TimelineItem';
import Section from '@/components/templates/Section';
import styles from './Experience.module.scss';

/** @param {{ t: Record<string, any>, id: string }} props */
export default function Experience({ t, id }) {
  return (
    <Section id={id} title={t.title} lead={t.lead} component="organisms/Experience">
      <ol className={styles.timeline}>
        {t.items.map((item) => (
          <TimelineItem
            key={item.id}
            item={item}
            kindLabel={item.kind === 'work' ? t.work : t.study}
          />
        ))}
      </ol>
    </Section>
  );
}
