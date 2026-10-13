import { fileURLToPath } from 'node:url';

const isDev = process.env.NODE_ENV !== 'production';

// Next.js injects inline scripts to hydrate the static page, hence
// 'unsafe-inline'. In development HMR also needs 'unsafe-eval', and Vercel
// Analytics / Speed Insights load their debug script from va.vercel-scripts.com
// (in production they're served from /_vercel, on the same domain).
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval' https://va.vercel-scripts.com" : ''}`,
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
  // SCSS modules import tokens with @use 'tokens', without relative paths
  sassOptions: {
    loadPaths: [fileURLToPath(new URL('./src/styles', import.meta.url))],
  },
  // DDEV serves the dev server from portfolio.ddev.site, not localhost
  allowedDevOrigins: ['portfolio.ddev.site'],
  experimental: {
    // Custom 404: the root layout lives in app/[lang], so there's no global one
    globalNotFound: true,
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  // Spanish is served at the root (the original URL) and English at /en.
  // /es redirects to / so the same content never has two URLs.
  async redirects() {
    return [{ source: '/es', destination: '/', permanent: true }];
  },
  async rewrites() {
    return { beforeFiles: [{ source: '/', destination: '/es' }] };
  },
};

export default nextConfig;
