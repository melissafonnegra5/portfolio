import Frame from '@/components/atoms/Frame';
import Tag from '@/components/atoms/Tag';
import Icon from '@/components/atoms/Icon';
import { fill } from '@/lib/fill';
import styles from './ProjectCard.module.scss';

/**
 * @param {{
 *   project: { slug: string, title: string, description: string,
 *     tags: string[], github: string | null, demo: string | null, status: string | null },
 *   labels: { site: string, siteSr: string, code: string, codeSr: string, tags: string },
 * }} props
 */
export default function ProjectCard({ project, labels }) {
  const { slug, title, description, tags, github, demo, status } = project;

  return (
    <Frame as="article" name={slug} data-component="molecules/ProjectCard">
      <div className={styles.card}>
        <div className={styles.heading}>
          <h4 className={styles.title}>{title}</h4>
          {status && <p className={styles.status}>{status}</p>}
        </div>
        <p className={styles.description}>{description}</p>
        <ul className={styles.tags} aria-label={fill(labels.tags, { title })}>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>
        {(github || demo) && (
          <div className={styles.links}>
            {demo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <Icon name="external" size={16} />
                {labels.site}
                <span className="sr-only">{fill(labels.siteSr, { title })}</span>
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <Icon name="github" size={16} />
                {labels.code}
                <span className="sr-only">{fill(labels.codeSr, { title })}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </Frame>
  );
}
