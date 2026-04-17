import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>&copy; {year} Behind The Chair. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://behindthechair.com" target="_blank" rel="noreferrer">behindthechair.com</a>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
