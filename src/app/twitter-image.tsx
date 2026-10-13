import { ImageResponse } from 'next/og';

export const alt = 'Melissa Fonnegra Zapata — Ingeniera de Software · Frontend Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1033 60%, #0b2a3a 100%)',
          color: '#f0f0f5',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 32, color: '#a78bfa', marginBottom: 24 }}>{'</> MF'}</div>
        <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: '-0.03em' }}>
          Melissa Fonnegra Zapata
        </div>
        <div style={{ fontSize: 38, color: '#c4c4d4', marginTop: 16 }}>
          Ingeniera de Software · Frontend Developer & UI Specialist
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 48, fontSize: 26, color: '#a0a0b8' }}>
          <span>Drupal headless</span>
          <span>·</span>
          <span>React</span>
          <span>·</span>
          <span>Next.js</span>
          <span>·</span>
          <span>WCAG</span>
          <span>·</span>
          <span>SEO técnico</span>
        </div>
      </div>
    ),
    size
  );
}
