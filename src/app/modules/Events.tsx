import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import events from '@/data/events.json';
import { Link } from '@/components/ui/link';

export type Event = {
  date: string;
  time: string;
  title: string;
  location: string;
  description: string;
  link?: {
    label: string;
    url: string;
  };
};

export function Events() {
  const filterPastEvents = (events: Event[]): Event[] => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    return events.filter((event) => {
      const currentYear = now.getFullYear();
      const eventDate = new Date(`${event.date}, ${currentYear}`);
      return eventDate >= today;
    });
  };
  const filteredEvents = filterPastEvents(events);

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-serif">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-left">
            Take part in thoughtful events that support your growth, celebrate
            your identity, and empower you to lead with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEvents.map((event, index) => (
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

              {event.link && (
                <div className="flex items-center mt-4 gap-4">
                  <Link
                    href={event.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black font-medium underline hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {event.link.label}
                    <ExternalLink className="h-4 w-4 ml-1" aria-hidden="true" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
