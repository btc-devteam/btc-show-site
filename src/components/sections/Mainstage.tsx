import { MediaGrid, SplitSection } from '@/components/common'
import { mainstageContent } from '@/data/mainstageContent'
import type { MainstageContent } from '@/types'

interface MainstageProps {
  content?: MainstageContent
}

function Mainstage({ content = mainstageContent }: MainstageProps) {
  return (
    <SplitSection
      id="mainstage"
      bg="bg-surface"
      reverseOnDesktop
      title={
        <h2 className="m-0 font-helvetica font-bold tracking-[-1.5px] lg:tracking-[-2.4px]">
          <span className="block text-3xl leading-tight md:text-[40px] md:leading-10">
            {content.title.line1}
          </span>
          <span className="block text-[44px] leading-10 tracking-[-1.76px] md:text-[58px] md:leading-14 md:tracking-[-3.48px]">
            {content.title.line2}
          </span>
          <span className="block text-2xl leading-tight md:text-[40px] md:leading-10">
            {content.title.line3}
          </span>
        </h2>
      }
      body={
        <p className="m-0 font-helvetica text-[16px] leading-5.25 tracking-[-0.32px] text-[#242424]">
          {content.body.intro}
          <span className="font-bold">{content.body.bold}</span>
          {content.body.rest}
        </p>
      }
      media={
        <MediaGrid
          main={content.mainImage}
          thumbnails={content.thumbnails}
          mainAlt="BTC Show main stage"
          mainPlaceholder="Main Stage"
        />
      }
    />
  )
}

export default Mainstage
