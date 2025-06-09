import { Quote } from "lucide-react"

export function Testimonial() {
  return (
    <section id="quote" className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="h-12 w-12 text-blue-200 mx-auto mb-8" />
        <blockquote className="text-2xl sm:text-3xl font-medium text-white mb-8 leading-relaxed">
          "Leadership is a relational and ethical process of people together attempting to accomplish positive change
        </blockquote>
        <div className="text-blue-200">
          <p className="text-lg font-medium">Komives, Lucas, McMahon (2007)</p>
          {/* <p className="text-blue-300">Program Graduate, Class of 2023</p> */}
        </div>
      </div>
    </section>
  )
}
