import { fileURLToPath } from 'node:url';

const isDev = process.env.NODE_ENV !== 'production';

// Next.js inyecta scripts inline para hidratar la página estática, por eso
// 'unsafe-inline'; en desarrollo el HMR además necesita 'unsafe-eval'
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  `connect-src 'self'${isDev ? ' ws: wss:' : ''}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ['upgrade-insecure-requests']),
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'DENY' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  // Los módulos SCSS importan los tokens con @use 'tokens', sin rutas relativas
  sassOptions: {
    loadPaths: [fileURLToPath(new URL('./src/styles', import.meta.url))],
  },
  // DDEV sirve el dev server desde portfolio.ddev.site, no desde localhost
  allowedDevOrigins: ['portfolio.ddev.site'],
  experimental: {
    // 404 propio: el layout raíz vive en app/[lang], así que no hay uno global
    globalNotFound: true,
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  // El español se sirve en la raíz (la URL de siempre) y el inglés en /en.
  // /es redirige a / para que no haya dos URLs con el mismo contenido.
  async redirects() {
    return [{ source: '/es', destination: '/', permanent: true }];
  },
  async rewrites() {
    return { beforeFiles: [{ source: '/', destination: '/es' }] };
  },
};

export default nextConfig;
