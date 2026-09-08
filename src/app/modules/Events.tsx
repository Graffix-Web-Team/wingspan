import { fetchCampusGroupsEvents } from '@/lib/campus-groups';
import { selectWingspanEvents, type WingspanEvent } from '@/lib/events';
import { EventsGrid } from '@/components/events/EventsGrid';

export async function Events() {
  let events: WingspanEvent[] = [];

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
  }

  /*
   * Nothing tagged, or the feed is unreachable: render nothing at all — no
   * empty section, no "no events" heading. Note this is a server component, so
   * there is no loading state to confuse with this one; a skeleton keyed off
   * `events.length === 0` would never resolve on a page whose filter
   * legitimately matches zero events.
   */
  if (events.length === 0) return null;

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

        <EventsGrid events={events} />
      </div>
    </section>
  );
}
