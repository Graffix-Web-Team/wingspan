import { CheckCircle } from "lucide-react"

const promotions = [
  {
    level: "Rising Leader",
    requirements: [
      "Complete 20 hours of community service",
      "Attend 3 leadership workshops",
      "Maintain 3.0 GPA or equivalent",
    ],
    benefits: "Certificate of Achievement, Program T-shirt",
  },
  {
    level: "Soaring Leader",
    requirements: [
      "Complete 40 hours of community service",
      "Lead 1 community project",
      "Mentor 2 new participants",
      "Maintain 3.2 GPA or equivalent",
    ],
    benefits: "Silver Medal, $250 Scholarship, Leadership Recognition",
  },
  {
    level: "Golden Leader",
    requirements: [
      "Complete 60 hours of community service",
      "Lead 2 community projects",
      "Mentor 4 new participants",
      "Present at community event",
      "Maintain 3.5 GPA or equivalent",
    ],
    benefits: "Gold Medal, $500 Scholarship, College Recommendation Letter",
  },
]

export function Promotions() {
  return (
    <section id="promotions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Achievement Levels</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Progress through our recognition system by meeting requirements and making a positive impact.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Level</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Requirements</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Benefits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {promotions.map((promotion, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-6">
                    <div className="flex items-center">
                      <div
                        className={`w-4 h-4 rounded-full mr-3 ${
                          promotion.level === "Rising Leader"
                            ? "bg-amber-600"
                            : promotion.level === "Soaring Leader"
                              ? "bg-gray-400"
                              : promotion.level === "Golden Leader"
                                ? "bg-accent"
                                : "bg-purple-600"
                        }`}
                      ></div>
                      <span className="text-lg font-semibold text-gray-900">{promotion.level}</span>
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <ul className="space-y-2">
                      {promotion.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-sm text-gray-700">{promotion.benefits}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
