import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "You're In! Order Confirmed",
  description:
    'Thanks for joining The BTC Show 2026. Your ticket is confirmed — see what to do next.',
  robots: { index: false, follow: true },
}

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
