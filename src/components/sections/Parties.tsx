import { Play } from 'lucide-react'

import { Image } from '@/components/common'
import { partiesContent } from '@/data/partiesContent'
import type { PartiesContent, PartyEvent } from '@/types'

interface PartiesProps {
  content?: PartiesContent
}

function Parties({ content = partiesContent }: PartiesProps) {
  return (
    <section
      id="parties"
      className="bg-pink-accent text-black"
    >
      <div className="mx-auto flex max-w-295.5 flex-col gap-12 px-6 py-12 lg:gap-16 lg:px-8 lg:py-16">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-5">
          <div className="flex w-full flex-col gap-3.75 font-helvetica lg:w-95 lg:shrink-0">
            <h2 className="m-0 text-[44px] font-bold leading-11 tracking-[-2.6px] text-black md:text-[64px] md:leading-15.5 md:tracking-[-3.84px]">
              {content.title.line1}
              <br />
              {content.title.line2}
            </h2>
            <p className="m-0 text-[16px] leading-5.25 tracking-[-0.32px] text-black">
              {content.description}
            </p>
          </div>

          <div className="w-full lg:flex-1">
            <Image
              src={content.heroImage}
              alt="Party crowd"
              ratio="3/2"
              className="border-2 border-white"
              placeholderLabel="Party Hero"
            />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1020px] flex-col gap-12">
          {content.events.map((event) => (
            <PartyRow key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PartyRow({ event }: { event: PartyEvent }) {
  return (
    <article className="flex flex-col items-center gap-5 lg:flex-row">
      <div className="relative w-full lg:w-[600px] lg:shrink-0">
        <Image
          src={event.imageSrc}
          alt={event.title}
          ratio="3/2"
          className="border border-white"
          placeholderLabel={event.title}
        />
        {event.hasVideo && (
          <button
            type="button"
            aria-label={`Play ${event.title} video`}
            className="absolute left-1/2 top-1/2 flex size-[62px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-cyan-accent bg-black/50 text-cyan-accent backdrop-blur-sm transition-transform hover:scale-110"
          >
            <Play size={22} className="ml-1 fill-cyan-accent" strokeWidth={0} />
          </button>
        )}
      </div>

      <div className="flex w-full flex-col gap-[5px] font-helvetica lg:w-95">
        <p className="m-0 text-[24px] leading-7.5 tracking-[-1.2px] text-black">
          <span className="font-bold">{event.title}</span>
          <span className="font-normal"> • {event.day}</span>
        </p>
        <p className="m-0 text-[16px] leading-5.25 tracking-[-0.32px] text-black">
          {event.description}
        </p>
      </div>
    </article>
  )
}

export default Parties
