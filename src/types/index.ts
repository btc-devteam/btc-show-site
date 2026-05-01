export type CtaLink = {
  label: string
  href: string
}

export type NavLink = {
  label: string
  href: string
}

export type SiteConfig = {
  brand: string
  tagline: string
  social: {
    instagram: string
  }
}

export type HeroContent = {
  videoSrc: string
  imageSrc: string
  hookup: string
  cta: CtaLink
}

export type MissionContent = {
  title: string
  paragraphs: string[]
}

export type OnSaleContent = {
  heading: string
  subheading: string
  cta: CtaLink
  fineprint: string
}

export type AnticipatedContent = {
  title: {
    pre: string
    emphasis: string
    post: string
  }
  lead: string
  paragraphs: string[]
  bullets: string[]
  imageSrc: string
  imageAlt: string
}

export type ShowScheduleItem = {
  time: string
  title: string
}

export type ShowScheduleDay = {
  id: string
  label: string
  items: ShowScheduleItem[]
}

export type Testimonial = {
  id: string
  quote: string
  author: string
}

export type MainstageContent = {
  title: {
    line1: string
    line2: string
    line3: string
  }
  body: {
    intro: string
    bold: string
    rest: string
  }
  mainImage: string
  thumbnails: string[]
}

export type PartyEvent = {
  id: string
  title: string
  day: string
  description: string
  imageSrc: string
  hasVideo?: boolean
}

export type PartiesContent = {
  title: {
    line1: string
    line2: string
  }
  description: string
  heroImage: string
  events: PartyEvent[]
}

export type RichSpan = { text: string; bold?: boolean }

export type ImageWithThumbnails = {
  main: string
  thumbnails: string[]
}

export type ClassesContent = {
  mainImage: string
  thumbnails: string[]
}

export type WorkshopsContent = {
  mainImage: string
  thumbnails: string[]
}

export type ConnectionCenterContent = {
  mainImage: string
  thumbnails: string[]
}

export type BrandsContent = {
  logoGridImage: string
}

export type OneShotAwardsContent = {
  mainImage: string
  thumbnails: string[]
  hasVideo: boolean
}

export type GoodyBagContent = {
  image: string
}

export type HotelContent = {
  mainImage: string
  thumbnails: string[]
  cta: CtaLink
}

export type TicketPackage = {
  id: string
  name: string
  price: string
  oldPrice?: string
  valueText: string
  promoCode?: string
  badge?: string
  features: RichSpan[]
  footnote?: string
  finalNote?: string
  cta: CtaLink
}

export type ChooseYourTicketContent = {
  packages: TicketPackage[]
  browseAllCta: CtaLink
}

export type PromoContent = {
  brand: string
  titleLines: string[]
  subtitle: string
  body: string[]
  callout: string
  fineprint: string[]
  logo:string
}
