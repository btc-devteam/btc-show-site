import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const typographyVariants = cva('m-0', {
  variants: {
    variant: {
      h2: 'font-helvetica text-center text-black text-[40px] font-bold leading-tight tracking-[-2px] md:text-[58px] md:leading-13 md:tracking-[-2.9px]',
      h3: 'text-black text-center font-helvetica text-2xl font-bold leading-snug tracking-tight md:text-[32px] md:leading-[28px] md:tracking-[-1.92px]',
      h4: 'text-lg font-bold leading-snug',
      bodyLarge:
        'font-helvetica text-center text-[#242424] text-lg font-normal leading-snug tracking-tight md:text-[24px] md:leading-7.5 md:tracking-[-1.2px]',
      body: 'text-black font-helvetica text-[20px] font-medium leading-[28px] tracking-[-1.2px]',
    },
    color: {
      inverse: 'text-foreground-inverse',
      muted: 'text-foreground-muted',
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
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  bodyLarge: 'p',
  body: 'p',
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
