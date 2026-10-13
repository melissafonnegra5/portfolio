import Link from 'next/link';
import { Bricolage_Grotesque } from 'next/font/google';
import '@/styles/globals.scss';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bricolage',
});

export const metadata = {
  title: 'Página no encontrada · Page not found | Melissa Fonnegra',
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="es-CO" className={bricolage.variable}>
      <body>
        <main className="container section">
          <h1 className="section-title">Esta página no existe</h1>
          <p className="section-lead">
            Revisa la dirección o vuelve al <Link href="/">inicio</Link>.
          </p>
          <p lang="en" className="section-lead">
            This page doesn’t exist. <Link href="/en">Go to the English version</Link>.
          </p>
        </main>
      </body>
    </html>
  );
}
