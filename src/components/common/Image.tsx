import * as React from 'react'

import { cn } from '@/lib/utils'

export interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  ratio?: string
  fit?: 'cover' | 'contain'
  rounded?: boolean
  placeholderLabel?: string
}

function Image({
  src,
  alt = '',
  ratio,
  fit = 'cover',
  rounded = false,
  placeholderLabel,
  className,
  style,
  ...props
}: ImageProps) {
  const hasSrc = Boolean(src)
  const wrapperStyle: React.CSSProperties = {
    ...(ratio ? { aspectRatio: ratio } : {}),
    ...style,
  }

  return (
    <div
      style={wrapperStyle}
      className={cn(
        'relative h-full w-full overflow-hidden bg-neutral-900',
        rounded && 'rounded-xl',
        !hasSrc &&
          'flex min-h-[180px] items-center justify-center text-neutral-500 [background:repeating-linear-gradient(45deg,#1c1c1c_0,#1c1c1c_12px,#232323_12px,#232323_24px)]',
        className,
      )}
      {...props}
    >
      {hasSrc ? (
        <img
          src={src}
          alt={alt}
          className="block h-full w-full"
          style={{ objectFit: fit }}
        />
      ) : (
        <span className="text-xs font-semibold uppercase tracking-widest">
          {placeholderLabel || alt || 'Image'}
        </span>
      )}
    </div>
  )
}

export { Image }
export default Image
