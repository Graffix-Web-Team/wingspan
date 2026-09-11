import { fetchCampusGroupsEvents } from '@/lib/campus-groups';
import { selectWingspanEvents, type WingspanEvent } from '@/lib/events';
import { EventsList } from '@/components/events/EventsList';
import { EventsEmpty } from '@/components/events/EventsEmpty';

export async function Events() {
  let events: WingspanEvent[] = [];
  let reachable = true;

  try {
    /*
     * Filter by topic name even though the feed URL already carries
     * `topic_id`. If CampusGroups ever changes or drops that param the request
     * keeps returning HTTP 200 — with 320 unrelated events from 22
     * departments. This second pass is the only thing standing between a
     * silent upstream change and the Student Health Center's calendar
     * appearing on the Wingspan site.
     */
    events = selectWingspanEvents(await fetchCampusGroupsEvents());
  } catch (error) {
    // Keep the rest of the page up; the section below renders nothing.
    console.error('Could not load Wingspan events from CampusGroups', error);
    reachable = false;
  }

  /*
   * Two different kinds of nothing, told apart because they deserve different
   * answers.
   *
   * The feed is unreachable: render nothing at all. We do not know what is on
   * the calendar, and a section claiming there is nothing would be a claim we
   * cannot support. Note this is a server component, so there is no loading
   * state to confuse with this one.
   *
   * The feed answered with no Wingspan events: that IS the calendar, and it
   * happens every summer. Keep the section — the nav links to `#events`, and a
   * link that scrolls nowhere is worse than a heading that says the season is
   * over.
   */
  if (!reachable) return null;

  return (
    <section id="events" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mx-auto max-w-3xl text-left text-xl text-gray-600">
            Take part in thoughtful events that support your growth, celebrate
            your identity, and empower you to lead with confidence.
          </p>
        </div>

        {events.length === 0 ? <EventsEmpty /> : <EventsList events={events} />}
      </div>
    </section>
  );
}
