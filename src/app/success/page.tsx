'use client'

import { motion } from 'motion/react'
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Mail,
  MapPin,
  Share2,
} from 'lucide-react'

import { Container } from '@/components/common'
import { Button } from '@/components/ui/button'
import { successContent, type NextStep } from '@/data/successContent'

const STEP_ICONS: Record<
  string,
  React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>
> = {
  email: Mail,
  hotel: MapPin,
  calendar: Calendar,
  share: Share2,
}

export default function SuccessPage() {
  const {
    eyebrow,
    title,
    subtitle,
    message,
    nextStepsTitle,
    nextSteps,
    primaryCta,
    fineprint,
  } = successContent

  return (
    <main className="flex flex-1 flex-col">
      <section
        aria-label="Order confirmed"
        className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden bg-canvas px-7.5 py-20 text-center text-foreground-inverse lg:py-24"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,var(--color-lime)_0%,transparent_60%)] opacity-20"
        />
        <div className="relative z-10 flex flex-col items-center gap-6">
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          >
            <CheckCircle2 size={88} strokeWidth={1.5} className="text-lime" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="m-0 font-helvetica text-xs font-bold uppercase tracking-widest text-lime"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="m-0 font-helvetica text-[44px] font-bold leading-tight tracking-[-2.2px] text-white md:text-[72px] md:leading-[68px] md:tracking-[-3.6px]"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="m-0 max-w-xl font-helvetica text-[20px] leading-7 tracking-[-0.6px] text-foreground-subtle md:text-[24px] md:leading-8 md:tracking-[-1.2px]"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      <section className="bg-surface text-foreground">
        <Container
          size="narrow"
          className="flex flex-col items-center gap-6 px-7.5 py-12.5 text-center"
        >
          <p className="m-0 font-helvetica text-[18px] leading-7 tracking-[-0.36px] text-[#242424] md:text-[20px] md:leading-8">
            {message}
          </p>
        </Container>
      </section>

      <section id="next-steps" className="bg-muted text-foreground">
        <Container className="flex flex-col gap-10 px-7.5 py-12.5">
          <h2 className="m-0 text-center font-helvetica text-[32px] font-bold leading-tight tracking-[-1.6px] text-black md:text-[44px] md:leading-12 md:tracking-[-2.2px]">
            {nextStepsTitle}
          </h2>
          <ul className="grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-2 lg:grid-cols-4">
            {nextSteps.map((step) => (
              <NextStepCard key={step.id} step={step} />
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-surface text-foreground">
        <Container className="flex flex-col items-center gap-4 px-7.5 py-12.5 text-center">
          <Button
            asChild
            variant="lime"
            className="h-18.5 w-72 rounded-md font-helvetica text-[28px] font-bold normal-case tracking-[-1.12px]"
          >
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          <p className="m-0 font-helvetica text-[14px] leading-4 tracking-[-0.28px] text-[#242424]">
            {fineprint}
          </p>
        </Container>
      </section>
    </main>
  )
}

function NextStepCard({ step }: { step: NextStep }) {
  const Icon = STEP_ICONS[step.id] ?? CheckCircle2
  return (
    <li className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-5 transition-shadow hover:shadow-md">
      <Icon size={28} strokeWidth={1.6} className="text-foreground" />
      <h3 className="m-0 font-helvetica text-[20px] font-bold leading-7 tracking-[-0.6px] text-black">
        {step.title}
      </h3>
      <p className="m-0 flex-1 font-helvetica text-[15px] leading-6 tracking-[-0.3px] text-[#242424]">
        {step.description}
      </p>
      <a
        href={step.cta.href}
        className="mt-1 inline-flex items-center gap-1.5 self-start font-helvetica text-[14px] font-bold uppercase tracking-wider text-foreground transition-opacity hover:opacity-70"
      >
        {step.cta.label}
        <ArrowRight size={14} />
      </a>
    </li>
  )
}
