import { MediaGrid } from '@/components/common'
import { connectionCenterContent } from '@/data/connectionCenterContent'
import type { ConnectionCenterContent } from '@/types'

interface ConnectionCenterProps {
  content?: ConnectionCenterContent
}

function ConnectionCenter({
  content = connectionCenterContent,
}: ConnectionCenterProps) {
  return (
    <section id="connection-center" className="bg-cyan-accent text-black">
      <div className="mx-auto flex max-w-295.5 flex-col items-start gap-8 px-6 py-12 lg:flex-row lg:items-center lg:gap-5 lg:px-8 lg:py-12.5">
        <div className="flex w-full flex-col gap-3.75 font-helvetica lg:w-95 lg:shrink-0">
          <h2 className="m-0 font-bold tracking-[-2.4px] text-black">
            <span className="text-[40px] leading-10">The BTC </span>
            <span className="text-[65px] leading-14.5 tracking-[-3.9px]">
              Connection
            </span>{' '}
            <span className="text-[55px] leading-13 tracking-[-3.3px]">
              Center
            </span>
          </h2>

          <div className="font-helvetica text-[16px] leading-5.25 tracking-[-0.32px] text-[#242424]">
            <p className="m-0">
              The BTC Connection Center is where the world’s best
              brands—especially prestige brands—show up.{' '}
              <span className="font-bold">
                These are the brands you won’t see anywhere else!
              </span>{' '}
              Meet and learn from brand founders and top artists who are
              unveiling new launches and new techniques you’ll see at BTC first!
              This is an intimate environment where you can ask questions, see
              every detail and connect face-to-face with the people shaping the
              industry.
            </p>
            <p className="mt-5.25 mb-0">
              At the center of it all, the BTC lounge streams the Main Stage
              live on a massive LED screen, surrounded by sofas, cocktails and
              space designed for real connection.
            </p>
          </div>
        </div>

        <MediaGrid
          main={content.mainImage}
          thumbnails={content.thumbnails}
          mainAlt="BTC Connection Center"
          mainPlaceholder="Connection Center"
        />
      </div>
    </section>
  )
}

export default ConnectionCenter
