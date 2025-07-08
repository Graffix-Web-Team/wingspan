import {
  User,
  Smile,
  Flame,
  Users,
  Target,
  MessageCircle,
  Globe,
} from 'lucide-react';

const supabaseImageUrl =
  'https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan/values-model.webp';

const values = [
  {
    icon: Globe,
    title: 'Citizenship',
    description:
      'Fostering connections to society. Working for positive change on the behalf of others and the community.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'Working with others in a common effort. It empowers self and others through trust.',
  },
  {
    icon: Target,
    title: 'Common Purpose',
    description:
      'Facilitates the group’s ability to engage in collective analysis of issues at hand and the task to be undertaken.',
  },
  {
    icon: Flame,
    title: 'Commitment',
    description:
      'The motivational energy that drives individuals to serve the collective effort; implies passion, intensity and duration.',
  },
  {
    icon: Smile,
    title: 'Congruence',
    description:
      'Thinking, feeling and behaving with consistency, genuineness, authenticity and honesty towards others.',
  },
  {
    icon: MessageCircle,
    title: 'Controversy with Civility',
    description:
      "Respect for others, a willingness to hear each other's views, and accepting differences in viewpoints.",
  },
  {
    icon: User,
    title: 'Consciousness of Self',
    description:
      'Awareness of the beliefs, values, attitudes and emotions that motivate one to take action.',
  },
];

export function Values() {
  return (
    <section id="values" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Seven &quot;C&quot;s of the Social Change Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Grounded in the Social Change Model of Leadership (SCM), the
            Wingspan Leadership Program incorporates leadership development,
            educational awareness, and civic engagement. Social responsibility
            and change for the common good are achieved through the development
            of 7 core values targeted at enhancing students&apos; levels of
            self–awareness and ability to work with others.
          </p>
        </div>

        {/* Centered Image */}
        <div className="w-full max-w-xl mx-auto mb-12">
          <img
            src={supabaseImageUrl}
            alt="Social Change Model Diagram"
            className="w-full h-auto"
          />
        </div>

        {/* Cards in responsive grid */}
        <div className="w-full px-4 sm:px-0 flex flex-wrap justify-center gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] text-center w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <div className="w-12 h-12 bg-[#fef9c3] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent
                    className="h-6 w-6 text-accent"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
