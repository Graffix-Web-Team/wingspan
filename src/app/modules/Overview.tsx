'use client';

import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-react';

export function Overview() {
  return (
    <section id="overview" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Overview
          </h2>
        </div>

        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Cal State LA Wants You to Lead
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Wingspan Leadership Program strives to enhance our
              students&apos; experience at Cal State LA through meaningful
              opportunities to cultivate leadership skills, social
              responsibility, and holistic development. A core principle of the
              program is that all students have the potential for leadership. By
              participating in workshops and programs, joining and leading
              student organizations, and engaging in student governance and
              service projects, they will develop their potential and make a
              positive difference personally, in the campus community, and
              beyond.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan/Image%20(19).jpg"
              alt="Large group of students gathered outdoors under an arch of black, white, and gold balloons"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Program Structure Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Learning Outcomes
          </h3>
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              By participating in the Wingspan Leadership Program, students
              will:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">1.</h4>
                <p className="text-gray-700">
                  Articulate their own leadership philosophy in the context of
                  their multiple identities and values (i.e. school,
                  professional, and community life).
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">2.</h4>
                <p className="text-gray-700">
                  Identify and apply key skills to effectively work with others
                  in academic, professional, and community settings.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">3.</h4>
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
            Students will participate in the Wingspan Leadership Program through
            these pathways
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
                <div className="relative w-full md:w-[300px] h-[200px] rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan/IMG_1417.JPG"
                    alt="Students seated at a banquet table during a leadership event"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full md:w-[300px] h-[200px] rounded-lg overflow-hidden shadow-sm">
                  <Image
                    src="https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan/20250418_210515803_iOS.jpg"
                    alt="Audience seated at banquet tables listening to a keynote speaker during a leadership event"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Pathways & Milestones */}
        <div className="border-t border-gray-100 pt-8">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">
            Student Leadership Pathways & Milestones
          </h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-semibold">1</span>
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
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-semibold">2</span>
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
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-semibold">3</span>
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
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-semibold">4</span>
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
            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-sm">
              <Image
                src="https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan/IMG_1348.JPG"
                alt="Three women on stage smiling and holding framed leadership awards"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[200px] rounded-lg overflow-hidden shadow-sm">
              <Image
                src="https://bubqscxokeycpuuoqphp.supabase.co/storage/v1/object/public/wingspan/Image%20(20).jpg"
                alt="Group photo of students posing with Eddie the Golden Eagle mascot indoors"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/*
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Ready to Learn More?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We invite you to connect with our team to learn more about how
            Wingspan LA can support the young people in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105"
              onClick={() => {
                const element = document.getElementById("get-involved");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-105"
            >
              Schedule a Visit
            </Button>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
