import {
  Handshake,
  BriefcaseBusiness,
  Network,
  Medal,
  MessageCircle,
  Lightbulb,
} from 'lucide-react';

const benefits = [
  {
    icon: Handshake, // Hands-on experience
    title: 'Hands-On Leadership Experience',
    description:
      'Tutoring, college prep, scholarship opportunities, and academic mentorship to help you succeed in school and beyond.',
  },
  {
    icon: BriefcaseBusiness, // Measurable skill-building (training, growth)
    title: 'Personal and Professional Development',
    description:
      'Hands-on leadership training, public speaking workshops, and opportunities to lead community projects.',
  },
  {
    icon: Network, // Professional networking
    title: 'Supportive Network of Emerging Leaders',
    description:
      'Internship placements, job readiness training, resume building, and networking with industry professionals.',
  },
  {
    icon: Medal, // Recognition
    title: 'Clarity on Strengths and Leadership Style',
    description:
      'Achievement certificates, scholarship opportunities, and public recognition for your contributions and growth.',
  },
  {
    icon: MessageCircle, // Communication, speaking up
    title: 'Practical Skills in Communication, Teamwork & Decision-Making',
    description:
      'Build confidence, develop emotional intelligence, and discover your passions through supportive mentorship.',
  },
  {
    icon: Lightbulb, // Innovation, design thinking
    title: 'Stronger Campus and Community Connections',
    description:
      'Learn creative problem-solving, design thinking, and entrepreneurship skills for the modern world.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What You&apos;ll Gain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participation provides you with valuable skills, experiences, and
            opportunities that will benefit you throughout your academic and
            professional careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-all duration-300"
              >
                <div>
                  <div className="w-16 h-16 bg-[#fef9c3] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#fef08a] transition-colors">
                    <IconComponent
                      className="h-8 w-8 text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 h-[60px]">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
