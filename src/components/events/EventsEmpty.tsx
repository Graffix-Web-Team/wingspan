import { CalendarDays, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Summer. The feed answered, and the answer was that nothing is scheduled.
 *
 * Rendered only for that case — never when the fetch failed. `No events` is a
 * claim about the calendar, and a section that makes it because CampusGroups
 * timed out is lying to a student who could have found the event by searching
 * for it.
 */
export function EventsEmpty() {
  return (
    <div className="mx-auto max-w-2xl rounded-xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
      <CalendarDays
        className="mx-auto h-10 w-10 text-primary"
        aria-hidden="true"
      />
      <p className="mt-4 text-lg font-semibold text-gray-900">
        No events on the calendar right now
      </p>
      <p className="mx-auto mt-2 max-w-md text-gray-600">
        Wingspan programming runs through the academic year and pauses over the
        summer. New events are posted before the fall semester begins.
      </p>

      <Button
        asChild
        className="mt-6 bg-primary text-white transition-colors hover:bg-[#00687a]"
      >
        {/*
         * The whole campus calendar, not a Wingspan-filtered view. The RSS
         * feed's `topic_id` is an undocumented parameter of the feed endpoint;
         * the human-facing `/events` page renders its filters client-side, so
         * whether it honours the same parameter cannot be checked from here
         * and a wrong guess would land on an unfiltered list anyway.
         */}
        <a
          href="https://calstatela.campusgroups.com/events"
          target="_blank"
          rel="noopener noreferrer"
        >
          Browse all Cal State LA events
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </Button>
    </div>
  );
}
