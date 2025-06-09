import {
  Heart,
  Users,
  Target,
  Lightbulb,
  Shield,
  Rocket,
  Globe,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Consciousness of Self",
    description:
      "Awareness of the beliefs, values, attitudes and emotions that motivate one to take action.",
  },
  {
    icon: Users,
    title: "Congruence",
    description:
      "Thinking, feeling and behaving with consistency, genuineness, authenticity and honesty towards others.",
  },
  {
    icon: Target,
    title: "Commitment",
    description:
      "The motivational energy that drives individuals to serve the collective effort; implies passion, intensity and duration.",
  },
  {
    icon: Lightbulb,
    title: "Collaboration",
    description:
      "Working with others in a common effort. It empowers self and others through trust.",
  },
  {
    icon: Shield,
    title: "Common Purpose",
    description:
      "Facilitates the group’s ability to engage in collective analysis of issues at hand and the task to be undertaken.",
  },
  {
    icon: Rocket,
    title: "Controversy with Civility",
    description:
      "Respect for others, a willingness to hear each other's views, and accepting differences in viewpoints.",
  },
  {
    icon: Globe,
    title: "Citizenship",
    description:
      "Fostering connections to society. Working for positive change on the behalf of others and the community.",
  },
];

export function Values() {
  return (
    <section id="values" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Seven &quot;C&quot;s of the Social Change Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Social responsibility and change for the common good are achieved
            through the development of seven core values targeted at enhancing
            students&apos; levels of self&ndash;awareness and ability to work
            with others.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="w-full md:w-[280px] h-[252px] bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
