import { MediaGrid, SplitSection } from '@/components/common'
import { oneShotAwardsContent } from '@/data/oneShotAwardsContent'
import type { OneShotAwardsContent } from '@/types'

interface OneShotAwardsProps {
  content?: OneShotAwardsContent
}

function OneShotAwards({ content = oneShotAwardsContent }: OneShotAwardsProps) {
  return (
    <SplitSection
      id="oneshot-awards"
      bg="bg-surface"
      title={
        <h2 className="m-0 font-helvetica font-bold tracking-[-1.5px] lg:tracking-[-2.4px]">
          <span className="block text-[40px] leading-10 tracking-[-1.6px] md:text-[60px] md:leading-14 md:tracking-[-3.6px]">
            #ONESHOT
          </span>
          <span className="block text-2xl leading-tight md:text-[40px] md:leading-10">
            Global Hair Awards
          </span>
        </h2>
      }
      body={
        <p className="m-0 font-helvetica text-[16px] leading-5.25 tracking-[-0.32px] text-[#242424]">
          The #ONESHOT Global Hair Awards is the largest and most prestigious
          hair competition in the world! In just over a decade, more than 2.5
          million images have been submitted from artists in over 120
          countries, making this the definitive global stage for the best in
          the world! The night brings together finalists from more than 30
          countries beginning with an unforgettable 2-hour cocktail party and
          then the awards show begins. The lights go down. The energy
          explodes.{' '}
          <span className="font-bold">
            And we honor the hard work, the courage and the artistry that
            define the very best in hair.
          </span>
        </p>
      }
      media={
        <MediaGrid
          main={content.mainImage}
          thumbnails={content.thumbnails}
          mainAlt="#ONESHOT Global Hair Awards"
          mainPlaceholder="#ONESHOT Awards"
          mainRatio="3/2"
          hasVideo={content.hasVideo}
          videoLabel="Play #ONESHOT Awards highlight"
        />
      }
    />
  )
}

export default OneShotAwards
