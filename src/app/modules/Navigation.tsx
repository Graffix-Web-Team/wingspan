'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            {/* <img src="/wingspan-logo.svg" alt="" className="h-8 w-auto" /> */}
            <Image
              src="/logos/wingspan-logo.png"
              alt=""
              width={150}
              height={60}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('overview')}
                className="text-gray-700 cursor-pointer hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-gray-700 cursor-pointer hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="text-gray-700 cursor-pointer hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Upcoming Events
              </button>
              <button
                onClick={() => scrollToSection('milestones')}
                className="text-gray-700 cursor-pointer hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Milestones
              </button>
              <Button
                onClick={() => scrollToSection('get-involved')}
                className="bg-primary cursor-pointer hover:bg-[#00687a] text-white transition-colors"
              >
                Get Involved
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2">
              <button
                onClick={() => scrollToSection('overview')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left transition-colors"
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left transition-colors"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left transition-colors"
              >
                Upcoming Events
              </button>
              <button
                onClick={() => scrollToSection('milestones')}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left transition-colors"
              >
                Milestones
              </button>
              <Button
                onClick={() => scrollToSection('get-involved')}
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                Get Involved
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
