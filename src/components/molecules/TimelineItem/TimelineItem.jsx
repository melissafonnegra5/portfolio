import styles from './TimelineItem.module.scss';

/**
 * @param {{
 *   item: { kind: 'work' | 'study', role: string, place: string, period: string,
 *     summary: string, highlights: string[] },
 * }} props
 */
export default function TimelineItem({ item }) {
  const isWork = item.kind === 'work';

  return (
    <li
      className={`${styles.item} ${isWork ? styles.work : ''}`}
      data-component="molecules/TimelineItem"
    >
      <span className={styles.marker} aria-hidden="true" data-marker />
      <p className={styles.period}>{item.period}</p>
      <h4 className={styles.role}>{item.role}</h4>
      <p className={styles.place}>{item.place}</p>
      <p className={styles.summary}>{item.summary}</p>
      {item.highlights.length > 0 && (
        <ul className={styles.highlights}>
          {item.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
    </li>
  );
}
