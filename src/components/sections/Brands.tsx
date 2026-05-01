import { Image } from '@/components/common'
import { brandsContent } from '@/data/brandsContent'
import type { BrandsContent } from '@/types'

interface BrandsProps {
  content?: BrandsContent
}

function Brands({ content = brandsContent }: BrandsProps) {
  return (
    <section id="brands" className="bg-surface text-black">
      <div className="mx-auto flex max-w-295.5 flex-col items-start gap-8 px-6 py-12 lg:flex-row lg:items-center lg:gap-5 lg:px-8 lg:py-16">
        <div className="flex w-full items-center justify-center bg-canvas p-4 lg:flex-1">
          <Image
            src={content.logoGridImage}
            alt="Brand logos"
            ratio="3/2"
            fit="contain"
            placeholderLabel="Brand Logo Grid"
            className="bg-canvas"
          />
        </div>

        <div className="flex w-full flex-col gap-3.75 font-helvetica lg:w-95 lg:shrink-0">
          <h2 className="m-0 font-bold tracking-[-2.4px] text-black">
            <span className="block text-[46px] leading-10">Some brands </span>
            <span className="block text-[40px] leading-10">go anywhere.</span>
            <span className="block text-[54px] leading-12.5">
              The best only come to BTC.
            </span>
          </h2>
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
        </div>
      </div>
    </section>
  )
}

export default Brands
