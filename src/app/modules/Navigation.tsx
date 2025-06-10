"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* <img src="/wingspan-logo.svg" alt="" className="h-8 w-auto" /> */}
              <span className="text-2xl font-bold text-gray-900">
                Wingspan LA
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("overview")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Upcoming Events
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Benefits
              </button>
              <Button
                onClick={() => scrollToSection("get-involved")}
                className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
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
                onClick={() => scrollToSection("mission")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left transition-colors"
              >
                Our Mission
              </button>
              <button
                onClick={() => scrollToSection("values")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left transition-colors"
              >
                Values
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left transition-colors"
              >
                Upcoming Events
              </button>
              <button
                onClick={() => scrollToSection("promotions")}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left transition-colors"
              >
                Promotions
              </button>
              <Button
                onClick={() => scrollToSection("get-involved")}
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
