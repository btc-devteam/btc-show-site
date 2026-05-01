import { MediaGrid } from '@/components/common'
import { classesContent } from '@/data/classesContent'
import type { ClassesContent } from '@/types'

interface ClassesProps {
  content?: ClassesContent
}

function Classes({ content = classesContent }: ClassesProps) {
  return (
    <section id="classes" className="bg-lime text-black">
      <div className="mx-auto flex max-w-295.5 flex-col items-start gap-8 px-6 py-12 lg:flex-row lg:items-center lg:gap-5 lg:px-8 lg:py-12.5">
        <div className="flex w-full flex-col gap-3.75 font-helvetica lg:w-95 lg:shrink-0">
          <h2 className="m-0 font-bold tracking-[-2.4px] text-black">
            <span className="block text-[40px] leading-10">
              75+ Look &amp; Learn
            </span>
            <span className="block">
              <span className="text-[40px] leading-10">and Hands-on </span>
              <span className="text-[64px] leading-14 tracking-[-3.84px]">
                Classes
              </span>
            </span>
          </h2>

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
        </div>

        <MediaGrid
          main={content.mainImage}
          thumbnails={content.thumbnails}
          mainAlt="BTC Show classes"
          mainPlaceholder="Classes"
        />
      </div>
    </section>
  )
}

export default Classes
