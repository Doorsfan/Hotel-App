import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LuxStay - Premium Hotel Booking Platform',
  description: 'Find and book luxury hotels worldwide with LuxStay. Best price guarantee, secure booking, and 24/7 support for your perfect stay.',
  authors: [{ name: 'Lovable' }],
  openGraph: {
    title: 'LuxStay - Premium Hotel Booking Platform',
    description: 'Find and book luxury hotels worldwide with LuxStay. Best price guarantee, secure booking, and 24/7 support for your perfect stay.',
    type: 'website',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@lovable_dev',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
