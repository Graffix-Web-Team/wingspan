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

export type DateBadge = { month: string; day: string; year: string };

/**
 * The year is always returned, never conditionally hidden. Wingspan
 * programming spans the academic year — the current run is September 2026
 * through May 2027 — so `FEB 3` read in September is ambiguous. Deciding to
 * hide it would also mean calling `new Date()` during render, which can
 * disagree between server and client across a New Year boundary.
 */
export function formatDateBadge(iso: string): DateBadge {
  const parts = badgeFormat.formatToParts(new Date(iso));
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((candidate) => candidate.type === type)?.value ?? '';

  return { month: part('month'), day: part('day'), year: part('year') };
}

export function formatLongDate(iso: string): string {
  return longDateFormat.format(new Date(iso));
}

export function formatTimeRange(start: string, end: string): string {
  const from = timeFormat.format(new Date(start));
  if (Number.isNaN(Date.parse(end))) return from;

  return `${from} – ${timeFormat.format(new Date(end))}`;
}
