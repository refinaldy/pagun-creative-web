import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Pagun Creative - Optimize Your Brand';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'serif',
          color: '#EAEAEA',
        }}
      >
        {/* Background Noise Simulation */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'radial-gradient(circle at 25% 25%, #28d8d0 0%, transparent 20%), radial-gradient(circle at 80% 80%, #28d8d0 0%, transparent 20%)',
            opacity: 0.2,
            filter: 'blur(100px)',
          }}
        />

        <div
          style={{
            fontSize: 120,
            letterSpacing: '-0.05em',
            fontWeight: 900,
            lineHeight: 0.8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textShadow: '0 0 40px rgba(40,216,208,0.3)',
          }}
        >
          <span>PAGUN</span>
          <span style={{ color: '#28d8d0', fontStyle: 'italic' }}>CREATIVE</span>
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            opacity: 0.7,
            fontFamily: 'sans-serif',
          }}
        >
          Optimize Your Social Brand
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
