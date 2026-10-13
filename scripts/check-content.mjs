// Checks that every language has the same shape as Spanish: same keys and
// same number of items in each list, so a string added in one language
// can't silently go missing in the other.
import { dictionaries, defaultLocale } from '../src/content/index.js';

const base = dictionaries[defaultLocale];
const errors = [];

function compare(a, b, path, lang) {
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return errors.push(`${lang}: ${path} should be a list`);
    if (a.length !== b.length)
      errors.push(`${lang}: ${path} has ${b.length} items but ${defaultLocale} has ${a.length}`);
    a.forEach((item, i) => b[i] !== undefined && compare(item, b[i], `${path}[${i}]`, lang));
    return;
  }
  if (a && typeof a === 'object') {
    if (!b || typeof b !== 'object') return errors.push(`${lang}: ${path} should be an object`);
    for (const key of Object.keys(a)) {
      if (!(key in b)) errors.push(`${lang}: missing ${path}.${key}`);
      else compare(a[key], b[key], `${path}.${key}`, lang);
    }
    for (const key of Object.keys(b)) if (!(key in a)) errors.push(`${lang}: unexpected ${path}.${key}`);
  }
}

for (const [lang, dict] of Object.entries(dictionaries)) {
  if (lang !== defaultLocale) compare(base, dict, lang, lang);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Content OK: ${Object.keys(dictionaries).join(', ')} have the same shape.`);
