import * as React from 'react'

import { cn } from '@/lib/utils'

export interface VideoPlayerProps
  extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'src'> {
  src?: string
  poster?: string
  ratio?: string
  fit?: 'cover' | 'contain'
  className?: string
  placeholderLabel?: string
}

function VideoPlayer({
  src,
  poster,
  ratio,
  fit = 'cover',
  controls = true,
  autoPlay = false,
  muted = false,
  loop = false,
  playsInline = true,
  className,
  placeholderLabel = 'Video',
  ...rest
}: VideoPlayerProps) {
  const hasSrc = Boolean(src)
  const wrapperStyle: React.CSSProperties | undefined = ratio
    ? { aspectRatio: ratio }
    : undefined

  return (
    <div
      style={wrapperStyle}
      className={cn(
        'relative w-full overflow-hidden bg-canvas',
        !ratio && 'h-full',
        !hasSrc &&
          'flex min-h-[220px] items-center justify-center text-neutral-500 [background:radial-gradient(circle_at_50%_50%,#1a1a1a,#000)]',
        className,
      )}
    >
      {hasSrc ? (
        <video
          src={src}
          poster={poster}
          controls={controls}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline={playsInline}
          className="block h-full w-full"
          style={{ objectFit: fit }}
          {...rest}
        />
      ) : (
        <span className="text-xs font-semibold uppercase tracking-widest">
          {placeholderLabel}
        </span>
      )}
    </div>
  )
}

export { VideoPlayer }
export default VideoPlayer
