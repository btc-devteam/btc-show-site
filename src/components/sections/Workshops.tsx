import { MediaGrid } from '@/components/common'
import { workshopsContent } from '@/data/workshopsContent'
import type { WorkshopsContent } from '@/types'

interface WorkshopsProps {
  content?: WorkshopsContent
}

function Workshops({ content = workshopsContent }: WorkshopsProps) {
  return (
    <section id="workshops" className="bg-surface text-black">
      <div className="mx-auto flex max-w-295.5 flex-col items-start gap-8 px-6 py-12 lg:flex-row lg:items-center lg:gap-5 lg:px-8 lg:py-16">
        <MediaGrid
          main={content.mainImage}
          thumbnails={content.thumbnails}
          mainAlt="Tuesday's workshop"
          mainPlaceholder="Workshop"
        />

        <div className="flex w-full flex-col gap-3.75 font-helvetica lg:w-95 lg:shrink-0">
          <h2 className="m-0 font-bold tracking-[-2.4px] text-black">
            <span className="block text-[40px] leading-10">Tuesday’s</span>
            <span className="block text-[60px] leading-14 tracking-[-3.6px]">
              Social Media
            </span>
            <span className="block text-[40px] leading-10">
              &amp; Business Workshop
            </span>
          </h2>

          <div className="font-helvetica text-[16px] leading-5.25 tracking-[-0.32px] text-[#242424]">
            <p className="m-0">
              In this full-day Business, AI and Social Media Workshop,{' '}
              <span className="font-bold">
                we tackle the real challenges salon owners and stylists face
                today.
              </span>
            </p>
            <p className="mt-5.25 mb-0">
              We’ll dive into outdated commission models, navigating suite
              rental vs. salon employment, raising prices with confidence,
              leading tough conversations with team members, building a strong
              salon culture, unpredictable income, and turning social media into
              real business growth instead of constant content pressure.
            </p>
            <p className="mt-5.25 mb-0">
              You’ll learn practical strategies to structure a profitable
              business, lead with clarity, streamline operations using AI, and
              build a sustainable career—no matter where you are in your
              journey.
            </p>
            <p className="mt-5.25 mb-0 font-bold">
              This workshop is FREE with Premium Ticket Packages and up! $195
              Value
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workshops
