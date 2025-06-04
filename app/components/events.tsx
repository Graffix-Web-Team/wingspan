import { Calendar, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    date: "Dec 15",
    time: "2:00 PM",
    title: "Youth Leadership Workshop",
    location: "Community Center",
    description: "Interactive session on developing leadership skills and public speaking.",
  },
  {
    date: "Dec 22",
    time: "10:00 AM",
    title: "Community Service Day",
    location: "Local Park",
    description: "Join us for a day of giving back through environmental cleanup and beautification.",
  },
  {
    date: "Jan 5",
    time: "6:00 PM",
    title: "Mentorship Mixer",
    location: "Wingspan LA Office",
    description: "Meet potential mentors and learn about our mentorship program opportunities.",
  },
  {
    date: "Jan 12",
    time: "3:00 PM",
    title: "Career Exploration Fair",
    location: "High School Auditorium",
    description: "Explore different career paths with professionals from various industries.",
  },
]

export default function Events() {
  return (
    <section id="events" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for these exciting opportunities to learn, grow, and connect with your community.
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
                  <div className="bg-blue-100 rounded-lg p-3">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{event.date}</div>
                    <div className="flex items-center text-gray-600 mt-1">
                      <Clock className="h-4 w-4 mr-1" />
                      {event.time}
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>

              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                {event.location}
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>

              <Button variant="outline" className="w-full hover:bg-blue-50 hover:border-blue-300 transition-colors">
                Register Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
