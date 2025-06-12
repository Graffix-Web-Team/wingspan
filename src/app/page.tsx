import {
  Benefits,
  CallToAction,
  Events,
  Hero,
  Overview,
  PresentedBy,
  Promotions,
  Testimonial,
  Values,
} from './modules';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <Testimonial />
        <Overview />
        <Benefits />
        <Events />
        <Values />
        <Promotions />
        <PresentedBy />
        <CallToAction />
      </main>
    </div>
  );
}
