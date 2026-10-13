import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export { generateStaticParams } from './layout';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#ececed',
        }}
      >
        <div
          style={{
            width: 124,
            height: 124,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#ffffff',
            border: '6px solid #0862cc',
            fontSize: 52,
            fontWeight: 700,
            color: '#1d1d21',
            fontFamily: 'monospace',
          }}
        >
          {'</>'}
        </div>
      </div>
    ),
    size
  );
}
