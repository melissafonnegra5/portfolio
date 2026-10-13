import CurrentYear from '@/components/atoms/CurrentYear';
import Cursor from '@/components/atoms/Cursor';
import { site } from '@/lib/site';
import styles from './Contact.module.scss';

const socials = [
  { label: 'LinkedIn', href: site.linkedin },
  { label: 'GitHub', href: site.github },
];

/** @param {{ t: Record<string, any>, id: string }} props */
export default function Contact({ t, id }) {
  return (
    <footer id={id} className={styles.footer} data-component="organisms/Contact">
      <div className="container">
        <h2 className={styles.title}>{t.title}</h2>
        <p className={styles.lead}>{t.lead}</p>
        <p className={styles.emailWrap}>
          <a href={`mailto:${site.email}`} className={styles.email}>
            {site.email}
          </a>
          <Cursor name="Melissa" className={styles.cursor} />
        </p>

        <div className={styles.bottom}>
          <ul className={styles.socials}>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                  <span className="sr-only">{t.newTab}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className={styles.copy}>
            © <CurrentYear /> {site.name}. {t.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
