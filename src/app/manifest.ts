import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Arrasou Sobrancelhas',
    short_name: 'Arrasou',
    description: 'Design de sobrancelhas e micropigmentação em Cotia e Baixada Santista',
    start_url: '/',
    display: 'standalone',
    background_color: '#FDF2F8',
    theme_color: '#F472B6',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}