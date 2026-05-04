import type { CtaLink } from '@/types'

export type NextStep = {
  id: string
  title: string
  description: string
  cta: CtaLink
}

export type SuccessContent = {
  eyebrow: string
  title: string
  subtitle: string
  message: string
  nextStepsTitle: string
  nextSteps: NextStep[]
  primaryCta: CtaLink
  fineprint: string
}

export const successContent: SuccessContent = {
  eyebrow: 'Confirmed',
  title: "You're In!",
  subtitle: 'Welcome to The BTC Show 2026.',
  message:
    'Your ticket is confirmed and a receipt with your order details is on its way to your inbox. Bring this confirmation (or just your face) to check-in — we’ll handle the rest.',
  nextStepsTitle: "What's next",
  nextSteps: [
    {
      id: 'email',
      title: 'Check your inbox',
      description:
        "Your full ticket and order confirmation just landed. Can't find it? Check your spam folder or contact our team.",
      cta: { label: 'Resend Confirmation', href: '#resend' },
    },
    {
      id: 'hotel',
      title: 'Book your hotel',
      description:
        'BTC ticket holders get exclusive access to the Omni Ft. Lauderdale at $239/night. Reserve early — rooms go fast.',
      cta: { label: 'Reserve Hotel', href: '#hotel-options' },
    },
    {
      id: 'calendar',
      title: 'Save the date',
      description:
        'August 22–25, 2026. Add the show to your calendar so nothing else sneaks onto your weekend.',
      cta: { label: 'Add to Calendar', href: '#calendar' },
    },
    {
      id: 'share',
      title: 'Bring your people',
      description:
        'The biggest moments at BTC are the ones you share. Tag someone who should be in the room.',
      cta: { label: 'Share The Show', href: '#share' },
    },
  ],
  primaryCta: { label: 'Back to Home', href: '/' },
  fineprint: 'Need help? Email support@thebtcshow.com',
}

export default successContent
