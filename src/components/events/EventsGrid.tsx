'use client';

import { useState } from 'react';
import { EventCard } from './EventCard';
import { EventModal } from './EventModal';
import type { WingspanEvent } from '@/lib/events';

export function EventsGrid({ events }: { events: WingspanEvent[] }) {
  const [selected, setSelected] = useState<WingspanEvent | null>(null);

  return (
    <>
      {/* An explicit two-column track, not an auto-fitting one: auto-fit
          silently becomes three columns on a wide viewport, and three columns
          is what forces the cards portrait. */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onSelect={() => setSelected(event)}
          />
        ))}
      </div>

      <EventModal event={selected} onClose={() => setSelected(null)} />
    </>
  );
}
