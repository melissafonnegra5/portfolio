/**
 * Applies the stored theme and contrast (or the system preference) to <html>.
 * Self-contained on purpose: layout.jsx also inlines it as the <head>
 * script, so it can't use imports or outer variables.
 */
export function applyPreferences() {
  try {
    var root = document.documentElement;
    var read = function (key) {
      try {
        return localStorage.getItem(key);
      } catch (e) {
        return null;
      }
    };
    var system = function (query) {
      return matchMedia(query).matches;
    };
    var theme = read('theme');
    var contrast = read('contrast');
    root.dataset.theme =
      theme === 'dark' || theme === 'light'
        ? theme
        : system('(prefers-color-scheme: dark)')
          ? 'dark'
          : 'light';
    root.dataset.contrast =
      contrast === 'more' || contrast === 'normal'
        ? contrast
        : system('(prefers-contrast: more)')
          ? 'more'
          : 'normal';
  } catch (e) {
    // Never block rendering over a display preference
  }
}

export const PREFERENCE_EVENT = 'preferencechange';
