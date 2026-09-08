import { XMLParser } from 'fast-xml-parser';
import type { WingspanEvent } from './events';

/**
 * Cal State LA's CampusGroups event feed, narrowed to topic 6552279
 * (`Wingspan`). That returns 8 items in ~34 KB, against 320 items and 1.27 MB
 * unfiltered.
 *
 * No `group_ids` param, deliberately: this site covers Wingspan across every
 * department, not just the U-SU's four groups. Today every Wingspan event
 * happens to be hosted by the Center for Student Involvement, so dropping it
 * adds nothing right now — the point is that another department can tag
 * Wingspan tomorrow and appear here without a code change.
 *
 * `topic_id` is undocumented and singular. `topic_ids`, `eventTopicIds` and
 * `topics` are all silently ignored, each returning the full unfiltered feed
 * rather than erroring — an unrecognized filter here does not fail loudly, it
 * floods. Callers must filter by topic name again after parsing.
 */
const FEED_URL =
  'https://calstatela.campusgroups.com/rss_events?time_range=upcoming&topic_id=6552279';

/**
 * Next 15 leaves `fetch` uncached by default, so this is set explicitly rather
 * than inherited. Matches the five minutes the U-SU proxy serves.
 */
const REVALIDATE_SECONDS = 300;

/** `eventTopicsSeparated` collapses to a bare string when it holds no children. */
type RawTopics = { eventTopic?: string | string[] } | string | undefined;

type RawItem = {
  eventId?: string;
  title?: string;
  eventStartDateTime?: string;
  eventEndDateTime?: string;
  eventLocation?: string;
  description?: string;
  eventOriginalPhotoFullUrl?: string;
  eventLink?: string;
  group?: string;
  eventTopicsSeparated?: RawTopics;
};

type RawFeed = {
  rss?: { channel?: { item?: RawItem | RawItem[] } };
};

const parser = new XMLParser({
  ignoreAttributes: true,
  trimValues: true,
  // Keep event ids and ISO timestamps as authored; the default coerces
  // anything that merely looks numeric.
  parseTagValue: false,
});

const text = (value: unknown): string =>
  typeof value === 'string' ? value.trim() : '';

/**
 * Topics arrive in three shapes across the live feed: an empty string when the
 * event has none (121 of 319 unfiltered items), `{ eventTopic: string }` for
 * exactly one (20 items), and `{ eventTopic: string[] }` for two or more
 * (178). Normalizing at this boundary means the rest of the app only ever sees
 * `string[]`, and the one-tag event does not crash.
 *
 * These are the repeated `<eventTopic>` children, not the sibling
 * `<eventTopics>` CSV. Both hold the same values, but the children are
 * comma-proof, and `Wingspan` is the 7th tag on the LEAD Series events — so
 * anything reading only the first child would never match it.
 */
function normalizeTopics(raw: RawTopics): string[] {
  if (typeof raw !== 'object' || raw === null) return [];

  const topics = raw.eventTopic;
  if (topics === undefined) return [];

  return (Array.isArray(topics) ? topics : [topics])
    .map((topic) => text(topic))
    .filter(Boolean);
}

/** `Main Campus Walkway, 5154 State University Drive, ...` -> `Main Campus Walkway`. */
function primaryLocation(raw: string): string {
  return raw.split(',')[0].trim();
}

function toEvent(item: RawItem): WingspanEvent | null {
  const id = text(item.eventId);
  const start = text(item.eventStartDateTime);
  // Without an id or a start time the event cannot be keyed or ordered.
  if (!id || !start) return null;

  return {
    id,
    title: text(item.title),
    start,
    end: text(item.eventEndDateTime),
    location: primaryLocation(text(item.eventLocation)),
    description: text(item.description),
    flyerUrl: text(item.eventOriginalPhotoFullUrl),
    rsvpUrl: text(item.eventLink),
    group: text(item.group),
    topics: normalizeTopics(item.eventTopicsSeparated),
  };
}

/**
 * Fetch and parse the feed. Server-side only — CampusGroups sends no CORS
 * headers, but a server component needs no proxy to work around that.
 *
 * `feedUrl` is injectable so the topic-name filter can be exercised against
 * the unfiltered feed.
 */
export async function fetchCampusGroupsEvents(
  feedUrl: string = FEED_URL
): Promise<WingspanEvent[]> {
  const response = await fetch(feedUrl, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!response.ok) {
    throw new Error(`CampusGroups feed responded ${response.status}`);
  }

  const parsed = parser.parse(await response.text()) as RawFeed;
  const items = parsed.rss?.channel?.item;
  if (!items) return [];

  // A single-item channel collapses to one object, exactly like topics above.
  return (Array.isArray(items) ? items : [items])
    .map(toEvent)
    .filter((event): event is WingspanEvent => event !== null);
}
