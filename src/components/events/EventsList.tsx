'use client';

import { useMemo, useState } from 'react';
import { EventCard } from './EventCard';
import { EventSeriesCard } from './EventSeriesCard';
import { EventModal } from './EventModal';
import { groupEventsByMonth, type WingspanEvent } from '@/lib/events';

/**
 * A single chronological column under month headings, replacing the two-column
 * grid this section used to be.
 *
 * Two columns were wrong for date-ordered content in a way no amount of card
 * styling fixed: a CSS grid fills left-to-right, so the 2nd event sat beside
 * the 1st and the 3rd began the next row. Reading the calendar in order meant
 * zig-zagging, and 48 cards of it had no landmarks at all. One column reads
 * straight down, and the month headings are the landmarks.
 *
 * The narrower measure is deliberate: at the page's full `max-w-7xl` a
 * single-column card is a 1200px line of text with a date stranded at the far
 * left of it.
 */
export function EventsList({ events }: { events: WingspanEvent[] }) {
  const [selected, setSelected] = useState<WingspanEvent | null>(null);
  const months = useMemo(() => groupEventsByMonth(events), [events]);

  return (
    <>
      <div className="mx-auto max-w-4xl space-y-12">
        {months.map((month) => (
          <section key={month.key} aria-labelledby={`events-${month.key}`}>
            {/* No `N events` count beside the month. Once a series is one
                card standing for 24 meetings, every count is wrong one way or
                the other: `10 events` under a heading whose third card reads
                `24 dates` contradicts itself, and the honest alternative is a
                word like `entries` that means nothing to a student. */}
            <h3
              id={`events-${month.key}`}
              className="mb-5 border-b border-gray-200 pb-3 font-serif text-2xl font-bold text-gray-900"
            >
              {month.label}
            </h3>

            <ul className="space-y-4">
              {month.entries.map((entry) =>
                entry.kind === 'single' ? (
                  <li key={entry.event.id}>
                    <EventCard
                      event={entry.event}
                      onSelect={() => setSelected(entry.event)}
                    />
                  </li>
                ) : (
                  <li key={entry.id}>
                    <EventSeriesCard series={entry} onSelect={setSelected} />
                  </li>
                )
              )}
            </ul>
          </section>
        ))}
      </div>

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </>
  );
}
