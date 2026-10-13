import styles from './Tag.module.scss';

/**
 * Etiqueta de tecnología. Se renderiza como <li>, dentro de una lista.
 * Con `icon` (el trazo SVG de un logo de 24×24) muestra el logo antes del texto.
 * @param {{ icon?: string, children: React.ReactNode }} props
 */
export default function Tag({ icon, children }) {
  return (
    <li className={styles.tag} data-component="atoms/Tag">
      {icon && (
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          width="14"
          height="14"
          aria-hidden="true"
          focusable="false"
        >
          <path d={icon} />
        </svg>
      )}
      {children}
    </li>
  );
}
