'use client';

import { scrollToTop } from '@/lib/scroll';
import styles from './Logo.module.scss';

/** @param {{ href: string, label: string }} props */
export default function Logo({ href, label }) {
  const onClick = (event) => {
    event.preventDefault();
    scrollToTop();
    // Drop the hash so the URL matches the top of the page
    history.replaceState(null, '', window.location.pathname);
  };

  return (
    <a
      href={href}
      className={styles.logo}
      aria-label={label}
      onClick={onClick}
      data-component="atoms/Logo"
    >
      <span className={styles.mark} aria-hidden="true">
        {'</>'}
      </span>
      <span aria-hidden="true">MF</span>
    </a>
  );
}
