const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Smoothly scrolls to the top, or instantly when reduced motion is on. */
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'instant' : 'smooth' });
}

/** Page offset of an element, independent of the current scroll. */
export const pageTop = (el) => el.getBoundingClientRect().top + window.scrollY;
