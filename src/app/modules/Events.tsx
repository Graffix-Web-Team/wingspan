import { Calendar, Clock, MapPin } from 'lucide-react';

const events = [
  {
    date: 'Sep 4',
    time: '12:00 PM – 1:30 PM',
    title: 'Respectfully, No: Setting Boundaries Guilt-Free',
    location: 'Alhambra Room',
    description:
      'Saying “no” doesn’t make you mean, it makes you mindful. Join this LEAD Series workshop to help you build the confidence to set healthy boundaries in your personal, academic, and professional life without guilt. Through real-life scenarios, reflective activities, and practical tools, you’ll learn how to communicate your needs clearly, protect your energy, and maintain strong relationships.',
  },
  {
    date: 'Sep 18',
    time: '12:00 PM – 1:30 PM',
    title: 'Lead Your Way: Embracing Neurodiversity in Leadership',
    location: 'Alhambra Room',
    description:
      'Join this LEAD Series workshop as we highlight how neurodivergent perspectives can drive creativity, empathy, and innovation in leadership spaces. You’ll explore your individual strengths, learn how to navigate challenges, and gain tools to lead in ways that feel authentic to you.',
  },
  {
    date: 'Oct 9',
    time: '12:00 PM – 1:30 PM',
    title: 'Flop Era to Glow Up: Turning Failure into Fuel',
    location: 'Alhambra Room',
    description:
      'Failure happens, and that’s okay! This LEAD Series workshop creates space to reflect on setbacks without shame, reframe what it means to “fail,” and learn how to bounce back stronger. Through honest conversations and practical strategies, you’ll explore how to grow from challenges and build resilience.',
  },
  {
    date: 'Oct 23',
    time: '12:00 PM – 1:30 PM',
    title: 'Say It With Your Chest: Speaking Up & Standing Strong',
    location: 'Alhambra Room',
    description:
      'Finding your voice and speaking up can be challenging, but it is key to advocating for yourself and others. You’ll learn practical communication skills and ways to overcome fear or hesitation so you can say what matters with confidence.',
  },
  {
    date: 'Nov 6',
    time: '12:00 PM – 1:30 PM',
    title: 'End the Beef: How to Disagree Without Disrespect',
    location: 'Alhambra Room',
    description:
      'This LEAD Series workshop teaches you how to manage disagreements respectfully. You’ll build emotional intelligence and active listening skills to turn conflict into positive collaboration.',
  },
  {
    date: 'Nov 20',
    time: '12:00 PM – 1:30 PM',
    title: 'Main Character Energy: A Workshop on Self-Love',
    location: 'Alhambra Room',
    description:
      'This LEAD Series workshop is all about stepping into your main character energy by embracing self-love and self-care. You’ll explore ways to build confidence, set boundaries, and nurture a positive relationship with yourself.',
  },
];

export function Events() {
  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take part in thoughtful events that support your growth, celebrate
            your identity, and empower you to lead with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#fef9c3] rounded-lg p-3">
                    <Calendar
                      className="h-6 w-6 text-accent"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Clock className="h-4 w-4 mr-1" aria-hidden="true" />
                      {event.time}
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {event.title}
              </h3>

              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="h-4 w-4 mr-1" aria-hidden="true" />
                {event.location}
              </div>

              <p className="text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
