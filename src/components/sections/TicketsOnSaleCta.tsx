import { Container, Typography } from '@/components/common'
import { Button } from '@/components/ui/button'
import { onSaleContent } from '@/data/onSaleContent'
import type { OnSaleContent } from '@/types'

interface TicketsOnSaleCtaProps {
  content?: OnSaleContent
}

function TicketsOnSaleCta({ content = onSaleContent }: TicketsOnSaleCtaProps) {
  return (
    <section className="bg-surface pb-12 md:pb-16">
      <Container className="flex flex-col items-center gap-2.5 text-center">
        <Typography variant="h3">{content.heading}</Typography>
        <Typography variant="body" color="muted">
          {content.subheading}
        </Typography>
        <Button
          asChild
          variant="lime"
          className="mt-1.5 h-18.5 w-62.5 rounded-md font-helvetica text-[32px] font-bold normal-case leading-none tracking-[-1.28px]"
        >
          <a href={content.cta.href}>{content.cta.label}</a>
        </Button>
        <p className="mt-1 font-helvetica text-[14px] leading-4 tracking-[-0.28px] text-[#242424]">
          {content.fineprint}
        </p>
      </Container>
    </section>
  )
}

export default TicketsOnSaleCta
