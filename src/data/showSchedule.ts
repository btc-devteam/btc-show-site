import type { ShowScheduleDay } from '@/types'

export const showSchedule: ShowScheduleDay[] = [
  {
    id: 'sat',
    label: 'Saturday, August 22',
    items: [
      { time: '1:00PM–6:00PM', title: 'Registration' },
      { time: '2:00PM–6:00PM', title: 'Pool Party' },
      { time: '6:00PM–7:30PM', title: 'Party of "One" Party' },
      { time: '8:00PM–10:00PM', title: '#ONESHOT Finalist Party' },
    ],
  },
  {
    id: 'sun',
    label: 'Sunday, August 23',
    items: [
      { time: '6:30AM–4:00PM', title: 'Registration' },
      { time: '9:30AM–5:00PM', title: 'Connection Center' },
      { time: '9:00AM–5:00PM', title: 'Mainstage Education' },
      { time: '9:00AM–5:00PM', title: 'Look & Learn Classes' },
      { time: '9:00AM–5:00PM', title: 'Hands-On Classes' },
      { time: '8:00PM–11:00PM', title: 'BTC Theme Party' },
    ],
  },
  {
    id: 'mon',
    label: 'Monday, August 24',
    items: [
      { time: '9:00AM–5:00PM', title: 'Connection Center' },
      { time: '9:00AM–4:00PM', title: 'Mainstage Education' },
      { time: '9:00AM–4:00PM', title: 'Look & Learn Classes' },
      { time: '9:00AM–4:00PM', title: 'Hands-On Classes' },
      { time: '6:30PM–11:00PM', title: '#ONESHOT Hair Awards' },
    ],
  },
  {
    id: 'tue',
    label: 'Tuesday, August 25',
    items: [
      { time: '10:00AM–3:00PM', title: 'Social Media and Business Workshop' },
    ],
  },
]

export default showSchedule
