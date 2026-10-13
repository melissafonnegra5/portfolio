import styles from './Logo.module.scss';

/** @param {{ href: string, label: string }} props */
export default function Logo({ href, label }) {
  return (
    <a
      href={href}
      className={styles.logo}
      aria-label={label}
      data-component="atoms/Logo"
    >
      <span className={styles.mark} aria-hidden="true">
        {'</>'}
      </span>
      <span aria-hidden="true">MF</span>
    </a>
  );
}
