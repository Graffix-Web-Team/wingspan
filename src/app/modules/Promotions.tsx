import { CheckCircle, Award } from 'lucide-react';

const promotions = [
  {
    level: 'Rising Leader',
    requirements: [
      'Pre-Assessment',
      'Attend 3 LEAD Workshops OR the Student Leadership Conference',
      'Become a member of at least 1 student organization',
      'Complete 2 Online Learning Modules',
      'Complete 5 hours of Volunteer/Service Hours',
      'Contribute Positive Change on campus (Optional)',
      'End of Level Assessment',
      'Approximately 15 hours required for completion',
    ],
    benefits: [
      'Rising Leader cord for graduation',
      'Rising Leader medal for graduation',
      'Certificate of Completion',
      'Recognition at the annual Golden Eagle Awards',
      'A Wingspan Leadership Program sweater',
    ],
  },
  {
    level: 'Soaring Leader',
    requirements: [
      'Pre-Assessment',
      'Attend 5 LEAD Workshops',
      'Student Leadership Conference',
      'Become a member of at least 1 student organization',
      'Complete 4 Online Learning Modules',
      'Complete 10 hours of Volunteer/Service Hours',
      'Contribute Positive Change on campus (Optional)',
      'End of Level Assessment',
      'Approximately 25 hours required for completion',
    ],
    benefits: [
      'Soaring Leader cord for graduation',
      'Soaring Leader medal for graduation',
      'Certificate of Completion',
      'Recognition at the annual Golden Eagle Awards',
      'A Wingspan Leadership Program sweater',
    ],
  },
  {
    level: 'Golden Leader',
    requirements: [
      'Pre-Assessment',
      'Attend 7 LEAD Workshops',
      'Student Leadership Conference',
      'Become a member of at least 1 student organization',
      'Complete 6 Online Learning Modules',
      'Complete 10 hours of Volunteer/Service Hours',
      'Contribute Positive Change on campus',
      'End of Level Assessment',
      'Approximately 40 hours required for completion',
    ],
    benefits: [
      'Golden Leader cord for graduation',
      'Golden Leader medal for graduation',
      'Certificate of Completion',
      'Recognition at the annual Golden Eagle Awards',
      'A Wingspan Leadership Program sweater',
    ],
  },
];

export function Promotions() {
  return (
    <section id="milestones" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Leadership Milestones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Students will participate in various training events to achieve the
            designations of Rising Leader, Soaring Leader, and Golden Leader.
            Throughout the program, students will have opportunities to connect
            with peers and build community through in-person and online
            engagement. Transfer students may be able to apply their prior
            leadership experience toward these levels.
          </p>
        </div>

        <div className="overflow-x-auto md:overflow-x-visible">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Level
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Requirements
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Perks
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {promotions.map((promotion, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-6">
                      <div className="flex items-center">
                        <div
                          aria-hidden="true"
                          className={`w-4 h-4 rounded-full mr-3 ${
                            promotion.level === 'Rising Leader'
                              ? 'bg-amber-600'
                              : promotion.level === 'Soaring Leader'
                                ? 'bg-gray-400'
                                : promotion.level === 'Golden Leader'
                                  ? 'bg-accent'
                                  : 'bg-purple-600'
                          }`}
                        ></div>
                        <span className="text-lg font-semibold text-gray-900">
                          {promotion.level}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <ul className="space-y-2">
                        {promotion.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <CheckCircle
                              className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span className="text-sm text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-6">
                      <ul className="space-y-2">
                        {promotion.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <Award
                              className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span className="text-sm text-gray-700">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards */}
          <div className="space-y-6 md:hidden">
            {promotions.map((promotion, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-4 space-y-4"
              >
                <div className="flex items-center">
                  <div
                    className={`w-4 h-4 rounded-full mr-3 ${
                      promotion.level === 'Rising Leader'
                        ? 'bg-amber-600'
                        : promotion.level === 'Soaring Leader'
                          ? 'bg-gray-400'
                          : promotion.level === 'Golden Leader'
                            ? 'bg-accent'
                            : 'bg-purple-600'
                    }`}
                  ></div>
                  <span className="text-lg font-semibold text-gray-900">
                    {promotion.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Requirements
                  </h3>
                  <ul className="space-y-2">
                    {promotion.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <CheckCircle
                          className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">
                    Perks
                  </h3>
                  <ul className="space-y-2">
                    {promotion.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <Award
                          className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
