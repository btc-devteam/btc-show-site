import { MediaGrid, SplitSection } from '@/components/common'
import { connectionCenterContent } from '@/data/connectionCenterContent'
import type { ConnectionCenterContent } from '@/types'

interface ConnectionCenterProps {
  content?: ConnectionCenterContent
}

function ConnectionCenter({
  content = connectionCenterContent,
}: ConnectionCenterProps) {
  return (
    <SplitSection
      id="connection-center"
      bg="bg-cyan-accent"
      title={
        <h2 className="m-0 font-helvetica font-bold tracking-[-1.5px] lg:tracking-[-2.4px]">
          <span className="block text-3xl leading-tight md:inline md:text-[40px] md:leading-10">
            The BTC{' '}
          </span>
          <span className="block text-[44px] leading-10 tracking-[-1.76px] md:inline md:text-[65px] md:leading-14.5 md:tracking-[-3.9px]">
            Connection
          </span>{' '}
          <span className="block text-[36px] leading-10 tracking-[-1.5px] md:inline md:text-[55px] md:leading-13 md:tracking-[-3.3px]">
            Center
          </span>
        </h2>
      }
      body={
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
      }
      media={
        <MediaGrid
          main={content.mainImage}
          thumbnails={content.thumbnails}
          mainAlt="BTC Connection Center"
          mainPlaceholder="Connection Center"
        />
      }
    />
  )
}

export default ConnectionCenter
