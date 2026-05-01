import {
  Hero,
  CountdownTimer,
  Mission,
  TicketsOnSaleCta,
  AnticipatedSection,
  ShowSchedule,
  Testimonials,
  Mainstage,
  Classes,
  Workshops,
  ConnectionCenter,
  Brands,
  Parties,
  OneShotAwards,
  GoodyBag,
  Hotel,
  ChooseYourTicket,
} from '@/components/sections'

function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <CountdownTimer />
      <Mission />
      <TicketsOnSaleCta />
      <AnticipatedSection />
      <ShowSchedule />
      <Testimonials />
      <Mainstage />
      <Classes />
      <Workshops />
      <ConnectionCenter />
      <Brands />
      <Parties />
      <OneShotAwards />
      <GoodyBag />
      <Hotel />
      <ChooseYourTicket />
    </main>
  )
}

export default Home
