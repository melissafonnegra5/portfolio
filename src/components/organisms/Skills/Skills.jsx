import SkillSet from '@/components/molecules/SkillSet';
import Section from '@/components/templates/Section';
import styles from './Skills.module.scss';

/** @param {{ t: Record<string, any>, id: string }} props */
export default function Skills({ t, id }) {
  return (
    <Section id={id} title={t.title} lead={t.lead} component="organisms/Skills">
      <div className={styles.grid}>
        {t.sets.map((set) => (
          <SkillSet key={set.name} set={set} />
        ))}
      </div>
    </Section>
  );
}
