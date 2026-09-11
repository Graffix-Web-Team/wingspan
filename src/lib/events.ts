/**
 * Pure helpers for Wingspan events: no I/O, so these are safe to import from
 * client components. Feed fetching and XML parsing live in `campus-groups.ts`.
 */

/**
 * CampusGroups publishes timestamps with the Pacific offset already applied
 * (`2026-09-08T13:00:00.0000000-07:00`), so these parse directly. Pinning the
 * locale and time zone on every formatter keeps server and client output
 * identical — no hydration mismatch, and no `new Date()` during render.
 */
const EVENT_TIME_ZONE = 'America/Los_Angeles';

/** The CampusGroups topic that marks an event as Wingspan programming. */
export const WINGSPAN_TOPIC = 'Wingspan';

export type WingspanEvent = {
  id: string;
  title: string;
  /** ISO 8601, Pacific offset already applied by the feed. */
  start: string;
  end: string;
  /** Left of the first comma in `eventLocation`, e.g. `Main Campus Walkway`. */
  location: string;
  description: string;
  flyerUrl: string;
  /** Empty when the event has no RSVP page. */
  rsvpUrl: string;
  /** Host department, e.g. `Center for Student Involvement`. */
  group: string;
  topics: string[];
};

/**
 * Whole-tag match, case-insensitive. Deliberately not a substring test: the
 * feed's topic vocabulary already carries both `Wingspan` and `Weeks of
 * Welcome`, and a substring match would let a future `Wingspan Kickoff` tag
 * drag unrelated events onto the page. Case is forgiven because topics are
 * hand-typed in CampusGroups.
 */
export function hasTopic(event: WingspanEvent, topic: string): boolean {
  const wanted = topic.trim().toLowerCase();
  return event.topics.some((value) => value.trim().toLowerCase() === wanted);
}

/**
 * An event is judged by when it finishes, not when it starts — something
 * happening right now is the most relevant thing on the page, and filtering on
 * the start would make it vanish the moment it begins.
 *
 * A blank or malformed end date parses to `NaN`, and `NaN` loses every
 * comparison, so the event would silently disappear instead of degrading.
 * Fall back to the start time.
 */
function endsAt(event: WingspanEvent): number {
  const end = Date.parse(event.end);
  return Number.isNaN(end) ? Date.parse(event.start) : end;
}

/**
 * Filter to Wingspan, drop what has already finished, and sort by start
 * ascending — once, here, so the visible order and anything derived from it
 * cannot disagree.
 */
export function selectWingspanEvents(
  events: WingspanEvent[],
  now: number = Date.now()
): WingspanEvent[] {
  return events
    .filter((event) => hasTopic(event, WINGSPAN_TOPIC))
    .filter((event) => {
      const finish = endsAt(event);
      // Neither date parsed: the event cannot be placed on a timeline at all.
      return !Number.isNaN(finish) && finish >= now;
    })
    .sort((a, b) => Date.parse(a.start) - Date.parse(b.start));
}

const badgeFormat = new Intl.DateTimeFormat('en-US', {
  timeZone: EVENT_TIME_ZONE,
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

const longDateFormat = new Intl.DateTimeFormat('en-US', {
  timeZone: EVENT_TIME_ZONE,
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const timeFormat = new Intl.DateTimeFormat('en-US', {
  timeZone: EVENT_TIME_ZONE,
  hour: 'numeric',
  minute: '2-digit',
});

const monthKeyFormat = new Intl.DateTimeFormat('en-US', {
  timeZone: EVENT_TIME_ZONE,
  year: 'numeric',
  month: '2-digit',
});

const monthLabelFormat = new Intl.DateTimeFormat('en-US', {
  timeZone: EVENT_TIME_ZONE,
  year: 'numeric',
  month: 'long',
});

const weekdayLongFormat = new Intl.DateTimeFormat('en-US', {
  timeZone: EVENT_TIME_ZONE,
  weekday: 'long',
});

const shortDateFormat = new Intl.DateTimeFormat('en-US', {
  timeZone: EVENT_TIME_ZONE,
  month: 'short',
  day: 'numeric',
});

const listFormat = new Intl.ListFormat('en-US', {
  style: 'long',
  type: 'conjunction',
});

const WEEKDAY_ORDER = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export type DateBadge = {
  weekday: string;
  month: string;
  day: string;
  year: string;
};

/**
 * Every field is always returned; the caller decides what its layout has room
 * for. The month list shows only weekday and day, because the month heading
 * standing above the card already carries the month and the year.
 *
 * Nothing here is hidden conditionally on today's date. Wingspan programming
 * spans the academic year — the current run is September 2026 through May 2027
 * — and deciding what to omit would mean calling `new Date()` during render,
 * which can disagree between server and client across a New Year boundary.
 */
export function formatDateBadge(iso: string): DateBadge {
  const parts = badgeFormat.formatToParts(new Date(iso));
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((candidate) => candidate.type === type)?.value ?? '';

  return {
    weekday: part('weekday'),
    month: part('month'),
    day: part('day'),
    year: part('year'),
  };
}

/**
 * Bucket a timestamp by Pacific month, not by the viewer's zone: an 8pm event
 * on the 30th is not October to a student reading the page from a laptop still
 * set to UTC.
 */
function monthKey(iso: string): string {
  const parts = monthKeyFormat.formatToParts(new Date(iso));
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((candidate) => candidate.type === type)?.value ?? '';

  return `${part('year')}-${part('month')}`;
}

export function formatLongDate(iso: string): string {
  return longDateFormat.format(new Date(iso));
}

export function formatTimeRange(start: string, end: string): string {
  const from = timeFormat.format(new Date(start));
  if (Number.isNaN(Date.parse(end))) return from;

  return `${from} – ${timeFormat.format(new Date(end))}`;
}

export function formatShortDate(iso: string): string {
  return shortDateFormat.format(new Date(iso));
}

/**
 * How many occurrences of the same event it takes before the list stops
 * printing every one.
 *
 * Two, so that a series stays a series for its whole run. At three, a weekly
 * program spent its final fortnight breaking apart back into loose cards: `Sit,
 * Study, and Snack` would have shown 24 dates on one card all term, then split
 * into two ordinary cards on December 4th once only the 8th and the 10th
 * remained. Students had by then been reading one card for three months.
 *
 * The cost is that any two same-titled events now collapse — see
 * `describeSeries`, which is careful not to read a cadence into a pair that
 * merely happens twice.
 */
const SERIES_MIN_OCCURRENCES = 2;

/** A recurring program folded into one entry; occurrences stay sorted. */
export type EventSeries = {
  kind: 'series';
  /** Stable across renders: the first occurrence's id. */
  id: string;
  title: string;
  group: string;
  location: string;
  occurrences: WingspanEvent[];
};

export type EventListEntry =
  | { kind: 'single'; event: WingspanEvent }
  | EventSeries;

export type EventMonth = {
  /** `2026-09`, Pacific. */
  key: string;
  /** `September 2026`. */
  label: string;
  entries: EventListEntry[];
};

/** Same title, same host department. */
function seriesKey(event: WingspanEvent): string {
  return `${event.title.trim().toLowerCase()} ${event.group.trim().toLowerCase()}`;
}

/**
 * Fold repeats into one entry each, anchored to the first occurrence still to
 * come. A weekly program running September through December therefore sits in
 * September and says so, instead of laying a card into all four months.
 *
 * Input order is preserved, so the chronological sort `selectWingspanEvents`
 * already applied carries through to both the entries and the occurrences
 * inside each series.
 */
export function collapseSeries(events: WingspanEvent[]): EventListEntry[] {
  const occurrences = new Map<string, WingspanEvent[]>();
  for (const event of events) {
    const key = seriesKey(event);
    occurrences.set(key, [...(occurrences.get(key) ?? []), event]);
  }

  const emitted = new Set<string>();
  const entries: EventListEntry[] = [];

  for (const event of events) {
    const key = seriesKey(event);
    const group = occurrences.get(key) ?? [event];

    if (group.length < SERIES_MIN_OCCURRENCES) {
      entries.push({ kind: 'single', event });
      continue;
    }

    // Anchored at its first occurrence; the rest are already accounted for.
    if (emitted.has(key)) continue;
    emitted.add(key);

    entries.push({
      kind: 'series',
      id: group[0].id,
      title: group[0].title,
      group: group[0].group,
      location: group[0].location,
      occurrences: group,
    });
  }

  return entries;
}

/** The start an entry sorts and groups by. */
function entryStart(entry: EventListEntry): string {
  return entry.kind === 'single'
    ? entry.event.start
    : entry.occurrences[0].start;
}

/**
 * Bucket into calendar months, chronologically.
 *
 * A month whose every event belongs to a series anchored earlier yields no
 * entries and is dropped: December is currently nothing but the weekly study
 * session, and a `December 2026` heading standing over empty space reads as a
 * bug rather than as a quiet month.
 */
export function groupEventsByMonth(events: WingspanEvent[]): EventMonth[] {
  const months = new Map<string, EventListEntry[]>();

  for (const entry of collapseSeries(events)) {
    const key = monthKey(entryStart(entry));
    months.set(key, [...(months.get(key) ?? []), entry]);
  }

  return [...months.entries()].map(([key, entries]) => ({
    key,
    label: monthLabelFormat.format(new Date(entryStart(entries[0]))),
    entries,
  }));
}

const DAY_MS = 24 * 60 * 60 * 1000;

/**
 * Fewest occurrences that may be called a rhythm. Two events three weeks apart
 * both land on a Friday, and `Every Friday` would be a flat lie about a thing
 * that happens twice — the Career Center's `Future First Live: Explore Your
 * Career Direction` is exactly that pair.
 */
const MIN_WEEKLY_OCCURRENCES = 3;

/**
 * How much of the weekly grid the occurrences have to fill before the schedule
 * counts as weekly. Not 1: a real weekly program skips holidays, and `Sit,
 * Study, and Snack` has a twelve-day hole in it where Thanksgiving goes.
 * Something monthly fills about a quarter of the grid and is caught here.
 */
const WEEKLY_COVERAGE = 0.75;

/** Distinct weekdays the occurrences land on, in week order. */
function seriesWeekdays(series: EventSeries): string[] {
  const weekdays: string[] = [];
  for (const occurrence of series.occurrences) {
    const weekday = weekdayLongFormat.format(new Date(occurrence.start));
    if (!weekdays.includes(weekday)) weekdays.push(weekday);
  }

  return weekdays.sort(
    (a, b) => WEEKDAY_ORDER.indexOf(a) - WEEKDAY_ORDER.indexOf(b)
  );
}

/**
 * Does this actually repeat every week on a fixed set of days? Measured rather
 * than assumed: count how many meetings a truly weekly schedule would have fit
 * into the same span, and check the real ones come close enough.
 */
function looksWeekly(series: EventSeries, weekdays: string[]): boolean {
  if (series.occurrences.length < MIN_WEEKLY_OCCURRENCES) return false;
  if (weekdays.length > 3) return false;

  const first = Date.parse(series.occurrences[0].start);
  const last = Date.parse(
    series.occurrences[series.occurrences.length - 1].start
  );
  // At least one, so a series packed inside a single week cannot divide by zero.
  const weeks = Math.max(1, Math.round((last - first) / (7 * DAY_MS)));

  return (
    series.occurrences.length / (weeks * weekdays.length) >= WEEKLY_COVERAGE
  );
}

/**
 * The line under a series title, in full.
 *
 * Three shapes, in descending order of what can honestly be claimed: the days
 * it runs when it genuinely runs weekly, a bare count when it repeats on no
 * discernible pattern, and — for a pair — simply both dates, which is shorter
 * than any description of them could be. Inventing a rhythm for an irregular
 * schedule would be worse than admitting there isn't one; the expandable date
 * list is always the authoritative answer.
 */
export function describeSeries(series: EventSeries): string {
  const dates = series.occurrences.map((occurrence) =>
    formatShortDate(occurrence.start)
  );
  if (series.occurrences.length <= 2) return listFormat.format(dates);

  const through = ` · through ${dates[dates.length - 1]}`;
  const weekdays = seriesWeekdays(series);

  return looksWeekly(series, weekdays)
    ? `Every ${listFormat.format(weekdays)}${through}`
    : `${series.occurrences.length} dates${through}`;
}

/**
 * The time range shared by every occurrence, or empty when they disagree. A
 * series card printing one meeting's time over a schedule that moves is a card
 * that sends someone to a locked room.
 */
export function seriesTimeRange(series: EventSeries): string {
  const [first, ...rest] = series.occurrences;
  const range = formatTimeRange(first.start, first.end);

  return rest.every(
    (occurrence) => formatTimeRange(occurrence.start, occurrence.end) === range
  )
    ? range
    : '';
}
