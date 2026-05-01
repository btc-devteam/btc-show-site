import { Container, Section } from '@/components/common'
import { showSchedule } from '@/data/showSchedule'
import type { ShowScheduleDay } from '@/types'

interface ShowScheduleProps {
  days?: ShowScheduleDay[]
  title?: string
}

function ShowSchedule({
  days = showSchedule,
  title = 'Show Schedule',
}: ShowScheduleProps) {
  return (
    <Section id="schedule" theme="light" size="md">
      <Container>
        <h2 className="m-0 mb-10 text-center font-helvetica text-[58px] font-bold leading-14 tracking-[-3.48px] text-black">
          {title}
        </h2>

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
