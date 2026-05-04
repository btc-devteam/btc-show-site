import { MediaGrid, SplitSection } from '@/components/common'
import { Button } from '@/components/ui/button'
import { hotelContent } from '@/data/hotelContent'
import type { HotelContent } from '@/types'

interface HotelProps {
  content?: HotelContent
}

function Hotel({ content = hotelContent }: HotelProps) {
  return (
    <SplitSection
      id="hotel"
      bg="bg-surface"
      title={
        <h2 className="m-0 font-helvetica font-bold tracking-[-1.5px] lg:tracking-[-2.4px]">
          <span className="block">
            <span className="text-2xl leading-7 md:text-[40px] md:leading-10">
              The{' '}
            </span>
            <span className="text-[32px] leading-9 tracking-[-1.28px] md:text-[54px] md:leading-12.5 md:tracking-[-3.24px]">
              Omni Ft. Lauderdale
            </span>
          </span>
          <span className="block text-2xl leading-tight md:text-[40px] md:leading-10">
            Hotel &amp; Convention Center
          </span>
        </h2>
      }
      body={
        <div className="flex flex-col gap-4 font-helvetica">
          <p className="m-0 text-[20px] leading-7 tracking-[-1px] text-[#444] md:text-[24px] md:leading-7.5 md:tracking-[-1.2px]">
            $239/night &nbsp;|&nbsp; 3-Night Minimum
          </p>
          <div className="text-[16px] leading-5.25 tracking-[-0.32px] text-[#242424]">
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
          <div className="text-[14px] leading-4 tracking-[-0.28px] text-[#242424]">
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
      }
      media={
        <MediaGrid
          main={content.mainImage}
          thumbnails={content.thumbnails}
          mainAlt="Omni Fort Lauderdale Hotel"
          mainPlaceholder="Omni Hotel"
          mainRatio="3/2"
        />
      }
    />
  )
}

export default Hotel
