import { Image, SplitSection } from '@/components/common'
import { brandsContent } from '@/data/brandsContent'
import type { BrandsContent } from '@/types'

interface BrandsProps {
  content?: BrandsContent
}

function Brands({ content = brandsContent }: BrandsProps) {
  return (
    <SplitSection
      id="brands"
      bg="bg-surface"
      reverseOnDesktop
      title={
        <h2 className="m-0 font-helvetica font-bold tracking-[-1.5px] lg:tracking-[-2.4px]">
          <span className="block text-[28px] leading-8 md:text-[46px] md:leading-10">
            Some brands{' '}
          </span>
          <span className="block text-2xl leading-7 md:text-[40px] md:leading-10">
            go anywhere.
          </span>
          <span className="block text-[32px] leading-9 md:text-[54px] md:leading-12.5">
            The best only come to BTC.
          </span>
        </h2>
      }
      body={
        <div className="font-helvetica text-[16px] leading-5.25 tracking-[-0.32px] text-[#242424]">
          <p className="m-0">
            The best brands—and the most exciting new ones—show up at The BTC
            Show because they know that BTC attracts the most serious,
            educated and forward-thinking hairdressers and salon owners in the
            industry.
          </p>
          <p className="mt-5.25 mb-0">
            And, if you’re a salon owner, that’s why you need to be here!{' '}
            <span className="font-bold">
              They know the room is filled with the next generation of leaders
              shaping what salons will look like tomorrow. And that’s why they
              want to meet you!
            </span>
          </p>
        </div>
      }
      media={
        <Image
          src={content.logoGridImage}
          alt="Brand logos"
          ratio="3/2"
          fit="contain"
          placeholderLabel="Brand Logo Grid"
          className="bg-canvas"
        />
      }
    />
  )
}

export default Brands
