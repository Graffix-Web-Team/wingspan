'use client';

import { Clock, MapPin } from 'lucide-react';
import {
  formatDateBadge,
  formatTimeRange,
  type WingspanEvent,
} from '@/lib/events';

type EventCardProps = {
  event: WingspanEvent;
  onSelect: () => void;
};

/**
 * A real `<button>`, not a div with an onClick: a div is unreachable by
 * keyboard and unannounced by screen readers.
 *
 * No flyer art here. The page already carries its own photography, and a grid
 * of unrelated event flyers competes with it — the flyer belongs in the modal.
 */
export function EventCard({ event, onSelect }: EventCardProps) {
  const badge = formatDateBadge(event.start);

  return (
    <button
      type="button"
      onClick={onSelect}
      // The accent runs down the left edge, not across the top: on a wide,
      // short card a top border reads as a heavy underline. `ring` draws the
      // rest of the outline so it cannot fight the left border's colour.
      className="group flex w-full cursor-pointer items-start gap-5 rounded-xl border-l-4 border-accent bg-white p-6 text-left ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {/* Lifting the date into a fixed-width badge is what makes the card read
          landscape. As a third stacked text row it made every card four lines
          tall regardless of width and handed the title no more room.

          Weekday over day, and no month or year: the month heading above the
          card carries those, and repeating `SEP 2026` down ten consecutive
          cards is noise. The weekday earns the line it takes — students pick
          events by which afternoon they are free, not by date arithmetic. */}
      <div className="w-20 shrink-0 rounded-lg bg-[#fef9c3] px-2 py-3 text-center">
        <div className="text-xs font-semibold tracking-wide text-primary uppercase">
          {badge.weekday}
        </div>
        <div className="text-3xl leading-tight font-bold text-gray-900">
          {badge.day}
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-primary">
          {event.title}
        </h4>

        <div className="mt-2 flex items-center text-sm text-gray-600">
          <Clock className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />
          {formatTimeRange(event.start, event.end)}
        </div>

        {event.location && (
          <div className="mt-1 flex items-center text-sm text-gray-600">
            <MapPin className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{event.location}</span>
          </div>
        )}
      </div>
    </button>
  );
}
