import { Typography } from '@/components/common'
import { oneShotPromo } from '@/data/promoContent'
import type { PromoContent } from '@/types'

interface OneShotPromoProps {
  content?: PromoContent
}

function OneShotPromo({ content = oneShotPromo }: OneShotPromoProps) {
  return (
    <section
      aria-labelledby="oneshot-title"
      className="flex justify-center bg-canvas px-6 py-20 md:py-24"
    >
      <div className="grid w-full max-w-3xl grid-cols-1 items-center gap-8 border-2 border-gold-dark bg-canvas p-6 sm:grid-cols-[auto_1fr] sm:gap-12 sm:p-10">
        <div className="flex flex-col items-start gap-1">
          <Typography
            variant="caption"
            color="gold-light"
            className="tracking-widest"
          >
            {content.brand}
          </Typography>
          {content.titleLines.map((line, i) => (
            <Typography
              key={i}
              as="span"
              variant="display"
              color="gold"
              id={i === 0 ? 'oneshot-title' : undefined}
              className="block text-5xl leading-[0.95] md:text-6xl"
            >
              {line}
            </Typography>
          ))}
          <Typography
            variant="overline"
            color="gold-light"
            className="mt-1 text-[10px] tracking-[0.18em]"
          >
            {content.subtitle}
          </Typography>
        </div>

        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <div className="flex flex-col gap-0.5">
            {content.body.map((line, i) => (
              <Typography
                key={i}
                variant="bodyLarge"
                color="inverse"
                align="center"
                className="sm:text-left"
              >
                {line}
              </Typography>
            ))}
          </div>

          <div className="mt-2 flex flex-col gap-0.5">
            <Typography
              variant="subtitle"
              color="inverse"
              align="center"
              className="font-bold sm:text-left"
            >
              {content.callout}
            </Typography>
            {content.fineprint.map((line, i) => (
              <Typography
                key={i}
                variant="small"
                color="subtle"
                align="center"
                className="sm:text-left"
              >
                {line}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OneShotPromo
