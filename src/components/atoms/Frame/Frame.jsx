import styles from './Frame.module.scss';

/**
 * Un "frame" de Figma: nombre encima, contenido y, al pasar el mouse o
 * enfocar algo dentro, el recuadro de selección con sus cuatro manijas.
 * @param {{
 *   name?: string,
 *   as?: React.ElementType,
 *   selectable?: boolean,
 *   className?: string,
 *   children: React.ReactNode,
 * }} props
 */
export default function Frame({
  name,
  as: Tag = 'div',
  selectable = true,
  className = '',
  children,
  ...rest
}) {
  return (
    <Tag
      className={`${styles.frame} ${selectable ? styles.selectable : ''} ${className}`}
      data-component="atoms/Frame"
      {...rest}
    >
      {name && (
        <span className={styles.name} aria-hidden="true">
          {name}
        </span>
      )}
      <div className={styles.body}>
        {children}
        {selectable && (
          <>
            <span className={styles.handle} aria-hidden="true" />
            <span className={styles.handle} aria-hidden="true" />
            <span className={styles.handle} aria-hidden="true" />
            <span className={styles.handle} aria-hidden="true" />
          </>
        )}
      </div>
    </Tag>
  );
}
