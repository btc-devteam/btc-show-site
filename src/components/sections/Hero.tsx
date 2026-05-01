import { motion } from 'motion/react'
import { ChevronsDown } from 'lucide-react'

import { Container, Image, VideoPlayer } from '@/components/common'
import { Button } from '@/components/ui/button'
import { heroContent } from '@/data/heroContent'
import type { HeroContent } from '@/types'

interface HeroProps {
  content?: HeroContent
}

function Hero({ content = heroContent }: HeroProps) {
  const { videoSrc, imageSrc, hookup, cta } = content

  return (
    <section
      aria-label="Hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-canvas text-foreground-inverse"
    >
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <VideoPlayer
            src={videoSrc}
            poster={imageSrc}
            autoPlay
            muted
            loop
            controls={false}
          />
        ) : (
          <Image
            src={imageSrc}
            alt="The BTC Show"
            placeholderLabel="Hero Image / Video"
          />
        )}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <Container className="relative z-10 flex flex-col items-center gap-6 py-20 text-center md:gap-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/logos/white_btc.png"
            alt="behindthechair.com"
            className="h-7 w-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="m-0"
        >
          <img
            src={hookup}
            alt="The BTC Show 2026 — Ft. Lauderdale, Florida — August 22–25"
            className="mx-auto block h-auto w-full max-w-2xl"
          />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <Button
            asChild
            variant="lime"
            size="lg"
            className="h-18.5 w-62.5 rounded-md px-10 font-helvetica text-[32px] font-bold normal-case leading-normal tracking-[-1.28px] text-black"
          >
            <a href={cta.href}>{cta.label}</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          aria-hidden="true"
          className="mt-6"
        >
          <ChevronsDown
            size={84}
            strokeWidth={1}
            className="animate-bounce text-foreground-inverse/80"
          />
        </motion.div>
      </Container>
    </section>
  )
}

export default Hero
