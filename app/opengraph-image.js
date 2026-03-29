import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Day1.digital \u2014 Agence web nouvelle g\u00e9n\u00e9ration';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
          backgroundColor: '#0f172a',
          border: '6px solid #6366f1',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
          }}
        >
          Day1.digital
        </div>
        <div
          style={{
            fontSize: 34,
            color: '#a5b4fc',
            marginBottom: 12,
          }}
        >
          Agence web nouvelle g\u00e9n\u00e9ration
        </div>
        <div
          style={{
            fontSize: 26,
            color: '#94a3b8',
            marginBottom: 40,
          }}
        >
          Landing pages haute performance en 48h
        </div>
        <div
          style={{
            display: 'flex',
            gap: 20,
          }}
        >
          <div
            style={{
              padding: '12px 32px',
              backgroundColor: '#6366f1',
              borderRadius: 12,
              color: 'white',
              fontSize: 22,
              fontWeight: 'bold',
            }}
          >
            Design sur mesure
          </div>
          <div
            style={{
              padding: '12px 32px',
              border: '2px solid #6366f1',
              borderRadius: 12,
              color: '#a5b4fc',
              fontSize: 22,
            }}
          >
            SEO inclus
          </div>
          <div
            style={{
              padding: '12px 32px',
              border: '2px solid #6366f1',
              borderRadius: 12,
              color: '#a5b4fc',
              fontSize: 22,
            }}
          >
            Support 24/7
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 80,
            fontSize: 20,
            color: '#475569',
          }}
        >
          www.day1.digital
        </div>
      </div>
    ),
    { ...size }
  );
}
