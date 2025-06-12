import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import { Link } from '@/components/ui/link';
import { ArrowRight, Mail } from 'lucide-react';

export function CallToAction() {
  return (
    <section
      id="get-involved"
      className="py-40 bg-gradient-to-b from-white to-primary"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-body-text mb-6">
          Ready to Spread Your Wings?
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-xl max-w-md mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-8 w-8 text-accent" aria-hidden="true" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Get Started Today
          </h3>
          <p className="text-gray-600 mb-6">
            Fill out the form to start developing your leadership potential here
            at Cal State LA
          </p>

          {/* <form className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="w-full"
              required
            /> */}
          <Button
            // type="submit"
            className="space-y-4 bg-accent hover:bg-primary text-body-text py-3 transition-all duration-300 hover:scale-105 hover:text-light-background"
          >
            <Link
              href="https://forms.office.com/r/fpLZipPcJK"
              target="_blank"
              className="w-full flex items-center justify-center"
            >
              Join Wingspan LA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          {/* </form> */}

          <p className="text-sm text-gray-500 mt-4">
            By adding your contact info on this form, you will receive further
            information about the program and next steps for signing up! You may
            join at any point in the year.
          </p>
        </div>
      </div>
    </section>
  );
}
