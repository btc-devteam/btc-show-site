import { Image } from '@/components/common'
import { goodyBagContent } from '@/data/goodyBagContent'
import type { GoodyBagContent } from '@/types'

interface GoodyBagProps {
  content?: GoodyBagContent
}

function GoodyBag({ content = goodyBagContent }: GoodyBagProps) {
  return (
    <section id="goody-bag" className="bg-lime text-black">
      <div className="mx-auto flex max-w-295.5 flex-col items-start gap-8 px-6 py-12 lg:flex-row lg:items-center lg:gap-5 lg:px-8 lg:py-12.5">
        <div className="w-full lg:flex-1">
          <Image
            src={content.image}
            alt="Goody Bag"
            ratio="4/3"
            placeholderLabel="Goody Bag"
          />
        </div>

        <div className="flex w-full flex-col gap-3.75 font-helvetica lg:w-95 lg:shrink-0">
          <h2 className="m-0 font-bold tracking-[-2.4px] text-black">
            <span className="block text-[40px] leading-12">The Legendary</span>
            <span className="block text-[47px] leading-12 tracking-[-2.82px]">
              $400 Goody Bag
            </span>
          </h2>
          <p className="m-0 font-helvetica text-[16px] leading-5.25 tracking-[-0.32px] text-[#242424]">
            Your BTC Show Goody Bag is packed with the newest launches, tools,
            and emerging brands—
            <span className="font-bold">
              each product hand-selected by brands who want you to experience
              what’s coming FIRST
            </span>{' '}
            before anyone else gets their hands on it. From full-size favorites
            to exclusive first looks, our BTC Show Goody Bag is valued at more
            than $400.
          </p>
          <p className="m-0 max-w-[330px] font-helvetica text-[14px] leading-4 tracking-[-0.28px] text-[#242424]">
            BTC Show Goody Bags are not included with Base ticket packages.
          </p>
        </div>
      </div>
    </section>
  )
}

export default GoodyBag
