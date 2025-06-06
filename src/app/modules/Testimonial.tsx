import { Quote } from "lucide-react"

export function Testimonial() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="h-12 w-12 text-blue-200 mx-auto mb-8" />
        <blockquote className="text-2xl sm:text-3xl font-medium text-white mb-8 leading-relaxed">
          &quot;Wingspan LA didn&apos;t just change my perspective&ndash;it gave me the tools and confidence to become a leader in my
          community. The mentorship and opportunities I received here have shaped who I am today.&quot;
        </blockquote>
        <div className="text-blue-200">
          <p className="text-lg font-medium">Maria Rodriguez</p>
          <p className="text-blue-300">Program Graduate, Class of 2023</p>
        </div>
      </div>
    </section>
  )
}
