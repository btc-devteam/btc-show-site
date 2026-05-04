import type { Metadata, Viewport } from 'next'
import { Inter, Anton } from 'next/font/google'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
})

const SITE_URL = 'https://thebtcshow.com'
const OG_IMAGE = `${SITE_URL}/images/og-cover.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'The BTC Show 2026 | Aug 22–25 | Ft. Lauderdale, FL',
    template: '%s | The BTC Show 2026',
  },
  description:
    'Three days of education, inspiration, and connection. The biggest stage in the world of hair returns to Ft. Lauderdale August 22–25, 2026.',
  keywords: [
    'BTC Show',
    'behindthechair',
    'hair show',
    'hairdresser conference',
    '#ONESHOT',
    'Ft. Lauderdale',
  ],
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'The BTC Show',
    title: 'The BTC Show 2026 | Aug 22–25 | Ft. Lauderdale, FL',
    description:
      'Three days of education, inspiration, and connection. The biggest stage in the world of hair.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'The BTC Show 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The BTC Show 2026 | Aug 22–25 | Ft. Lauderdale, FL',
    description:
      'Three days of education, inspiration, and connection. The biggest stage in the world of hair.',
    images: [OG_IMAGE],
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'The BTC Show 2026',
  startDate: '2026-08-22T09:00:00-04:00',
  endDate: '2026-08-25T18:00:00-04:00',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'Omni Fort Lauderdale Hotel & Convention Center',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fort Lauderdale',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
  },
  image: [OG_IMAGE],
  description:
    'Three days of education, inspiration, and connection — the largest stage in the world of hair.',
  organizer: {
    '@type': 'Organization',
    name: 'behindthechair.com',
    url: 'https://behindthechair.com',
  },
  offers: [
    { '@type': 'Offer', name: 'Base', price: '395', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: `${SITE_URL}/#tickets` },
    { '@type': 'Offer', name: 'Premium', price: '395', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: `${SITE_URL}/#tickets` },
    { '@type': 'Offer', name: 'VIP', price: '595', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: `${SITE_URL}/#tickets` },
    { '@type': 'Offer', name: 'Super VIP', price: '895', priceCurrency: 'USD', availability: 'https://schema.org/InStock', url: `${SITE_URL}/#tickets` },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
      </head>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
