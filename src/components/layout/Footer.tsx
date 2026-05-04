import { Container, SocialIcon, InstagramIcon } from '@/components/common'
import EmailSignup from '@/components/sections/EmailSignup'
import LinkRow from '@/components/sections/LinkRow'
import { footerLinks } from '@/data/footerLinks'
import { siteConfig } from '@/data/siteConfig'

function Footer() {
  return (
    <footer className="mt-auto bg-muted text-foreground">
      <Container className="flex flex-col items-start gap-8 py-10 text-left md:items-center md:gap-6 md:py-16 md:text-center">
        <SocialIcon href={siteConfig.social.instagram} label="Instagram">
          <InstagramIcon size={28} />
        </SocialIcon>

        <EmailSignup />

        <LinkRow links={footerLinks} className="md:mt-2" />

        <p className="m-0 text-xs text-foreground-muted">
          © {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
