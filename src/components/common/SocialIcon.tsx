import * as React from 'react'

import { cn } from '@/lib/utils'

export interface SocialIconProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  label: string
}

function SocialIcon({
  href,
  label,
  className,
  children,
  ...rest
}: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center text-current transition-opacity hover:opacity-70',
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  )
}

export { SocialIcon }
export default SocialIcon
