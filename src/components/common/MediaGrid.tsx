// import { useEffect, useState } from 'react'
import { Play } from 'lucide-react'

import { Image } from '@/components/common/Image'
import { cn } from '@/lib/utils'

export interface MediaGridProps {
  main: string
  thumbnails?: string[]
  mainAlt?: string
  mainRatio?: string
  mainPlaceholder?: string
  hasVideo?: boolean
  onPlay?: () => void
  videoLabel?: string
  className?: string
  /**
   * Number of thumbnails visible on mobile. Defaults to 2 (matches Figma 2-up).
   * Desktop always shows all thumbnails in a 4-column grid.
   */
  mobileThumbCount?: number
}

function MediaGrid({
  main,
  thumbnails = [],
  mainAlt = '',
  mainRatio = '3/2',
  mainPlaceholder = 'Image',
  hasVideo = false,
  onPlay,
  videoLabel = 'Play video',
  className,
  mobileThumbCount = 2,
}: MediaGridProps) {
  /* ---------------------------------------------------------------------------
   * Click-to-swap gallery feature — DISABLED
   *
   * Re-enabling: uncomment the import + the block below, replace `main` in the
   * <Image src={...} /> below with `displayedSrc`, replace `hasVideo` with
   * `showVideoOverlay` for the play button, and replace each thumbnail <div>
   * with the <button> rendering further down (also commented).
   *
   * Reason for disable: thumbnail source files are exported at ~192×130 from
   * Figma. When swapped into the 780×520 big slot they scaled up ~4× and
   * looked blurry. Swap can be re-enabled once high-resolution thumbnail
   * assets are in place.
   * ------------------------------------------------------------------------ */
  // const [activeIndex, setActiveIndex] = useState<number | null>(null)
  //
  // useEffect(() => {
  //   setActiveIndex(null)
  // }, [main, thumbnails])
  //
  // const displayedSrc =
  //   activeIndex !== null && thumbnails[activeIndex]
  //     ? thumbnails[activeIndex]
  //     : main
  // const showVideoOverlay = hasVideo && activeIndex === null

  return (
    <div className={cn('flex w-full flex-col gap-2.5 lg:flex-1', className)}>
      <div className="relative">
        <Image
          src={main}
          alt={mainAlt}
          ratio={mainRatio}
          placeholderLabel={mainPlaceholder}
        />
        {hasVideo && (
          <button
            type="button"
            aria-label={videoLabel}
            onClick={onPlay}
            className="absolute left-1/2 top-1/2 flex size-15.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-cyan-accent bg-black/50 text-cyan-accent backdrop-blur-sm transition-transform hover:scale-110"
          >
            <Play size={22} className="ml-1 fill-cyan-accent" strokeWidth={0} />
          </button>
        )}
      </div>

      {thumbnails.length > 0 && (
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {thumbnails.map((src, i) => (
            <div
              key={i}
              className={cn(i >= mobileThumbCount && 'hidden lg:block')}
            >
              <Image
                src={src}
                alt={mainAlt ? `${mainAlt} ${i + 1}` : `Thumbnail ${i + 1}`}
                ratio="3/2"
                placeholderLabel={`Thumb ${i + 1}`}
              />
            </div>
            /* Click-to-swap version (disabled — see top of file)
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i === activeIndex ? null : i)}
              aria-label={`View image ${i + 1}`}
              aria-pressed={i === activeIndex}
              className={cn(
                'block w-full cursor-pointer border-0 bg-transparent p-0 transition-all',
                i === activeIndex
                  ? 'opacity-100 outline-2 outline-offset-2 outline-foreground'
                  : 'opacity-85 hover:opacity-100',
                i >= mobileThumbCount && 'hidden lg:block',
              )}
            >
              <Image
                src={src}
                alt={mainAlt ? `${mainAlt} ${i + 1}` : `Thumbnail ${i + 1}`}
                ratio="3/2"
                placeholderLabel={`Thumb ${i + 1}`}
              />
            </button>
            */
          ))}
        </div>
      )}
    </div>
  )
}

export { MediaGrid }
export default MediaGrid
