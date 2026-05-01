import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const typographyVariants = cva('m-0', {
  variants: {
    variant: {
      display:
        'font-display text-5xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-none tracking-tighter',
      h2: 'font-helvetica text-center text-black text-[58px] font-bold leading-13 tracking-[-2.9px]',
      h3: 'text-black text-center font-helvetica text-[32px] font-bold leading-[28px] tracking-[-1.92px]',
      h4: 'text-lg font-bold leading-snug',
      subtitle: 'text-base md:text-lg font-semibold leading-normal',
      bodyLarge:
        'font-helvetica text-center text-[#242424] text-[24px] font-normal leading-7.5 tracking-[-1.2px]',
      body: 'text-black font-helvetica text-[20px] font-medium leading-[28px] tracking-[-1.2px]',
      small: 'text-sm leading-normal',
      caption: 'text-xs leading-normal',
      overline: 'text-xs font-bold uppercase tracking-widest leading-normal',
    },
    color: {
      inverse: 'text-foreground-inverse',
      muted: 'text-foreground-muted',
      subtle: 'text-foreground-subtle',
      gold: 'text-gold',
      'gold-light': 'text-gold-light',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
})

const TAG_MAP = {
  display: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subtitle: 'p',
  bodyLarge: 'p',
  body: 'p',
  small: 'p',
  caption: 'span',
  overline: 'span',
} as const

type Variant = keyof typeof TAG_MAP

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'color'>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
}

function Typography({
  variant = 'body',
  color,
  align,
  as,
  className,
  ...props
}: TypographyProps) {
  const Tag = (as ||
    TAG_MAP[(variant ?? 'body') as Variant] ||
    'p') as React.ElementType
  return (
    <Tag
      className={cn(typographyVariants({ variant, color, align }), className)}
      {...props}
    />
  )
}

export { Typography }
export default Typography
