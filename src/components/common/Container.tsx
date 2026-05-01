import * as React from 'react'

import { cn } from '@/lib/utils'

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  size?: 'default' | 'narrow' | 'wide' | 'full'
  as?: React.ElementType
}

const SIZE_MAP: Record<NonNullable<ContainerProps['size']>, string> = {
  default: 'max-w-[1100px]',
  narrow: 'max-w-[720px]',
  wide: 'max-w-[1280px]',
  full: 'max-w-full',
}

function Container({
  size = 'default',
  as: Tag = 'div',
  className,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn('mx-auto w-full px-6', SIZE_MAP[size], className)}
      {...props}
    />
  )
}

export { Container }
export default Container
