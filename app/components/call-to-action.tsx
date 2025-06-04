import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail } from "lucide-react"

export default function CallToAction() {
  return (
    <section id="get-involved" className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Spread Your Wings?</h2>
        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
          Join Wingspan LA today and become part of a community dedicated to positive change. Your journey toward
          leadership and impact starts here.
        </p>

        <div className="bg-white rounded-xl p-8 shadow-xl max-w-md mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get Started Today</h3>
          <p className="text-gray-600 mb-6">
            Enter your email to receive more information about our programs and upcoming enrollment periods.
          </p>

          <form className="space-y-4">
            <Input type="email" placeholder="Enter your email address" className="w-full" required />
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 transition-all duration-300 hover:scale-105"
            >
              Join Wingspan LA
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            By signing up, you agree to receive updates about our programs. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
