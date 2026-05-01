import { MediaGrid } from '@/components/common'
import { oneShotAwardsContent } from '@/data/oneShotAwardsContent'
import type { OneShotAwardsContent } from '@/types'

interface OneShotAwardsProps {
  content?: OneShotAwardsContent
}

function OneShotAwards({ content = oneShotAwardsContent }: OneShotAwardsProps) {
  return (
    <section id="oneshot-awards" className="bg-surface text-black">
      <div className="mx-auto flex max-w-295.5 flex-col items-start gap-8 px-6 py-12 lg:flex-row lg:items-center lg:gap-5 lg:px-8 lg:py-16">
        <div className="flex w-full flex-col gap-3.75 font-helvetica lg:w-95 lg:shrink-0">
          <h2 className="m-0 font-bold tracking-[-2.4px] text-black">
            <span className="block text-[60px] leading-14 tracking-[-3.6px]">
              #ONESHOT
            </span>
            <span className="block text-[40px] leading-10">
              Global Hair Awards
            </span>
          </h2>

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
        </div>

        <MediaGrid
          main={content.mainImage}
          thumbnails={content.thumbnails}
          mainAlt="#ONESHOT Global Hair Awards"
          mainPlaceholder="#ONESHOT Awards"
          mainRatio="16/9"
          hasVideo={content.hasVideo}
          videoLabel="Play #ONESHOT Awards highlight"
        />
      </div>
    </section>
  )
}

export default OneShotAwards
