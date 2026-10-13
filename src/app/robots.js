import { site } from '@/lib/site';

/** @returns {import('next').MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
