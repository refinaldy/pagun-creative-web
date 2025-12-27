import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'

export const size = {
  width: 512,
  height: 512,
}
export const contentType = 'image/png'

export default function Icon() {
  const logoPath = join(process.cwd(), 'public/pagun_logo_icon_only.png')
  const logoData = readFileSync(logoPath)
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img 
            src={logoSrc} 
            width="512" 
            height="512" 
            style={{ 
                objectFit: 'contain',
                width: '100%',
                height: '100%'
            }} 
        />
      </div>
    ),
    { ...size }
  )
}
