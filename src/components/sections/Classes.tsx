import { MediaGrid, SplitSection } from '@/components/common'
import { classesContent } from '@/data/classesContent'
import type { ClassesContent } from '@/types'

interface ClassesProps {
  content?: ClassesContent
}

function Classes({ content = classesContent }: ClassesProps) {
  return (
    <SplitSection
      id="classes"
      bg="bg-lime"
      title={
        <h2 className="m-0 font-helvetica font-bold tracking-[-1.5px] lg:tracking-[-2.4px]">
          <span className="block text-3xl leading-tight md:text-[40px] md:leading-10">
            75+ Look &amp; Learn
          </span>
          <span className="block">
            <span className="text-3xl leading-tight md:text-[40px] md:leading-10">
              and Hands-on{' '}
            </span>
            <span className="text-[44px] leading-10 tracking-[-1.76px] md:text-[64px] md:leading-14 md:tracking-[-3.84px]">
              Classes
            </span>
          </span>
        </h2>
      }
      body={
        <div className="font-helvetica text-[16px] leading-5.25 tracking-[-0.32px] text-[#242424]">
          <p className="m-0">
            <span className="font-bold">
              At the BTC Show, education isn’t a side show—it’s the heartbeat
              of the entire experience.
            </span>{' '}
            With more than 75 Look &amp; Learn classes and hands-on workshops,
            this is where the icons in the industry come to teach. These are
            the educators you don’t see anywhere else- the artists who don’t
            tour endlessly.
          </p>
          <p className="mt-5.25 mb-0">
            From hair color and cutting to styling, texture, men’s,
            extensions, business and social media, every technique that your
            clients are asking for is being taught! Classes run 60- to
            90-minutes and are intentionally designed for smaller audiences,
            so you’re up-close and personal while learning!
          </p>
        </div>
      }
      media={
        <MediaGrid
          main={content.mainImage}
          thumbnails={content.thumbnails}
          mainAlt="BTC Show classes"
          mainPlaceholder="Classes"
        />
      }
    />
  )
}

export default Classes
