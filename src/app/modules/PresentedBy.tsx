'use client';

import Image from 'next/image';

const organizations = [
  {
    name: 'Los Angeles Unified School District',
    logo: '/placeholder.svg?height=80&width=200',
    website: 'https://lausd.net',
  },
  {
    name: 'UCLA Center for Community Learning',
    logo: '/placeholder.svg?height=80&width=200',
    website: 'https://ucla.edu',
  },
  {
    name: 'LA County Department of Youth Development',
    logo: '/placeholder.svg?height=80&width=200',
    website: 'https://lacounty.gov',
  },
  {
    name: 'United Way of Greater Los Angeles',
    logo: '/placeholder.svg?height=80&width=200',
    website: 'https://unitedwayla.org',
  },
];

export function PresentedBy() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            Presented in Partnership With
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Wingspan LA is made possible through the collaborative efforts of
            leading educational and community organizations committed to youth
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <a
                href={org.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full flex items-center justify-center"
                aria-label={`Visit ${org.name} website`}
              >
                <div className="relative w-full h-16 flex items-center justify-center">
                  <Image
                    src={org.logo || '/placeholder.svg'}
                    alt={`${org.name} logo`}
                    width={200}
                    height={80}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            Interested in partnering with Wingspan LA?{' '}
            <a
              href="#get-involved"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('get-involved');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
