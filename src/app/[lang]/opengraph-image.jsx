import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import sharp from 'sharp';
import { dictionaries, hasLocale, locales } from '@/content';
import { site } from '@/lib/site';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
// Same text in both languages: "Frontend Developer" is used in Spanish too
export const alt = 'Melissa Fonnegra Zapata, Frontend Developer';

// Same palette as the light theme
const color = {
  paper: '#ececed',
  ink: '#1d1d21',
  muted: '#55555e',
  dot: '#c6c6cc',
  select: '#0862cc',
  sticky: '#ffe27a',
  cursor: '#14ae5c',
};

// One image per language, generated at build time
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Cached so the files are read and converted once at build time
async function getAssets() {
  'use cache';
  const [photo, extraBold, regular] = await Promise.all([
    readFile(join(process.cwd(), 'public/melissa.webp')),
    readFile(join(process.cwd(), 'src/assets/BricolageGrotesque-ExtraBold.ttf')),
    readFile(join(process.cwd(), 'src/assets/BricolageGrotesque-Regular.ttf')),
  ]);
  // Satori (behind ImageResponse) can't decode WebP, so it gets a PNG copy
  const png = await sharp(photo).resize(330, 412).png().toBuffer();
  return {
    src: `data:image/png;base64,${png.toString('base64')}`,
    extraBold: extraBold.toString('base64'),
    regular: regular.toString('base64'),
  };
}

// Satori doesn't repeat CSS gradients, so the canvas dot grid is an SVG pattern
const dotGrid = `data:image/svg+xml;base64,${Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size.width}" height="${size.height}"><defs><pattern id="d" width="26" height="26" patternUnits="userSpaceOnUse"><circle cx="13" cy="13" r="1.6" fill="${color.dot}"/></pattern></defs><rect width="100%" height="100%" fill="url(#d)"/></svg>`
).toString('base64')}`;

const handle = (pos) => ({
  position: 'absolute',
  width: 13,
  height: 13,
  background: '#ffffff',
  border: `2.5px solid ${color.select}`,
  ...pos,
});

export default async function Image({ params }) {
  const { lang: requested } = await params;
  const t = dictionaries[hasLocale(requested) ? requested : 'es'];
  const { src, extraBold, regular } = await getAssets();
  const domain = new URL(site.url).host;

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 96px 0 84px',
        background: color.paper,
        color: color.ink,
        fontFamily: 'Bricolage',
      }}
    >
      <img
        src={dotGrid}
        width={size.width}
        height={size.height}
        alt=""
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', width: 560 }}>
        <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.035em' }}>
          Melissa
        </div>
        <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.035em' }}>
          Fonnegra Zapata
        </div>
        <div style={{ marginTop: 34, fontSize: 31, lineHeight: 1.3, color: '#3b3b42' }}>
          {t.meta.ogTagline}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 44,
            fontSize: 24,
            color: color.muted,
          }}
        >
          <div
            style={{
              display: 'flex',
              padding: '3px 9px',
              marginRight: 14,
              fontSize: 20,
              color: color.select,
              background: '#ffffff',
              border: `2px solid ${color.select}`,
            }}
          >
            {'</>'}
          </div>
          {domain}
        </div>
      </div>

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 20, color: color.select, marginBottom: 10 }}>melissa.webp</div>
        <div
          style={{ position: 'relative', display: 'flex', border: `2.5px solid ${color.select}` }}
        >
          <img src={src} width={330} height={412} alt="" />
          <div style={handle({ top: -8, left: -8 })} />
          <div style={handle({ top: -8, right: -8 })} />
          <div style={handle({ bottom: -8, left: -8 })} />
          <div style={handle({ bottom: -8, right: -8 })} />

          {/* Collaborator cursor on the bottom-right handle */}
          <div
            style={{
              position: 'absolute',
              right: -30,
              bottom: -40,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <svg width="26" height="32" viewBox="0 0 16 20" style={{ alignSelf: 'flex-start' }}>
              <path
                d="M1 1v16l4.5-4.2 3 6.2 2.6-1.2-3-6.1H14z"
                fill={color.cursor}
                stroke="#ffffff"
                strokeWidth="1.5"
              />
            </svg>
            <div
              style={{
                display: 'flex',
                marginTop: 2,
                padding: '3px 10px',
                fontSize: 19,
                fontWeight: 800,
                color: color.ink,
                background: color.cursor,
                borderRadius: 6,
              }}
            >
              Melissa
            </div>
          </div>
        </div>

        {/* FigJam note over the bottom-left corner of the photo */}
        <div
          style={{
            position: 'absolute',
            left: -84,
            bottom: 56,
            width: 250,
            display: 'flex',
            padding: '20px 20px 22px',
            fontSize: 22,
            lineHeight: 1.3,
            color: color.ink,
            background: color.sticky,
            boxShadow: '0 10px 22px -10px rgba(0,0,0,0.35)',
            transform: 'rotate(-3deg)',
          }}
        >
          {t.hero.note[0]}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: 'Bricolage', data: Buffer.from(extraBold, 'base64'), weight: 800 },
        { name: 'Bricolage', data: Buffer.from(regular, 'base64'), weight: 400 },
      ],
    },
  );
}
