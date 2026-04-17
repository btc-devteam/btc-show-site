import './Home.css'

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <h1>The BTC Show 2026</h1>
        <p className="tagline">The premier event for the professional hair community.</p>
        <div className="cta">
          <a className="btn primary" href="#tickets">Get Tickets</a>
          <a className="btn secondary" href="#schedule">View Schedule</a>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About the Show</h2>
        <p>
          Join thousands of stylists, educators, and industry leaders for three days of
          education, inspiration, and connection.
        </p>
      </section>

      <section id="schedule" className="section alt">
        <h2>Schedule</h2>
        <ul className="schedule-list">
          <li><strong>Day 1</strong> — Main Stage & Opening Night</li>
          <li><strong>Day 2</strong> — Classes & Workshops</li>
          <li><strong>Day 3</strong> — Awards & After Party</li>
        </ul>
      </section>

      <section id="tickets" className="section">
        <h2>Tickets</h2>
        <p>Early bird pricing available now.</p>
      </section>
    </main>
  )
}

export default Home
