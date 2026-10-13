import styles from './Tag.module.scss';

/**
 * Technology tag, rendered as an <li> inside a list. With `icon` (the SVG
 * path of a 24×24 logo) the logo shows before the text.
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
