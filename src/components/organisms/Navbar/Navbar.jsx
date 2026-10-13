'use client';

import { useEffect, useState } from 'react';
import PreferenceToggle from '@/components/atoms/PreferenceToggle';
import LangSwitch from '@/components/atoms/LangSwitch';
import Logo from '@/components/atoms/Logo';
import Inspector from '@/components/molecules/Inspector';
import styles from './Navbar.module.scss';

// Keeps the browser bar color in sync with the chosen theme
const syncThemeColor = () => {
  const color = getComputedStyle(document.body).backgroundColor;
  document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
    meta.content = color;
  });
};

/**
 * @param {{
 *   links: { id: string, label: string }[],
 *   ids: Record<string, string>,
 *   ui: Record<string, any>,
 *   targetIds: Record<string, string>,
 * }} props
 */
export default function Navbar({ links, ids, ui, targetIds }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  // The active section is the one crossing the upper band of the screen
  useEffect(() => {
    const sections = links.map((link) => document.getElementById(ids[link.id])).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [links, ids]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className={styles.header} data-component="organisms/Navbar">
      <div className={`container ${styles.bar}`}>
        <Logo href={`#${ids.home}`} label={ui.logo} />

        <nav aria-label={ui.mainNav} className={styles.nav}>
          <ul id="menu-principal" className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
            {links.map((link) => {
              const id = ids[link.id];
              const isActive = activeId === id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${id}`}
                    className={styles.link}
                    aria-current={isActive ? 'true' : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className={styles.actions}>
          <LangSwitch {...ui.switchLang} ids={ids} targetIds={targetIds} />
          <PreferenceToggle
            name="theme"
            on="dark"
            off="light"
            icon="moon"
            label={ui.dark}
            onChange={syncThemeColor}
          />
          <PreferenceToggle
            name="contrast"
            on="more"
            off="normal"
            icon="contrast"
            label={ui.contrast}
            showLabel
          />
          <Inspector label={ui.inspect} message={ui.inspectOn} />
          <button
            type="button"
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
            aria-expanded={menuOpen}
            aria-controls="menu-principal"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
