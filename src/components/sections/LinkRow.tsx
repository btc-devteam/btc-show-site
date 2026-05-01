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
        'flex flex-wrap justify-center gap-x-6 gap-y-2',
        className,
      )}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-xs font-semibold uppercase tracking-wider text-foreground no-underline transition-opacity hover:opacity-70 hover:underline"
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default LinkRow
