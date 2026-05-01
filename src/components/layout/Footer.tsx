import { Container, SocialIcon, InstagramIcon } from '@/components/common'
import EmailSignup from '@/components/sections/EmailSignup'
import LinkRow from '@/components/sections/LinkRow'
import { footerLinks } from '@/data/footerLinks'
import { siteConfig } from '@/data/siteConfig'

function Footer() {
  return (
    <footer className="mt-auto bg-muted text-foreground">
      <Container className="flex flex-col items-center gap-6 py-12 text-center md:py-16">
        <SocialIcon href={siteConfig.social.instagram} label="Instagram">
          <InstagramIcon size={28} />
        </SocialIcon>

        <EmailSignup />

        <LinkRow links={footerLinks} className="mt-2" />

        <p className="text-xs text-foreground-muted">
          © {new Date().getFullYear()} {siteConfig.brand}. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
