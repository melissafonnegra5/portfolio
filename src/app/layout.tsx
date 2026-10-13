import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Melissa Fonnegra | Desarrolladora de Software Full Stack',
  description:
    'Portafolio profesional de Melissa Fonnegra — Desarrolladora de Software Full Stack especializada en React, Next.js, TypeScript y Node.js. Creando experiencias digitales excepcionales.',
  keywords: [
    'Melissa Fonnegra',
    'Desarrolladora de Software',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'Melissa Fonnegra' }],
  openGraph: {
    title: 'Melissa Fonnegra | Desarrolladora de Software Full Stack',
    description:
      'Portafolio profesional — Creando experiencias digitales excepcionales con código limpio y arquitecturas escalables.',
    type: 'website',
    locale: 'es_CO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melissa Fonnegra | Desarrolladora de Software',
    description:
      'Portafolio profesional — React, Next.js, TypeScript & más.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
