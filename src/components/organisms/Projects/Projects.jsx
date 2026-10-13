import ProjectCard from '@/components/molecules/ProjectCard';
import BrandExplorer from '@/components/organisms/BrandExplorer';
import Tag from '@/components/atoms/Tag';
import Section from '@/components/templates/Section';
import { techIcons } from '@/lib/techIcons';
import styles from './Projects.module.scss';

/** @param {{ t: Record<string, any>, id: string }} props */
export default function Projects({ t, id }) {
  return (
    <Section id={id} title={t.title} lead={t.lead} component="organisms/Projects">
      <h3 className={styles.groupTitle}>{t.personalTitle}</h3>
      <div className={styles.personal}>
        {t.personal.map((project) => (
          <ProjectCard key={project.slug} project={project} labels={t.card} />
        ))}
      </div>

      <h3 className={styles.groupTitle}>{t.workTitle}</h3>
      <ul className={styles.stack} aria-label={t.stackLabel}>
        {t.stack.map((tech) => (
          <Tag key={tech} icon={techIcons[tech]}>
            {tech}
          </Tag>
        ))}
      </ul>

      <BrandExplorer t={t} />
    </Section>
  );
}
