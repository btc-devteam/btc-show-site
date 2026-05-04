import { Button } from '@/components/ui/button'
import { chooseYourTicketContent } from '@/data/ticketPackages'
import { oneShotPromo } from '@/data/promoContent'
import type { ChooseYourTicketContent, TicketPackage } from '@/types'

interface ChooseYourTicketProps {
  content?: ChooseYourTicketContent
}

function ChooseYourTicket({
  content = chooseYourTicketContent,
}: ChooseYourTicketProps) {
  return (
    <section id="tickets" className="bg-canvas text-foreground-inverse">
      <div className="mx-auto flex max-w-295.5 flex-col gap-10 px-7.5 py-10 md:items-center lg:gap-12 lg:py-12.5">
        <header className="flex w-full flex-col items-start gap-3.75 md:items-center md:text-center">
          <h2 className="m-0 max-w-129.5 font-helvetica text-[44px] font-bold leading-11 tracking-[-2.4px] text-white md:text-[60px] md:leading-14.5 md:tracking-[-3.6px]">
            Choose Your Ticket
          </h2>
          <div className="flex flex-col items-start gap-1 font-helvetica text-[20px] leading-7 tracking-[-1.2px] md:items-center">
            <p className="m-0 font-bold text-pink-accent">
              Buy Now, Pay Later at Checkout
            </p>
            <a
              href="#seating-chart"
              className="text-cyan-accent underline-offset-4 hover:underline"
            >
              View Seating Chart
            </a>
          </div>
        </header>

        <div className="grid w-full grid-cols-1 gap-12.5 md:grid-cols-2">
          {content.packages.map((pkg) => (
            <TicketCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <Button
          asChild
          className="h-18.5 w-82.5 rounded-md border-2 border-lime bg-transparent font-helvetica text-[28px] font-bold normal-case tracking-[-1.12px] text-lime hover:bg-transparent"
        >
          <a href={content.browseAllCta.href}>{content.browseAllCta.label}</a>
        </Button>

        <OneShotPromoCallout />
      </div>
    </section>
  )
}

function TicketCard({ pkg }: { pkg: TicketPackage }) {
  return (
    <article className="flex flex-col justify-between gap-5 border border-white p-3.75">
      <div className="flex flex-col gap-2.5">
        <div className="flex w-full items-end justify-between text-cyan-accent">
          <p className="m-0 font-helvetica text-[44px] font-bold leading-9.5 tracking-[-1.76px]">
            {pkg.name}
          </p>
          <div className="flex flex-col items-end gap-2.5 text-right">
            {pkg.oldPrice && (
              <p className="m-0 font-helvetica text-[20px] leading-5 tracking-[-0.8px] line-through">
                {pkg.oldPrice}
              </p>
            )}
            <p className="m-0 font-helvetica text-[30px] font-bold leading-5 tracking-[-1.2px]">
              {pkg.price}
            </p>
          </div>
        </div>

        <div className="flex w-full items-center justify-between">
          <p className="m-0 font-helvetica text-[18px] italic leading-5 tracking-[-0.72px] text-lime">
            {pkg.valueText}
          </p>
          {(pkg.promoCode || pkg.badge) && (
            <span className="rounded-full border border-white/95 bg-[#242424] px-2.5 py-1 font-helvetica text-[14px] font-medium uppercase leading-3.5 tracking-[-0.56px] text-cyan-accent">
              {pkg.promoCode || pkg.badge}
            </span>
          )}
        </div>

        <ul className="m-0 flex list-disc flex-col gap-0 pl-6 font-helvetica text-[15px] leading-5 tracking-[-0.45px] text-white marker:text-white">
          {pkg.features.map((feat, i) => (
            <li key={i} className={feat.bold ? 'font-bold' : ''}>
              {feat.text}
            </li>
          ))}
        </ul>

        {pkg.footnote && (
          <p className="m-0 font-helvetica text-[15px] leading-5 tracking-[-0.45px] text-white">
            {pkg.footnote}
          </p>
        )}
        {pkg.finalNote && (
          <p className="m-0 font-helvetica text-[15px] font-bold leading-5 tracking-[-0.45px] text-white">
            {pkg.finalNote}
          </p>
        )}
      </div>

      <Button
        asChild
        variant="lime"
        className="h-18.5 w-full rounded-md font-helvetica text-[28px] font-bold normal-case tracking-[-1.12px]"
      >
        <a href={pkg.cta.href}>{pkg.cta.label}</a>
      </Button>
    </article>
  )
}

function OneShotPromoCallout() {
  return (
    <div className="flex w-full max-w-150 flex-col items-center gap-5 border border-[#f5e9ac] px-3.75 py-5 md:flex-row md:items-center md:gap-3.75">
      <div className="aspect-200/235 w-50 shrink-0 bg-canvas">
        <img
          src={oneShotPromo.logo}
          alt="#ONESHOT Global Hair Awards"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-3.75 font-helvetica text-center text-[#f5e9ac]">
        <div className="text-[20px] font-bold leading-7.5 tracking-[-1px]">
          {oneShotPromo.body.map((line, i) => (
            <p key={i} className="m-0">
              {line}
            </p>
          ))}
        </div>
        <div className="text-[16px] leading-5.25 tracking-[-0.32px]">
          <p className="m-0">
            <span className="font-bold">{oneShotPromo.callout.replace(/\.$/, '')}</span>.
          </p>
          {oneShotPromo.fineprint.map((line, i) => (
            <p key={i} className="m-0">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ChooseYourTicket
