import { Star, Quote } from 'lucide-react'

import { testimonials as defaultTestimonials } from '@/data/testimonials'
import type { Testimonial } from '@/types'

interface TestimonialsProps {
  items?: Testimonial[]
  title?: string
}

function Testimonials({
  items = defaultTestimonials,
  title = 'In Your Words...',
}: TestimonialsProps) {
  // Duplicate the list for seamless marquee loop
  const looped = [...items, ...items]

  return (
    <section
      aria-label="Testimonials"
      className="relative overflow-hidden bg-pink-accent py-8 md:py-12"
    >
      <h2 className="m-0 mb-6 px-7.5 font-helvetica text-4xl font-bold leading-tight tracking-[-1.5px] text-black md:mb-10 md:px-0 md:text-center md:text-[48px] md:leading-14 md:tracking-[-2.88px]">
        {title}
      </h2>

      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee-x gap-7">
          {looped.map((t, i) => (
            <TestimonialCard
              key={`${t.id}-${i}`}
              testimonial={t}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex h-58.75 w-75 shrink-0 flex-col justify-between rounded-lg border border-[#242424] bg-white p-3.75">
      <div className="flex flex-col gap-2">
        <Quote
          aria-hidden="true"
          className="size-5 fill-black text-black"
          strokeWidth={0}
        />
        <p className="m-0 font-helvetica text-[17px] font-light leading-6 tracking-[-0.51px] text-black">
          {testimonial.quote}
          <span aria-hidden="true">&nbsp;”</span>
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={20}
              strokeWidth={0}
              className="fill-cyan-accent"
            />
          ))}
        </div>
        <p className="m-0 font-helvetica text-[14px] font-bold uppercase text-[#242424]">
          {testimonial.author}
        </p>
      </div>
    </article>
  )
}

export default Testimonials
