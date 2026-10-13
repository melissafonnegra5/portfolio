import type { Metadata, Viewport } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import { site } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.shortName,
  keywords: [
    'Melissa Fonnegra',
    'Melissa Fonnegra Zapata',
    'Ingeniera de Software',
    'Frontend Developer',
    'UI Specialist',
    'Drupal',
    'Headless CMS',
    'React',
    'Next.js',
    'Accesibilidad WCAG',
    'SEO técnico',
    'Medellín',
    'Colombia',
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: site.title,
    description:
      'Frontend Developer & UI Specialist — interfaces responsivas y accesibles, Drupal headless con React y Next.js.',
    url: '/',
    siteName: site.shortName,
    type: 'profile',
    firstName: 'Melissa',
    lastName: 'Fonnegra Zapata',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melissa Fonnegra | Frontend Developer',
    description:
      'Portafolio profesional — HTML5, SASS, Bootstrap 5, React, Next.js y Drupal.',
  },
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  colorScheme: 'dark',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: site.url,
  inLanguage: 'es-CO',
  mainEntity: {
    '@type': 'Person',
    name: site.name,
    alternateName: site.shortName,
    jobTitle: site.jobTitle,
    url: site.url,
    image: `${site.url}/avatar.jpg`,
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
      'Accesibilidad web (WCAG)',
      'SEO técnico',
    ],
    knowsLanguage: ['es', 'en'],
    sameAs: [site.linkedin, site.github],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" className={`${inter.variable} ${firaCode.variable}`}>
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </body>
    </html>
  );
}
