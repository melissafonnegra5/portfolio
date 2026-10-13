import es from './es.js';
import en from './en.js';

export const dictionaries = { es, en };
export const locales = Object.keys(dictionaries);
export const defaultLocale = 'es';

export const hasLocale = (lang) => Object.hasOwn(dictionaries, lang);
