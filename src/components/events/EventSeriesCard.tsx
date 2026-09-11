'use client';

import { useId, useState } from 'react';
import { ChevronDown, Clock, MapPin, Repeat } from 'lucide-react';
import {
  describeSeries,
  formatDateBadge,
  seriesTimeRange,
  type EventSeries,
  type WingspanEvent,
} from '@/lib/events';

type EventSeriesCardProps = {
  series: EventSeries;
  onSelect: (occurrence: WingspanEvent) => void;
};

/**
 * One card for a standing program, in place of one card per meeting.
 *
 * Unlike `EventCard` the card itself is not a button. A series has no single
 * date to open a modal for, and nesting the per-date buttons inside an outer
 * button is invalid HTML that browsers resolve by dropping the inner controls.
 * The disclosure is the only control until it is opened; each date inside it
 * then opens that occurrence.
 */
export function EventSeriesCard({ series, onSelect }: EventSeriesCardProps) {
  const [expanded, setExpanded] = useState(false);
  const datesId = useId();

  // The whole descriptor line, `through …` included: what can be claimed about
  // a schedule depends on the schedule, so the lib composes it rather than
  // handing back a fragment for this card to staple a suffix onto.
  const description = describeSeries(series);
  const time = seriesTimeRange(series);

  return (
    // `overflow-hidden` so the disclosure and the date grid are clipped by the
    // card's own radius instead of each restating it and drifting out of sync.
    <div className="overflow-hidden rounded-xl border-l-4 border-primary bg-white ring-1 ring-gray-200">
      {/* Primary rather than the accent used on one-off cards: at a glance the
          colour is what separates `this happens repeatedly` from `this happens
          once`, before any of the text is read. */}
      <div className="flex items-start gap-5 p-6">
        <div className="flex w-20 shrink-0 flex-col items-center rounded-lg bg-[#e0f2f5] px-2 py-3 text-center">
          <Repeat className="h-5 w-5 text-primary" aria-hidden="true" />
          <div className="mt-1 text-2xl leading-tight font-bold text-gray-900">
            {series.occurrences.length}
          </div>
          <div className="text-xs text-primary">dates</div>
        </div>

        <div className="min-w-0 flex-1">
          <h4 className="text-lg font-semibold text-gray-900">
            {series.title}
          </h4>

          <p className="mt-2 text-sm font-medium text-primary">{description}</p>

          {time && (
            <div className="mt-1 flex items-center text-sm text-gray-600">
              <Clock className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />
              {time}
            </div>
          )}

          {series.location && (
            <div className="mt-1 flex items-center text-sm text-gray-600">
              <MapPin className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="truncate">{series.location}</span>
            </div>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setExpanded((open) => !open)}
        aria-expanded={expanded}
        aria-controls={datesId}
        className="flex w-full cursor-pointer items-center justify-center gap-1.5 border-t border-gray-100 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-gray-50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary"
      >
        {expanded
          ? 'Hide dates'
          : `Show all ${series.occurrences.length} dates`}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {/* Kept mounted and hidden, so the browser can still find these dates for
          in-page search when the list happens to be collapsed. */}
      <ul
        id={datesId}
        hidden={!expanded}
        className="grid grid-cols-2 gap-2 border-t border-gray-100 p-4 sm:grid-cols-3"
      >
        {series.occurrences.map((occurrence) => {
          const badge = formatDateBadge(occurrence.start);

          return (
            <li key={occurrence.id}>
              <button
                type="button"
                onClick={() => onSelect(occurrence)}
                className="w-full cursor-pointer rounded-lg bg-gray-50 px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-[#e0f2f5] hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {badge.weekday} {badge.month} {badge.day}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
