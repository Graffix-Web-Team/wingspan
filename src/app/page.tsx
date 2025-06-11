import {
  Benefits,
  CallToAction,
  Events,
  Hero,
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
        <Benefits />
        <Events />
        <Values />
        <Promotions />
        <CallToAction />
      </main>
    </div>
  );
}
