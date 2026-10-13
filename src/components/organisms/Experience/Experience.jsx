import Timeline from '@/components/molecules/Timeline';
import TimelineItem from '@/components/molecules/TimelineItem';
import Section from '@/components/templates/Section';
import styles from './Experience.module.scss';

/** @param {{ t: Record<string, any>, id: string }} props */
export default function Experience({ t, id }) {
  const groups = [
    { key: 'work', title: t.workTitle, items: t.items.filter((item) => item.kind === 'work') },
    { key: 'study', title: t.studyTitle, items: t.items.filter((item) => item.kind === 'study') },
  ];

  return (
    <Section id={id} title={t.title} lead={t.lead} component="organisms/Experience">
      <div className={styles.groups}>
        {groups.map((group) => (
          <div key={group.key} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <Timeline className={styles.timeline}>
              {group.items.map((item) => (
                <TimelineItem key={item.id} item={item} />
              ))}
            </Timeline>
          </div>
        ))}
      </div>
    </Section>
  );
}
