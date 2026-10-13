import { dictionaries, defaultLocale } from '@/content';
import { site } from '@/lib/site';

const t = dictionaries[defaultLocale];

/** @returns {import('next').MetadataRoute.Manifest} */
export default function manifest() {
  return {
    name: t.meta.title,
    short_name: site.shortName,
    description: t.meta.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ececed',
    theme_color: '#ececed',
    lang: 'es-CO',
    icons: [
      { src: '/-/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/es/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
