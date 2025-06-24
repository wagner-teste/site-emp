import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Prime Code Solutions',
    short_name: 'PrimeCode',
    description: 'Prime Code oferece desenvolvimento de software, automações, APIs e soluções tecnológicas sob medida para impulsionar empresas no mundo digital.',
    start_url: '/', // até desenvolver um mais efetivo 
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
