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
            <Image
              alt="Wingspan Leadership Program"
              src="https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan/Stacked_teal.svg"
              className="block md:hidden max-w-md mx-auto"
            />
            <h1 className="text-xl pt-10 md:pt-0 sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Expand Your Leadership Reach
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-[#00687a] text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                <Link href="https://calstatela.instructure.com/enroll/W8BRXJ">
                  <span className="flex items-center">
                    Sign Up
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 bg-accent text-body-text px-8 py-4 text-lg transition-all duration-300 hover:bg-[#e1ac00] hover:scale-105"
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
