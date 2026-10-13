import { notFound } from 'next/navigation';
import { Bricolage_Grotesque, IBM_Plex_Mono } from 'next/font/google';
import { dictionaries, hasLocale, locales } from '@/content';
import { site } from '@/lib/site';
import '@/styles/globals.scss';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  axes: ['opsz', 'wdth'],
  variable: '--font-bricolage',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  variable: '--font-plex-mono',
});

// Solo existen /es (servida en /) y /en; cualquier otro idioma da 404
// (hasLocale en el layout)
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
  themeColor: '#ececed',
  colorScheme: 'light',
};

// Se ejecuta antes de pintar para que el alto contraste no parpadee:
// primero la elección guardada y, si no hay, la preferencia del sistema
const contrastScript = `try{var d=document.documentElement,v=localStorage.getItem('contrast');if(v==='more'||v==='normal')d.dataset.contrast=v;else if(matchMedia('(prefers-contrast: more)').matches)d.dataset.contrast='more'}catch(e){}`;

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
      image: `${site.url}/melissa.jpg`,
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
      className={`${bricolage.variable} ${plexMono.variable}`}
      // El script de contraste cambia data-contrast antes de hidratar
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: contrastScript }} />
      </head>
      <body>
        <a href={`#${t.ids.content}`} className="skip-link">
          {t.ui.skip}
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd(t)).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
