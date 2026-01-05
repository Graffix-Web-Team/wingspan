'use client';

import Image from '@/components/ui/image';

const organizations = [
  {
    name: 'Center for Student Involvement',
    logo: 'https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan/csi-logo.webp',
    website: 'https://www.calstatelausu.org/csi',
  },
  {
    name: 'University-Student Union',
    logo: 'https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan/usu-dark-logo.webp',
    website: 'https://calstatelausu.org',
  },
  {
    name: 'Associated Students, Inc.',
    logo: 'https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan/asi-dark-logo.webp',
    website: 'https://asicalstatela.org/',
  },
];

export function PresentedBy() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3 font-serif">
            Presented in Partnership With
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-left">
            The Wingspan Leadership Program is put together by the collaborative
            efforts of on-campus organizations dedicated to student development.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-8 items-center">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <a
                href={org.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center"
                aria-label={`Visit ${org.name} website`}
              >
                <div className="relative w-full h-16 flex items-center justify-center">
                  <Image
                    src={org.logo || '/placeholder.svg'}
                    alt=""
                    width={200}
                    height={80}
                    className="w-50 max-w-full max-h-full object-contain"
                  />
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
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
        </div> */}
      </div>
    </section>
  );
}
