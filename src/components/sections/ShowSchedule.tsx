import { Play } from 'lucide-react'

import { Container, Image, Section } from '@/components/common'
import { showSchedule, showScheduleVideoImage } from '@/data/showSchedule'
import type { ShowScheduleDay } from '@/types'

interface ShowScheduleProps {
  days?: ShowScheduleDay[]
  title?: string
  videoImage?: string
}

function ShowSchedule({
  days = showSchedule,
  title = 'Show Schedule',
  videoImage = showScheduleVideoImage,
}: ShowScheduleProps) {
  return (
    <Section id="schedule" theme="light" size="md">
      <Container>
        <h2 className="m-0 mb-6 text-center font-helvetica text-4xl font-bold leading-tight tracking-[-2px] text-black md:mb-10 md:text-[58px] md:leading-14 md:tracking-[-3.48px]">
          {title}
        </h2>

        {/* Mobile-only schedule video preview */}
        <div className="relative mb-8 lg:hidden">
          <Image
            src={videoImage}
            alt="Schedule preview"
            ratio="3/2"
            placeholderLabel="Schedule preview"
          />
          <button
            type="button"
            aria-label="Play schedule preview"
            className="absolute left-1/2 top-1/2 flex size-17 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-cyan-accent bg-black/50 text-cyan-accent backdrop-blur-sm transition-transform hover:scale-110"
          >
            <Play size={24} className="ml-1 fill-cyan-accent" strokeWidth={0} />
          </button>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-8 md:max-w-3xl md:grid-flow-col md:grid-cols-2 md:grid-rows-2">
          {days.map((day) => (
            <div key={day.id} className="font-helvetica">
              <h3 className="m-0 mb-3 text-[17px] font-medium uppercase leading-6 tracking-[-0.51px] text-black">
                {day.label}
              </h3>
              <ul className="m-0 list-none p-0">
                {day.items.map((item, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[max-content_1fr] items-baseline gap-x-4"
                  >
                    <span className="text-[14px] font-bold uppercase leading-5.5 tracking-[-0.42px] text-[#444]">
                      {item.time}
                    </span>
                    <span className="text-[16px] font-normal leading-5.5 tracking-[-0.32px] text-[#242424]">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default ShowSchedule
