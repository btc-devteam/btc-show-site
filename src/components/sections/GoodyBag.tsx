import { Image, SplitSection } from '@/components/common'
import { goodyBagContent } from '@/data/goodyBagContent'
import type { GoodyBagContent } from '@/types'

interface GoodyBagProps {
  content?: GoodyBagContent
}

function GoodyBag({ content = goodyBagContent }: GoodyBagProps) {
  return (
    <SplitSection
      id="goody-bag"
      bg="bg-lime"
      reverseOnDesktop
      title={
        <h2 className="m-0 font-helvetica font-bold tracking-[-1.5px] lg:tracking-[-2.4px]">
          <span className="block text-[28px] leading-8 md:text-[40px] md:leading-12">
            The Legendary
          </span>
          <span className="block text-[34px] leading-10 tracking-[-1.36px] md:text-[47px] md:leading-12 md:tracking-[-2.82px]">
            $400 Goody Bag
          </span>
        </h2>
      }
      body={
        <div className="font-helvetica text-[16px] leading-5.25 tracking-[-0.32px] text-[#242424]">
          <p className="m-0">
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
          <p className="mt-4 mb-0 max-w-82.5 text-[14px] leading-4 tracking-[-0.28px]">
            BTC Show Goody Bags are not included with Base ticket packages.
          </p>
        </div>
      }
      media={
        <Image
          src={content.image}
          alt="Goody Bag"
          ratio="3/2"
          placeholderLabel="Goody Bag"
        />
      }
    />
  )
}

export default GoodyBag
