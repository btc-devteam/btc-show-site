'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { Container, Typography } from '@/components/common'
import { Button } from '@/components/ui/button'
import { primaryNav } from '@/data/navigation'
import { siteConfig } from '@/data/siteConfig'
import { cn } from '@/lib/utils'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors duration-300',
        scrolled
          ? 'border-white/10 bg-canvas/80 backdrop-blur-md'
          : 'border-transparent bg-canvas',
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <a href="/" className="no-underline">
          <Typography variant="h4" color="inverse">
            {siteConfig.brand}
          </Typography>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground-subtle no-underline transition-colors hover:text-foreground-inverse"
            >
              {item.label}
            </a>
          ))}
          <Button asChild variant="gold" size="sm">
            <a href="#tickets">Get Tickets</a>
          </Button>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="text-foreground-inverse md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-white/10 bg-canvas md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-foreground-subtle no-underline transition-colors hover:bg-white/5 hover:text-foreground-inverse"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              variant="gold"
              size="sm"
              className="mt-2 w-full"
            >
              <a href="#tickets" onClick={() => setOpen(false)}>
                Get Tickets
              </a>
            </Button>
          </Container>
        </nav>
      )}
    </header>
  )
}

export default Header
