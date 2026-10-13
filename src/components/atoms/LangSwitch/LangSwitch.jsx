import styles from './LangSwitch.module.scss';

/**
 * Enlace a la otra versión del sitio. El texto visible ("EN") va primero en
 * el nombre accesible, y el resto lo aclara para lectores de pantalla.
 * @param {{ short: string, label: string, href: string, lang: string }} props
 */
export default function LangSwitch({ short, label, href, lang }) {
  return (
    <a
      href={href}
      hrefLang={lang}
      lang={lang}
      className={styles.switch}
      data-component="atoms/LangSwitch"
    >
      {short}
      <span className="sr-only">, {label}</span>
    </a>
  );
}
