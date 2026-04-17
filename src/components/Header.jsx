import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="brand">The BTC Show</a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#schedule">Schedule</a>
          <a href="#tickets">Tickets</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
