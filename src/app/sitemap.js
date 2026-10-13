import { dictionaries } from '@/content';
import { site } from '@/lib/site';

const languages = Object.fromEntries(
  Object.values(dictionaries).map((d) => [d.htmlLang, new URL(d.path, site.url).href])
);

/** @returns {import('next').MetadataRoute.Sitemap} */
export default function sitemap() {
  return Object.values(dictionaries).map((d) => ({
    url: new URL(d.path, site.url).href,
    changeFrequency: 'monthly',
    priority: d.path === '/' ? 1 : 0.9,
    alternates: { languages },
  }));
}
