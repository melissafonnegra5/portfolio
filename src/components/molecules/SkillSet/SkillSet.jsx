import Tag from '@/components/atoms/Tag';
import { slug } from '@/lib/slug';
import styles from './SkillSet.module.scss';

/**
 * Skill group drawn as a Figma "component set": dashed purple border
 * with the set name on top.
 * @param {{ set: { name: string, skills: string[] } }} props
 */
export default function SkillSet({ set }) {
  const id = `set-${slug(set.name)}`;

  return (
    <section className={styles.set} aria-labelledby={id} data-component="molecules/SkillSet">
      <h3 id={id} className={styles.name}>
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" focusable="false">
          <path d="M7 1 13 7 7 13 1 7Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        {set.name}
      </h3>
      <ul className={styles.skills}>
        {set.skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </ul>
    </section>
  );
}
