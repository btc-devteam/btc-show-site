import { Image } from '@/components/common'
import { anticipatedContent } from '@/data/anticipatedContent'
import type { AnticipatedContent } from '@/types'

interface AnticipatedSectionProps {
  content?: AnticipatedContent
}

function AnticipatedSection({
  content = anticipatedContent,
}: AnticipatedSectionProps) {
  return (
    <section id="anticipated" className="bg-cyan-accent text-black">
      <div className="mx-auto grid max-w-295.5 grid-cols-1 gap-y-6 py-10 lg:grid-cols-[380px_1fr] lg:items-center lg:gap-x-5 lg:gap-y-4 lg:px-7.5 lg:py-12.5">
        <h2 className="m-0 px-7.5 font-helvetica font-bold tracking-[-1.5px] lg:col-start-1 lg:row-start-1 lg:px-0 lg:tracking-[-2.4px]">
          <span className="block text-3xl leading-tight md:text-[40px] md:leading-10">
            {content.title.pre}
          </span>
          <span className="block text-[44px] leading-10 tracking-[-1.76px] md:text-[60px] md:leading-14 md:tracking-[-3.6px]">
            {content.title.emphasis}
          </span>
          <span className="block text-2xl leading-tight md:text-[36px] md:leading-10 md:tracking-[-2.16px]">
            {content.title.post}
          </span>
        </h2>

        <div className="w-full lg:col-start-2 lg:row-span-2 lg:self-center">
          <Image
            src={content.imageSrc || '/images/Anticipated.png'}
            alt={content.imageAlt}
            ratio="3/2"
            placeholderLabel="Stage Photo"
          />
        </div>

        <div className="flex flex-col gap-4 px-7.5 font-helvetica text-[16px] leading-5.25 tracking-[-0.32px] text-[#242424] lg:col-start-1 lg:row-start-2 lg:px-0">
          <div>
            <p className="m-0 font-bold">{content.lead}</p>
            <p className="m-0">{content.paragraphs[0]}</p>
          </div>
          {content.paragraphs.slice(1).map((para, i) => (
            <p key={i} className="m-0">
              {para}
            </p>
          ))}
          <ul className="m-0 list-disc space-y-0 pl-5 marker:text-[#242424]">
            {content.bullets.map((bullet, i) => (
              <li key={i} className="leading-5.25">
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AnticipatedSection
