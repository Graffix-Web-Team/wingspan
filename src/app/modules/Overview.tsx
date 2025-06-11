'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Overview() {
  return (
    <section id="overview" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Program Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wingspan LA is a comprehensive youth development initiative designed
            to empower the next generation of leaders.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Empowering Youth Since 2015
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Wingspan LA was founded with a simple yet powerful vision: to
              create a space where young people from all backgrounds could
              develop the skills, confidence, and connections needed to thrive
              in today&apos;s complex world. What began as a small after-school
              program has grown into a comprehensive youth development
              initiative serving hundreds of students across Los Angeles County.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our program operates at the intersection of education, leadership
              development, community service, and career preparation. We believe
              that every young person has untapped potential that, when nurtured
              in a supportive environment, can lead to extraordinary
              outcomes—not just for the individual, but for entire communities.
            </p>
            <Button
              variant="outline"
              className="flex items-center gap-2 hover:bg-blue-50 hover:border-blue-300 transition-colors"
            >
              Learn about our history
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Students collaborating on a community project"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Program Structure Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Program Structure
          </h3>
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              Wingspan LA operates through a structured yet flexible framework
              designed to meet the diverse needs of our participants. Our
              program is divided into three core phases, each building upon the
              previous to create a comprehensive development journey:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">
                  Foundation Phase
                </h4>
                <p className="text-gray-700">
                  Participants begin with workshops and activities focused on
                  self-discovery, basic leadership principles, and community
                  awareness. This phase typically lasts 3-4 months and
                  establishes the groundwork for deeper engagement.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">
                  Development Phase
                </h4>
                <p className="text-gray-700">
                  Building on the foundation, participants engage in more
                  advanced leadership training, begin mentoring relationships,
                  and take on small team projects within the community. This
                  phase typically spans 5-6 months.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold text-blue-600 mb-3">
                  Leadership Phase
                </h4>
                <p className="text-gray-700">
                  In the final phase, participants lead their own community
                  initiatives, mentor newer members, and receive specialized
                  training in their areas of interest. This phase continues
                  until graduation from the program.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Throughout all phases, participants receive consistent support
              from dedicated staff mentors, access to resources and
              opportunities, and regular feedback to help them grow. The program
              is designed to be challenging yet supportive, pushing young people
              to expand their capabilities while providing the guidance they
              need to succeed.
            </p>
          </div>
        </div>

        {/* Impact Section with Image Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Our Impact
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Since our founding, Wingspan LA has worked with over 1,500 young
                people across Los Angeles County. Our participants have
                completed more than 25,000 hours of community service, launched
                120+ youth-led initiatives, and achieved remarkable personal and
                academic growth.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our program graduates have a 95% high school graduation rate,
                with 85% pursuing higher education or specialized career
                training. Many return as mentors, creating a powerful cycle of
                leadership and community investment.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beyond the numbers, our greatest impact lies in the individual
                stories of transformation—young people who discovered their
                voice, developed confidence in their abilities, and found
                purpose in serving others. These personal journeys ripple
                outward, creating positive change throughout our communities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[200px] rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Students at community clean-up event"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Leadership workshop session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Student presenting at community event"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Graduation ceremony"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Approach and Methodology */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Our Approach
          </h3>

          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div className="col-span-1 lg:col-span-2 space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  At Wingspan LA, we believe in a holistic approach to youth
                  development that addresses the intellectual, social,
                  emotional, and practical needs of young people. Our
                  methodology is grounded in research-backed practices and
                  refined through years of direct experience working with
                  diverse youth populations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We employ a &quot;learn by doing&quot; philosophy, where
                  participants gain knowledge through direct experience and
                  reflection. Rather than passive learning, our workshops and
                  activities engage young people as active participants in their
                  own development journey.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our approach emphasizes both individual growth and community
                  connection. We recognize that true leadership development
                  happens when young people can apply their skills in meaningful
                  contexts and see the impact of their actions on others.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Students in a workshop setting"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Key Elements of Our Methodology:
              </h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">
                      Experiential Learning
                    </h5>
                    <p className="text-gray-700">
                      Hands-on activities and real-world applications that allow
                      participants to learn through direct experience rather
                      than abstract concepts alone.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">
                      Mentorship Model
                    </h5>
                    <p className="text-gray-700">
                      One-on-one relationships with experienced mentors who
                      provide guidance, feedback, and support throughout the
                      program journey.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">
                      Community Integration
                    </h5>
                    <p className="text-gray-700">
                      Meaningful engagement with local communities through
                      service projects, partnerships with local organizations,
                      and public events.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold">4</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">
                      Reflective Practice
                    </h5>
                    <p className="text-gray-700">
                      Structured opportunities for participants to reflect on
                      their experiences, extract meaningful lessons, and apply
                      insights to future situations.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
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
                const element = document.getElementById('get-involved');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
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
      </div>
    </section>
  );
}
