import './Footer.css'

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <a
          href="https://instagram.com/behindthechair_com"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="social-icon"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </a>

        <h3 className="signup-heading">Sign Up to Receive Email Updates!</h3>

        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            aria-label="Email address"
            required
          />
          <button type="submit">Sign Up</button>
        </form>

        <nav className="footer-links">
          <a href="#faq">FAQ</a>
          <a href="#privacy">PRIVACY POLICY</a>
          <a href="#terms">TERMS OF SERVICE</a>
          <a href="#media">MEDIA RELEASE</a>
          <a href="#policies">EVENT POLICIES</a>
          <a href="#cookies">COOKIE SETTINGS</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
