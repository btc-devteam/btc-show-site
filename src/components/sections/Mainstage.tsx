import { MediaGrid } from '@/components/common'
import { mainstageContent } from '@/data/mainstageContent'
import type { MainstageContent } from '@/types'

interface MainstageProps {
  content?: MainstageContent
}

function Mainstage({ content = mainstageContent }: MainstageProps) {
  return (
    <section id="mainstage" className="bg-surface text-black">
      <div className="mx-auto flex max-w-295.5 flex-col items-start gap-8 px-6 py-12 lg:flex-row lg:items-center lg:gap-5 lg:px-8 lg:py-16">
        <MediaGrid
          main={content.mainImage}
          thumbnails={content.thumbnails}
          mainAlt="BTC Show main stage"
          mainPlaceholder="Main Stage"
        />

        <div className="flex w-full flex-col gap-3.75 font-helvetica lg:w-95 lg:shrink-0">
          <h2 className="m-0 font-bold tracking-[-2.4px] text-black">
            <span className="block text-[40px] leading-10">
              {content.title.line1}
            </span>
            <span className="block text-[58px] leading-14 tracking-[-3.48px]">
              {content.title.line2}
            </span>
            <span className="block text-[40px] leading-10">
              {content.title.line3}
            </span>
          </h2>

          <p className="m-0 font-helvetica text-[16px] leading-5.25 tracking-[-0.32px] text-[#242424]">
            {content.body.intro}
            <span className="font-bold">{content.body.bold}</span>
            {content.body.rest}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Mainstage
