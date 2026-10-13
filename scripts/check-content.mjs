// Verifica que todos los idiomas tengan la misma forma que el español:
// mismas claves y mismo número de elementos en cada lista. Así, al agregar
// un texto en un idioma, el otro no se queda atrás sin que nadie lo note.
import { dictionaries, defaultLocale } from '../src/content/index.js';

const base = dictionaries[defaultLocale];
const errors = [];

function compare(a, b, path, lang) {
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return errors.push(`${lang}: ${path} debería ser una lista`);
    if (a.length !== b.length)
      errors.push(`${lang}: ${path} tiene ${b.length} elementos y ${defaultLocale} tiene ${a.length}`);
    a.forEach((item, i) => b[i] !== undefined && compare(item, b[i], `${path}[${i}]`, lang));
    return;
  }
  if (a && typeof a === 'object') {
    if (!b || typeof b !== 'object') return errors.push(`${lang}: ${path} debería ser un objeto`);
    for (const key of Object.keys(a)) {
      if (!(key in b)) errors.push(`${lang}: falta ${path}.${key}`);
      else compare(a[key], b[key], `${path}.${key}`, lang);
    }
    for (const key of Object.keys(b)) if (!(key in a)) errors.push(`${lang}: ${path}.${key} sobra`);
  }
}

for (const [lang, dict] of Object.entries(dictionaries)) {
  if (lang !== defaultLocale) compare(base, dict, lang, lang);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Contenido OK: ${Object.keys(dictionaries).join(', ')} tienen la misma forma.`);
