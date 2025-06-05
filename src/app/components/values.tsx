import { Heart, Users, Target, Lightbulb, Shield, Rocket, Globe, Star } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We lead with empathy and understanding, creating a supportive environment for all participants.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building strong connections and fostering collaboration among youth, families, and local organizations.",
  },
  {
    icon: Target,
    title: "Purpose",
    description: "Every action we take is intentional and aligned with our mission to empower young people.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace creative solutions and new approaches to address community challenges.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Maintaining transparency, honesty, and ethical practices in all our programs and partnerships.",
  },
  {
    icon: Rocket,
    title: "Growth",
    description: "Committed to continuous learning and development for both participants and our organization.",
  },
  {
    icon: Globe,
    title: "Inclusion",
    description: "Celebrating diversity and ensuring equal opportunities for youth from all backgrounds.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Striving for the highest quality in our programs, services, and impact on the community.",
  },
]

export default function Values() {
  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These fundamental principles guide everything we do and shape the culture of our program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
