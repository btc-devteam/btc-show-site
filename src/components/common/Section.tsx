import * as React from 'react'

import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  theme?: 'light' | 'dark' | 'muted' | 'gold'
  size?: 'sm' | 'md' | 'lg'
  as?: React.ElementType
}

const THEME_MAP: Record<NonNullable<SectionProps['theme']>, string> = {
  light: 'bg-surface text-foreground',
  dark: 'bg-canvas text-foreground-inverse',
  muted: 'bg-muted text-foreground',
  gold: 'bg-gold text-canvas',
}

const SIZE_MAP: Record<NonNullable<SectionProps['size']>, string> = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-24 md:py-32',
}

function Section({
  theme = 'light',
  size = 'md',
  as: Tag = 'section',
  className,
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn('w-full', THEME_MAP[theme], SIZE_MAP[size], className)}
      {...props}
    />
  )
}

export { Section }
export default Section
