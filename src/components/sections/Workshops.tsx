import { MediaGrid, SplitSection } from '@/components/common'
import { workshopsContent } from '@/data/workshopsContent'
import type { WorkshopsContent } from '@/types'

interface WorkshopsProps {
  content?: WorkshopsContent
}

function Workshops({ content = workshopsContent }: WorkshopsProps) {
  return (
    <SplitSection
      id="workshops"
      bg="bg-surface"
      reverseOnDesktop
      title={
        <h2 className="m-0 font-helvetica font-bold tracking-[-1.5px] lg:tracking-[-2.4px]">
          <span className="block text-3xl leading-tight md:text-[40px] md:leading-10">
            Tuesday’s
          </span>
          <span className="block text-[44px] leading-10 tracking-[-1.76px] md:text-[60px] md:leading-14 md:tracking-[-3.6px]">
            Social Media
          </span>
          <span className="block text-2xl leading-tight md:text-[40px] md:leading-10">
            &amp; Business Workshop
          </span>
        </h2>
      }
      body={
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
      }
      media={
        <MediaGrid
          main={content.mainImage}
          thumbnails={content.thumbnails}
          mainAlt="Tuesday social media and business workshop"
          mainPlaceholder="Workshop"
        />
      }
    />
  )
}

export default Workshops
