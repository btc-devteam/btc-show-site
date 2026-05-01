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
}: MediaGridProps) {
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
            <div key={i} className={i >= 2 ? 'hidden lg:block' : ''}>
              <Image
                src={src}
                alt={mainAlt ? `${mainAlt} ${i + 1}` : `Thumbnail ${i + 1}`}
                ratio="3/2"
                placeholderLabel={`Thumb ${i + 1}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export { MediaGrid }
export default MediaGrid
