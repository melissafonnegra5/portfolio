'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#inicio" className={styles.logo}>
          <span className={styles.logoIcon}>{'</>'}</span>
          <span className={styles.logoText}>MF</span>
        </a>

        <div className={`${styles.navLinks} ${mobileOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${
                activeSection === link.href.replace('#', '') ? styles.active : ''
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
