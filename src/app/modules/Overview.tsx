'use client';

import Image from '@/components/ui/image';
// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-react';

export function Overview() {
  return (
    <section id="overview" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Program Overview
          </h2>
        </div>

        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Cal State LA Wants You to Lead!
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Wingspan Leadership Program strives to enhance our
              students&apos; experience at Cal State LA through meaningful
              opportunities to cultivate leadership skills, social
              responsibility, and holistic development. A core principle of the
              program is that all students have the potential for leadership. By
              participating in workshops and programs, joining and leading
              student organizations, and engaging in student governance and
              service projects, they will develop their potential and make a
              positive difference personally, in the campus community, and
              beyond.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[16/9] lg:aspect-auto rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan/overview-event.webp"
              alt="Large group of students gathered outdoors under an arch of black, white, and gold balloons"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Call to Action */}
        {/*
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Ready to Learn More?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We invite you to connect with our team to learn more about how
            Wingspan LA can support the young people in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
              onClick={() => {
                const element = document.getElementById("get-involved");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
