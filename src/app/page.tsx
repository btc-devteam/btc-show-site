import {
  AnticipatedSection,
  Brands,
  ChooseYourTicket,
  Classes,
  ConnectionCenter,
  CountdownTimer,
  GoodyBag,
  Hero,
  Hotel,
  Mainstage,
  Mission,
  OneShotAwards,
  Parties,
  ShowSchedule,
  Testimonials,
  TicketsOnSaleCta,
  Workshops,
} from '@/components/sections'

export default function HomePage() {
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
