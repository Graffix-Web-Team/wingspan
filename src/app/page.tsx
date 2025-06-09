import { Benefits, CallToAction, Events, Hero, Promotions, Testimonial, Values } from "./modules";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Values />
        <Testimonial />
        <Events />
        <Promotions />
        <Benefits />
        <CallToAction />
      </main>
    </div>
  )
}
