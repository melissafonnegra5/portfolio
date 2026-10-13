'use client';

import { useRouter } from 'next/navigation';
import { pageTop } from '@/lib/scroll';
import styles from './LangSwitch.module.scss';

/**
 * Keeps `id` at `offset` px from the top of the screen once the page in
 * `lang` is on screen, until the layout stops moving (fonts, hydration).
 */
function holdPosition(lang, id, offset) {
  const start = performance.now();
  let stable = 0;
  const tick = () => {
    const el = document.getElementById(id);
    if (el && document.documentElement.lang.startsWith(lang)) {
      const top = Math.round(pageTop(el) + offset);
      if (Math.abs(window.scrollY - top) > 1) {
        window.scrollTo({ top, behavior: 'instant' });
        stable = 0;
      } else {
        stable += 1;
      }
    }
    if (stable < 10 && performance.now() - start < 3000) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/**
 * Link to the other language. It navigates without a full reload and keeps
 * the visitor on the same section, at the same distance from its top.
 * The visible text ("EN") comes first in the accessible name.
 * @param {{
 *   short: string,
 *   label: string,
 *   href: string,
 *   lang: string,
 *   ids: Record<string, string>,
 *   targetIds: Record<string, string>,
 * }} props
 */
export default function LangSwitch({ short, label, href, lang, ids, targetIds }) {
  const router = useRouter();

  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();

    // The last section whose top has passed the upper third of the screen
    const line = window.innerHeight / 3;
    const current = Object.keys(ids)
      .map((key) => [key, document.getElementById(ids[key])])
      .filter(([, el]) => el && el.getBoundingClientRect().top <= line)
      .sort(([, a], [, b]) => pageTop(a) - pageTop(b))
      .pop();

    const [key, el] = current ?? ['home', null];
    const offset = el ? window.scrollY - pageTop(el) : window.scrollY;
    router.push(href, { scroll: false });
    holdPosition(lang, targetIds[key], offset);
  };

  return (
    <a
      href={href}
      hrefLang={lang}
      lang={lang}
      className={styles.switch}
      onClick={onClick}
      data-component="atoms/LangSwitch"
    >
      {short}
      <span className="sr-only">, {label}</span>
    </a>
  );
}
