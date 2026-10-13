import { notFound } from 'next/navigation';
import { Bricolage_Grotesque } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import PreferencesSync from '@/components/atoms/PreferencesSync';
import { dictionaries, hasLocale, locales } from '@/content';
import { applyPreferences } from '@/lib/preferences';
import { site } from '@/lib/site';
import '@/styles/globals.scss';

// Only the width axis (wdth), used by the condensed headings. The optical
// size axis (opsz) almost doubled the file size (131 KB → 78 KB)
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  axes: ['wdth'],
  variable: '--font-bricolage',
});

// Only /es (served at /) and /en exist; any other language is a 404
// (see hasLocale)
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const languages = Object.fromEntries(
  Object.values(dictionaries).map((d) => [d.htmlLang, d.path])
);

/** @returns {Promise<import('next').Metadata>} */
export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = dictionaries[lang];
  const others = Object.values(dictionaries).filter((d) => d.lang !== lang);

  return {
    metadataBase: new URL(site.url),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: site.shortName,
    keywords: t.meta.keywords,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    alternates: {
      canonical: t.path,
      languages: { ...languages, 'x-default': '/' },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.ogDescription,
      url: t.path,
      siteName: site.shortName,
      type: 'profile',
      firstName: 'Melissa',
      lastName: 'Fonnegra Zapata',
      locale: t.ogLocale,
      alternateLocale: others.map((d) => d.ogLocale),
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.twitterTitle,
      description: t.meta.ogDescription,
    },
    robots: { index: true, follow: true },
    formatDetection: { telephone: false },
  };
}

/** @type {import('next').Viewport} */
export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ececed' },
    { media: '(prefers-color-scheme: dark)', color: '#151518' },
  ],
  colorScheme: 'light dark',
};

// Runs before paint so theme and contrast never flash: the stored choice
// first, otherwise the system preference
const preferencesScript = `(${applyPreferences.toString()})()`;

function personJsonLd(t) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: new URL(t.path, site.url).href,
    inLanguage: t.htmlLang,
    mainEntity: {
      '@type': 'Person',
      name: site.name,
      alternateName: site.shortName,
      jobTitle: t.meta.jobTitle,
      url: site.url,
      image: `${site.url}/melissa.webp`,
      email: `mailto:${site.email}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: site.locality,
        addressRegion: site.region,
        addressCountry: site.country,
      },
      worksFor: { '@type': 'Organization', name: 'Dentsu' },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Politécnico Grancolombiano' },
        { '@type': 'EducationalOrganization', name: 'SENA' },
      ],
      knowsAbout: [
        'HTML5',
        'CSS3',
        'SASS',
        'Bootstrap 5',
        'JavaScript',
        'React',
        'Next.js',
        'Drupal',
        'Headless CMS',
        'Atomic Design',
        'Figma',
        ...t.meta.knowsAbout,
      ],
      knowsLanguage: ['es', 'en'],
      sameAs: [site.linkedin, site.github],
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = dictionaries[lang];

  return (
    <html
      lang={t.htmlLang}
      className={bricolage.variable}
      // The preferences script sets data-theme and data-contrast before hydration
      suppressHydrationWarning
    >
      <head>
        {/* A plain inline script so it runs before first paint. On client
            navigations React logs a dev-only warning about it, and
            PreferencesSync re-applies the attributes instead. */}
        <script dangerouslySetInnerHTML={{ __html: preferencesScript }} />
      </head>
      <body>
        <a href={`#${t.ids.content}`} className="skip-link">
          {t.ui.skip}
        </a>
        <PreferencesSync />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd(t)).replace(/</g, '\\u003c'),
          }}
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
