import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { FloatingNavbar } from '@/components/navigation/FloatingNavbar'
import { Footer } from '@/components/common/Footer'
import { WhatsAppButton } from '@/components/common/WhatsAppButton'
import './globals.css'

// ─── Site Metadata ────────────────────────────────────────────
// Default metadata — individual pages override these via generateMetadata()
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://pixelstudiobybovio.lat'
  ),
  title: {
    default: 'Pixel Studio by Bovio — Digital Design Studio',
    template: '%s — Pixel Studio by Bovio',
  },
  description:
    'Premium digital design studio in Guadalajara, Mexico. We design and build modern websites that help businesses earn trust, attract customers and grow.',
  keywords: [
    'diseño web',
    'desarrollo web',
    'Guadalajara',
    'sitio web profesional',
    'landing page',
    'digital design studio',
    'web design Mexico',
  ],
  authors: [{ name: 'Pixel Studio by Bovio' }],
  creator: 'Pixel Studio by Bovio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pixelstudiobybovio.lat',
    siteName: 'Pixel Studio by Bovio',
    title: 'Pixel Studio by Bovio — Digital Design Studio',
    description:
      'Premium digital design studio in Guadalajara, Mexico. We design and build modern websites that help businesses earn trust, attract customers and grow.',
    images: [
      {
        url: '/og/default.svg',
        width: 1200,
        height: 630,
        alt: 'Pixel Studio by Bovio — Digital Design Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixel Studio by Bovio — Digital Design Studio',
    description:
      'Premium digital design studio in Guadalajara, Mexico. We design and build modern websites that help businesses earn trust, attract customers and grow.',
    images: ['/og/default.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// ─── Root Layout ──────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        <FloatingNavbar />
        <main id="main-content" tabIndex={-1} className="pt-16 smooth-scroll">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
