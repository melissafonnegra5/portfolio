import styles from './StickyNote.module.scss';

/**
 * Nota adhesiva de FigJam.
 * @param {{
 *   color?: 'yellow' | 'green' | 'pink' | 'blue',
 *   as?: React.ElementType,
 *   className?: string,
 *   children: React.ReactNode,
 * }} props
 */
export default function StickyNote({
  color = 'yellow',
  as: Tag = 'div',
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={`${styles.sticky} ${styles[color]} ${className}`}
      data-component="atoms/StickyNote"
      {...rest}
    >
      <svg className={styles.clip} viewBox="0 0 16 42" aria-hidden="true" focusable="false">
        <path d="M11 14v19a4 4 0 0 1-8 0V7a6 6 0 0 1 12 0v25" />
      </svg>
      {children}
    </Tag>
  );
}
