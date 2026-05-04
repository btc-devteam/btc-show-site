import type { NavLink } from '@/types'
import { cn } from '@/lib/utils'

interface LinkRowProps {
  links: NavLink[]
  className?: string
}

function LinkRow({ links, className }: LinkRowProps) {
  return (
    <nav
      aria-label="Footer"
      className={cn(
        'flex flex-col items-start gap-y-1.5 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-x-6 md:gap-y-2',
        className,
      )}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-[15px] font-medium uppercase tracking-wider text-foreground no-underline transition-opacity hover:opacity-70 hover:underline md:text-xs md:font-semibold"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default LinkRow
