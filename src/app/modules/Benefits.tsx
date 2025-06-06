import { GraduationCap, Users, Briefcase, Award, Heart, Lightbulb } from "lucide-react"

const benefits = [
  {
    icon: GraduationCap,
    title: "Educational Support",
    description:
      "Tutoring, college prep, scholarship opportunities, and academic mentorship to help you succeed in school and beyond.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description:
      "Hands-on leadership training, public speaking workshops, and opportunities to lead community projects.",
  },
  {
    icon: Briefcase,
    title: "Career Preparation",
    description:
      "Internship placements, job readiness training, resume building, and networking with industry professionals.",
  },
  {
    icon: Award,
    title: "Recognition & Awards",
    description:
      "Achievement certificates, scholarship opportunities, and public recognition for your contributions and growth.",
  },
  {
    icon: Heart,
    title: "Personal Growth",
    description:
      "Build confidence, develop emotional intelligence, and discover your passions through supportive mentorship.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Skills",
    description: "Learn creative problem-solving, design thinking, and entrepreneurship skills for the modern world.",
  },
]

export function Benefits() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What You&apos;ll Gain</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participating in Wingspan LA provides you with valuable skills, experiences, and opportunities that will
            benefit you throughout your life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
