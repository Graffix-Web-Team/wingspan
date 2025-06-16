import Image from 'next/image';

export function LearningOutcomes() {
  return (
    <section id="learning-outcomes" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Learning Outcomes
          </h2>
        </div>
        {/* Program Structure Section */}
        <div className="mb-20">
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              By participating in the Wingspan Leadership Program, students
              will:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-primary mb-3">1.</h4>
                <p className="text-gray-700">
                  Articulate their own leadership philosophy in the context of
                  their multiple identities and values (i.e. school,
                  professional, and community life).
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-primary mb-3">2.</h4>
                <p className="text-gray-700">
                  Identify and apply key skills to effectively work with others
                  in academic, professional, and community settings.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-primary mb-3">3.</h4>
                <p className="text-gray-700">
                  Identify and demonstrate strategies for how to enact change in
                  various educational, professional, and community environments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pathways Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Students can participate through:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <ul className="list-disc pl-6 space-y-3 text-gray-700 leading-relaxed">
              <li>Attendance at LEAD Series workshops</li>
              <li>Attendance at the annual Student Leadership Conference</li>
              <li>
                Participation in trainings available at Cal State LA
                (Undocually, VetNet Ally, Mental Health First Aid, etc.)
              </li>
              <li>Participation in service projects/service hours</li>
              <li>Completing online learning modules assigned on Canvas</li>
              <li>Joining student organization(s)</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div className="flex justify-center">
                <Image
                  src="https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan//mobile-outcomes-students-seated-at-table.webp"
                  alt="Students seated at a banquet table during a leadership event"
                  width={1280}
                  height={720}
                  className="rounded-lg shadow-sm object-cover"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan//mobile-outcomes-audience-listening-to-speaker.webp"
                  alt="Audience seated at banquet tables listening to a keynote speaker during a leadership event"
                  width={1280}
                  height={720}
                  className="rounded-lg shadow-sm object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Pathways & Milestones */}
        <div className="border-t border-gray-100 pt-8">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Pathways</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-[#b3e3ec] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">1</span>
              </div>
              <div>
                <h5 className="font-medium text-gray-900">
                  Leadership Engagement
                </h5>
                <p className="text-gray-700">
                  Participants take on roles that require active commitment and
                  development, including involvement in campus organizations and
                  service initiatives.
                </p>
                <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                  <li>
                    Opportunities include ASI, U-SU Board, Student Health
                    Advisory Committee, Student Athlete Advisor Committee,
                    Orientation Leader, Tour Guide, Resident Assistants, RHA,
                    Greek Life, and mentorship programs (RISE, Peer Leader
                    Program, etc.).
                  </li>
                  <li>
                    Many also contribute through campus committees, Recognized
                    Student Organizations, and College Corps.
                  </li>
                </ul>
              </div>
            </li>

            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-[#b3e3ec] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">2</span>
              </div>
              <div>
                <h5 className="font-medium text-gray-900">
                  Student-Led Innovation
                </h5>
                <p className="text-gray-700">
                  Encouraged to propose projects, initiatives, or leadership
                  roles aligned with the Social Change Model, participants shape
                  their own development pathways.
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-[#b3e3ec] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">3</span>
              </div>
              <div>
                <h5 className="font-medium text-gray-900">
                  Ongoing Involvement
                </h5>
                <p className="text-gray-700">
                  Continued participation in leadership development
                  opportunities throughout the year reinforces growth and aligns
                  with Wingspan&apos;s mission.
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-[#b3e3ec] flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary font-semibold">4</span>
              </div>
              <div>
                <h5 className="font-medium text-gray-900">
                  Milestone Reflection
                </h5>
                <p className="text-gray-700">
                  Completion of a final project—such as a reflection, essay, or
                  video—demonstrates leadership growth and the impact made.
                </p>
              </div>
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="flex justify-center">
              <Image
                src="https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan//mobile-outcomes-pathways-three-women-holding-award.webp"
                alt="Three women on stage smiling and holding framed leadership awards"
                width={1280}
                height={720}
                className="rounded-lg shadow-sm object-cover object-top"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan//mobile-outcomes-pathways-group-with-mascot.webp"
                alt="Group photo of students posing with Eddie the Golden Eagle mascot indoors"
                width={1280}
                height={720}
                className="rounded-lg shadow-sm object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
