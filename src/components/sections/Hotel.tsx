import { MediaGrid } from '@/components/common'
import { Button } from '@/components/ui/button'
import { hotelContent } from '@/data/hotelContent'
import type { HotelContent } from '@/types'

interface HotelProps {
  content?: HotelContent
}

function Hotel({ content = hotelContent }: HotelProps) {
  return (
    <section id="hotel" className="bg-surface text-black">
      <div className="mx-auto flex max-w-295.5 flex-col items-start gap-8 px-6 py-12 lg:flex-row lg:items-center lg:gap-5 lg:px-8 lg:py-16">
        <div className="flex w-full flex-col gap-3.75 font-helvetica lg:w-95 lg:shrink-0">
          <h2 className="m-0 font-bold tracking-[-2.4px] text-black">
            <span className="block">
              <span className="text-[40px] leading-10">The </span>
              <span className="text-[54px] leading-12.5 tracking-[-3.24px]">
                Omni Ft. Lauderdale
              </span>
            </span>
            <span className="block text-[40px] leading-10">
              Hotel &amp; Convention Center
            </span>
          </h2>

          <p className="m-0 font-helvetica text-[24px] leading-7.5 tracking-[-1.2px] text-[#444]">
            $239/night &nbsp;|&nbsp; 3-Night Minimum
          </p>

          <div className="font-helvetica text-[16px] leading-5.25 tracking-[-0.32px] text-[#242424]">
            <p className="m-0">
              <span className="font-bold">
                Our most beautiful host hotel yet—the NEW Omni Fort Lauderdale,
              </span>{' '}
              directly connected to the convention center. Sweeping ocean and
              waterfront views, a rooftop pool and bar, and the entire weekend
              unfolding in one place.
            </p>
            <p className="mt-5.25 mb-0 font-bold">
              Hotel reserved for BTC Show ticket holders.
            </p>
          </div>

          <div className="font-helvetica text-[14px] leading-4 tracking-[-0.28px] text-[#242424]">
            <p className="m-0">
              NOTE: Due to space limitations at our exclusive host hotel, access
              to the room block is reserved for confirmed BTC Show ticket
              holders.
            </p>
            <p className="mt-4 mb-0">
              After purchasing your ticket, you will receive the private booking
              link. Limit one room per ticket confirmation.
            </p>
          </div>

          <Button
            asChild
            className="h-15 w-65 rounded-md border-2 border-black bg-transparent font-helvetica text-[22px] font-bold normal-case tracking-[-0.88px] text-black hover:bg-transparent"
          >
            <a href={content.cta.href}>{content.cta.label}</a>
          </Button>
        </div>

        <MediaGrid
          main={content.mainImage}
          thumbnails={content.thumbnails}
          mainAlt="Omni Fort Lauderdale Hotel"
          mainPlaceholder="Omni Hotel"
          mainRatio="4/3"
        />
      </div>
    </section>
  )
}

export default Hotel
