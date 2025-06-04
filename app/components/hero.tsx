"use client";

import { Button } from "../../src/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="mission" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
          Empowering Youth Through{" "}
          <span className="text-blue-600 block">Community & Growth</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Wingspan LA is a transformative nonprofit program dedicated to
          nurturing young leaders, building stronger communities, and creating
          pathways to success through mentorship, education, and meaningful
          opportunities.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            variant="default"
            className="transition-transform hover:scale-105"
            onClick={() => scrollToSection("get-involved")}
          >
            Join Our Program
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="transition-transform hover:scale-105"
            onClick={() => scrollToSection("values")}
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
