import styles from './Cursor.module.scss';

/**
 * Cursor de un colaborador, como en un archivo de Figma con varias personas.
 * Es decorativo: la flecha queda en el origen del elemento, así que quien lo
 * use solo tiene que posicionarlo.
 * @param {{
 *   name: string,
 *   color?: 'green' | 'orange',
 *   chat?: string,
 *   flip?: boolean,
 *   className?: string,
 * }} props
 */
export default function Cursor({ name, color = 'green', chat, flip = false, className = '' }) {
  return (
    <span
      className={`${styles.cursor} ${styles[color]} ${flip ? styles.flip : ''} ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 16 20" width="20" height="25">
        <path d="M1 1v16l4.5-4.2 3 6.2 2.6-1.2-3-6.1H14z" />
      </svg>
      <span className={styles.label}>
        <span className={styles.name}>{name}</span>
        {chat && <span className={styles.chat}>{chat}</span>}
      </span>
    </span>
  );
}
