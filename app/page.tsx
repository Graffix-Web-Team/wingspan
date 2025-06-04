import Navigation from "./components/navigation";
import Hero from "./components/hero";
import Values from "./components/values";
import Testimonial from "./components/testimonial";
import Events from "./components/events";
import Promotions from "./components/promotions";
import Benefits from "./components/benefits";
import CallToAction from "./components/call-to-action";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Values />
        <Testimonial />
        <Events />
        <Promotions />
        <Benefits />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
