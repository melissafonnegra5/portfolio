import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import sharp from 'sharp';
import { dictionaries, hasLocale, locales } from '@/content';

export const alt = 'Melissa Fonnegra Zapata, Frontend Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// One image per language, generated at build time
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const handle = (pos) => ({
  position: 'absolute',
  width: 14,
  height: 14,
  background: '#ffffff',
  border: '2.5px solid #0862cc',
  ...pos,
});

// Cached so the image is generated once at build time, not on every visit
async function getAssets() {
  'use cache';
  const [photo, extraBold, regular] = await Promise.all([
    readFile(join(process.cwd(), 'public/melissa.webp')),
    readFile(join(process.cwd(), 'src/assets/BricolageGrotesque-ExtraBold.ttf')),
    readFile(join(process.cwd(), 'src/assets/BricolageGrotesque-Regular.ttf')),
  ]);
  return {
    // Satori (behind ImageResponse) can't decode WebP, so it gets a PNG copy
    src: `data:image/png;base64,${(await sharp(photo).png().toBuffer()).toString('base64')}`,
    extraBold: extraBold.toString('base64'),
    regular: regular.toString('base64'),
  };
}

export default async function Image({ params }) {
  const { lang: requested } = await params;
  const lang = hasLocale(requested) ? requested : 'es';
  const { src, extraBold, regular } = await getAssets();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 90px',
          background: '#ececed',
          color: '#1d1d21',
          fontFamily: 'Bricolage',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 640 }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.03em' }}>
            Melissa
          </div>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 0.95, letterSpacing: '-0.03em' }}>
            Fonnegra Zapata
          </div>
          <div style={{ fontSize: 32, marginTop: 36, color: '#3b3b42', lineHeight: 1.3 }}>
            {dictionaries[lang].meta.ogTagline}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 20, color: '#0862cc', marginBottom: 10 }}>melissa.webp</div>
          <div style={{ position: 'relative', display: 'flex', border: '2.5px solid #0862cc' }}>
            <img src={src} width={340} height={425} alt="" />
            <div style={handle({ top: -8, left: -8 })} />
            <div style={handle({ top: -8, right: -8 })} />
            <div style={handle({ bottom: -8, left: -8 })} />
            <div style={handle({ bottom: -8, right: -8 })} />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Bricolage', data: Buffer.from(extraBold, 'base64'), weight: 800 },
        { name: 'Bricolage', data: Buffer.from(regular, 'base64'), weight: 400 },
      ],
    }
  );
}
