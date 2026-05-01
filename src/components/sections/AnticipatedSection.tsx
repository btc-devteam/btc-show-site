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
      <div className="mx-auto flex max-w-295.5 flex-col items-center gap-8 px-6 py-12 lg:flex-row lg:items-center lg:gap-5 lg:px-8 lg:py-11.5">
        <div className="flex w-full flex-col gap-3.75 font-helvetica lg:w-95 lg:shrink-0">
          <h2 className="m-0 font-bold tracking-[-2.4px]">
            <span className="block text-[40px] leading-10">
              {content.title.pre}
            </span>
            <span className="block text-[60px] leading-14 tracking-[-3.6px]">
              {content.title.emphasis}
            </span>
            <span className="block text-[36px] leading-10 tracking-[-2.16px]">
              {content.title.post}
            </span>
          </h2>

          <div className="flex flex-col gap-5.25 text-[16px] leading-5.25 tracking-[-0.32px] text-[#242424]">
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

        <div className="w-full lg:flex-1">
          <Image
            src={content.imageSrc || '/images/Anticipated.png'}
            alt={content.imageAlt}
            ratio="3/2"
            placeholderLabel="Stage Photo"
          />
        </div>
      </div>
    </section>
  )
}

export default AnticipatedSection
