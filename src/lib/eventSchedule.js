const easternClock = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'America/New_York',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23'
});

export function getEventDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;

  // A meeting date is a calendar date, independent of the visitor's time zone.
  const date = new Date(`${value}T12:00:00Z`);
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value
    ? date
    : null;
}

export function formatEventDate(value, options = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric'
}) {
  const date = getEventDate(value);
  return date
    ? new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'UTC' }).format(date)
    : 'Date to be announced';
}

function timeMinutes(value) {
  const match = typeof value === 'string' && value.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) return null;

  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (hour < 1 || hour > 12 || minute > 59) return null;
  return (hour % 12) * 60 + minute + (match[3].toUpperCase() === 'PM' ? 720 : 0);
}

export function getSchedule(events, now = new Date()) {
  const current = now instanceof Date && Number.isFinite(now.getTime()) ? now : new Date();
  const parts = Object.fromEntries(
    easternClock.formatToParts(current).map(({ type, value }) => [type, value])
  );
  const today = `${parts.year}-${parts.month}-${parts.day}`;
  const currentMinute = Number(parts.hour) * 60 + Number(parts.minute);
  const sorted = [...events].filter((event) => event && typeof event === 'object').sort((a, b) => {
    const dateA = getEventDate(a.date);
    const dateB = getEventDate(b.date);
    if (!dateA) return dateB ? 1 : 0;
    if (!dateB) return -1;
    return dateA - dateB || (timeMinutes(a.startTime) ?? 0) - (timeMinutes(b.startTime) ?? 0);
  });

  return sorted.reduce((schedule, event) => {
    const date = getEventDate(event.date);
    const start = timeMinutes(event.startTime);
    const end = timeMinutes(event.endTime);
    let endDate = event.date;

    // Support a meeting ending after midnight. An unknown end time stays visible
    // through its scheduled day; a malformed date stays in upcoming for review.
    if (date && start !== null && end !== null && end < start) {
      date.setUTCDate(date.getUTCDate() + 1);
      endDate = date.toISOString().slice(0, 10);
    }
    const isPast = date && (endDate < today || (endDate === today && currentMinute >= (end ?? 1440)));
    schedule[isPast ? 'past' : 'upcoming'].push(event);
    return schedule;
  }, { upcoming: [], past: [] });
}
