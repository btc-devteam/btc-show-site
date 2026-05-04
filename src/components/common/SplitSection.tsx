import * as React from 'react'

import { cn } from '@/lib/utils'

export interface SplitSectionProps {
  id?: string
  /**
   * Tailwind background class (e.g. "bg-surface", "bg-lime", "bg-cyan-accent").
   * Defaults to "bg-surface".
   */
  bg?: string
  /**
   * Desktop layout direction. By default the title/body sit on the LEFT and
   * media on the RIGHT. Set `reverseOnDesktop` to flip — media on left,
   * title/body on right.
   */
  reverseOnDesktop?: boolean
  title: React.ReactNode
  body: React.ReactNode
  media: React.ReactNode
  className?: string
}

/**
 * Standard "split" content section that renders pixel-correct on mobile and desktop.
 *
 * Mobile (default, single column):
 *   ┌──────────────────────┐
 *   │  Title (px padding)  │
 *   ├──────────────────────┤
 *   │  Media (full bleed)  │
 *   ├──────────────────────┤
 *   │  Body (px padding)   │
 *   └──────────────────────┘
 *
 * Desktop (lg+, 380px text col + 1fr media col, vertically centered):
 *   ┌──────────┬────────────┐
 *   │ Title    │            │
 *   ├──────────┤   Media    │
 *   │ Body     │            │
 *   └──────────┴────────────┘
 *
 * `reverseOnDesktop` swaps the columns on lg+; mobile order stays the same.
 */
function SplitSection({
  id,
  bg = 'bg-surface',
  reverseOnDesktop = false,
  title,
  body,
  media,
  className,
}: SplitSectionProps) {
  const textCol = reverseOnDesktop ? 'lg:col-start-2' : 'lg:col-start-1'
  const mediaCol = reverseOnDesktop ? 'lg:col-start-1' : 'lg:col-start-2'
  const gridCols = reverseOnDesktop
    ? 'lg:grid-cols-[1fr_380px]'
    : 'lg:grid-cols-[380px_1fr]'

  return (
    <section id={id} className={cn(bg, 'text-black', className)}>
      <div
        className={cn(
          'mx-auto grid max-w-295.5 grid-cols-1 gap-y-6 py-10 lg:items-center lg:gap-x-5 lg:gap-y-4 lg:px-7.5 lg:py-12.5',
          gridCols,
        )}
      >
        <div className={cn('px-7.5 lg:row-start-1 lg:px-0', textCol)}>{title}</div>

        <div className={cn('w-full lg:row-span-2 lg:self-center', mediaCol)}>
          {media}
        </div>

        <div className={cn('px-7.5 lg:row-start-2 lg:px-0', textCol)}>{body}</div>
      </div>
    </section>
  )
}

export { SplitSection }
export default SplitSection
