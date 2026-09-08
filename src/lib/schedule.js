// Date and time helpers for the schedule. Everything is worked out in Eastern time so a
// visitor in another time zone, or a build server, never sees the wrong Friday.

const TIME_ZONE = 'America/New_York';
const FRIDAY = 5;

// The current date ('YYYY-MM-DD') and minutes since midnight, in Eastern time.
export function getCurrent(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  }).formatToParts(now);
  const get = (type) => parts.find((part) => part.type === type)?.value ?? '00';
  return {
    date: `${get('year')}-${get('month')}-${get('day')}`,
    minutes: (Number(get('hour')) % 24) * 60 + Number(get('minute'))
  };
}

// In development only, `?now=2026-10-23T19:00` pretends it is that moment (local time),
// which makes it easy to look at the gap week and the empty state.
export function getPageCurrent() {
  if (import.meta.env.DEV && typeof window !== 'undefined') {
    const override = new URLSearchParams(window.location.search).get('now');
    if (override && !Number.isNaN(Date.parse(override))) {
      return getCurrent(new Date(override));
    }
  }
  return getCurrent();
}

function toUtcDate(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

export function addDays(iso, days) {
  const date = toUtcDate(iso);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function formatDate(iso, options) {
  return new Intl.DateTimeFormat('en-US', { timeZone: 'UTC', ...options }).format(toUtcDate(iso));
}

// 'Friday, September 11'
export function longDate(iso) {
  return formatDate(iso, { weekday: 'long', month: 'long', day: 'numeric' });
}

// 'September 11'
export function monthDay(iso) {
  return formatDate(iso, { month: 'long', day: 'numeric' });
}

// 'Fri Sep 11'
export function shortDate(iso) {
  return `${formatDate(iso, { weekday: 'short' })} ${formatDate(iso, { month: 'short', day: 'numeric' })}`;
}

// '7:00 PM' -> minutes since midnight. Returns null if the string is not in that shape.
export function parseTime(text) {
  const match = /^(\d{1,2}):(\d{2})\s*([AP]M)$/i.exec(String(text).trim());
  if (!match) return null;
  let hours = Number(match[1]) % 12;
  if (match[3].toUpperCase() === 'PM') hours += 12;
  return hours * 60 + Number(match[2]);
}

// True once the event's end time has passed.
export function isOver(event, current) {
  if (event.date < current.date) return true;
  if (event.date > current.date) return false;
  const end = parseTime(event.endTime);
  return end === null ? false : current.minutes >= end;
}

export function sortByDate(list) {
  return [...list].sort((a, b) => a.date.localeCompare(b.date));
}

export function upcomingEvents(list, current) {
  return sortByDate(list).filter((event) => !isOver(event, current));
}

export function pastEvents(list, current) {
  return sortByDate(list).filter((event) => isOver(event, current));
}

// '2706' -> 'second floor'. The first digit of a Marshall Student Center room number is its floor.
export function floorOf(roomNumber) {
  const names = [null, 'first floor', 'second floor', 'third floor', 'fourth floor', 'fifth floor'];
  const digit = Number(String(roomNumber ?? '').trim()[0]);
  return names[digit] ?? null;
}

// '7:00 to 8:45 PM'
export function timeSpan(event) {
  const start = String(event.startTime).trim();
  const end = String(event.endTime).trim();
  const meridiem = (text) => (/([AP]M)$/i.exec(text) || [])[1]?.toUpperCase();
  const shortStart =
    meridiem(start) && meridiem(start) === meridiem(end) ? start.replace(/\s*[AP]M$/i, '') : start;
  return `${shortStart} to ${end}`;
}

export function nextFridayOnOrAfter(iso) {
  const weekday = toUtcDate(iso).getUTCDay();
  return addDays(iso, (FRIDAY - weekday + 7) % 7);
}

// The first line of the hero, and a note for a Friday with nothing on it.
// `event` is the next meeting; `allEvents` is the full list, used to tell whether a meeting
// already happened today (in which case "this Friday" means next week).
export function describeWhen(event, current, offFridays = [], allEvents = []) {
  if (event.date === current.date) {
    return { lead: `Tonight, ${longDate(event.date)}`, gap: null };
  }
  let thisFriday = nextFridayOnOrAfter(current.date);
  if (thisFriday === current.date && allEvents.some((item) => item.date === current.date)) {
    thisFriday = addDays(thisFriday, 7);
  }
  if (event.date === thisFriday) {
    return { lead: `This Friday, ${monthDay(event.date)}`, gap: null };
  }
  const lead = `Next meeting: ${longDate(event.date)}`;
  if (event.date < thisFriday) {
    return { lead, gap: null };
  }
  const off = offFridays.find((note) => note.date === thisFriday);
  return {
    lead,
    gap: off ? off.text : `Nothing is booked for Friday, ${monthDay(thisFriday)} yet.`
  };
}

// Footnotes for the schedule: off Fridays that have not passed, and notes still in date.
export function activeNotes(offFridays, notes, current) {
  return [
    ...offFridays.filter((note) => note.date >= current.date).map((note) => note.text),
    ...notes.filter((note) => note.until >= current.date).map((note) => note.text)
  ];
}
