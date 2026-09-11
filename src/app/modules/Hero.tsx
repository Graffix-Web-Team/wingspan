'use client';

import { ArrowRight } from 'lucide-react';
import { Link } from '@/components/ui/link';
import { Button } from '@/components/ui/button';
import Image from '@/components/ui/image';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="mission" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="max-w-4xl mx-auto py-40 md:py-0">
            <div className="md:py-10">
              <Image
                alt={'Wingspan Leadership Program'}
                src={
                  'https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan/Wingspan-Desktop.svg'
                }
                className="hidden md:block"
              />
            </div>
            {/* `w-full` is load-bearing, not decoration. `width={400}` reaches
                the DOM as a real width attribute, so without it the logo lays
                out at a flat 400px — wider than an iPhone SE's 343px of content
                box. That overflow scrolled the whole document, and since the
                page's white background is a normal block exactly one viewport
                wide, the strip past 375px showed the beige `:root` colour
                underneath. Preflight's `img { max-width: 100% }` does not save
                this: `max-w-md` overrides it with 448px, which 400 fits inside.

                Keep the width/height attributes — with `w-full h-auto` they no
                longer size anything, they just give the browser the aspect
                ratio to reserve, which is what keeps the hero from jumping as
                the SVG loads. */}
            <Image
              alt="Wingspan Leadership Program"
              src="https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan/Stacked_teal.svg"
              width={400}
              height={200}
              fetchPriority="high"
              className="block md:hidden w-full max-w-md mx-auto h-auto"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <h1 className="text-xl pt-10 md:pt-0 sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Expand Your Leadership Reach
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-[#00687a] text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                <Link
                  href="https://calstatela.instructure.com/enroll/G9PART"
                  className="inline-flex items-center"
                >
                  Sign Up
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-gray-300 bg-accent text-body-text px-8 py-4 text-lg transition-all duration-300 hover:bg-[#e1ac00] hover:scale-105"
                onClick={() => scrollToSection('overview')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
