import type { PartiesContent } from '@/types'

export const partiesContent: PartiesContent = {
  title: {
    line1: 'Work Hard.',
    line2: 'Play Hard.',
  },
  description:
    'From the show floor to the dance floor, we throw parties that are just as legendary as the education.',
  heroImage: '../../../public/images/work-hard.png',
  events: [
    {
      id: 'pool',
      title: 'The Pool Party',
      day: 'Saturday',
      description:
        'Legendary for a reason. Umbrella drinks, questionable inflatables, crazy games, and nobody saw a thing!',
      imageSrc: '../../../public/images/the-pool-party.png',
      hasVideo: true,
    },
    {
      id: 'one',
      title: 'Party of “One”',
      day: 'Saturday',
      description:
        'Meet others whose dreams—just like yours—outgrew the rooms they were in. Our Party of “One” mixer takes place early Saturday evening to give you a chance to connect with big dreamers who also came alone.',
      imageSrc: '../../../public/images/party-of-one.png',
      hasVideo: false,
    },
    {
      id: 'theme',
      title: 'Theme Party',
      day: 'Sunday',
      description:
        'Beyond the door, the night begins, where time bends softly and play steps in. The world you knew is left outside, as something magical waits just inside.',
      imageSrc: '',
      hasVideo: true,
    },
  ],
}

export default partiesContent
