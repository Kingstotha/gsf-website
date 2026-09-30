import { events } from '../../data/events';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric'
});

const monthFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short'
});

const dayFormatter = new Intl.DateTimeFormat('en-US', {
  day: '2-digit'
});

function getEventDate(date) {
  return new Date(`${date}T00:00:00`);
}

function getTodayStart() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

function EventCard({ event, isNext = false, isPast = false }) {
  const eventDate = getEventDate(event.date);

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isNext
          ? 'border-brand-green/40 ring-4 ring-brand-green/10'
          : 'border-slate-200'
      } ${isPast ? 'opacity-70' : ''}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 ${
          isNext ? 'bg-brand-green' : 'bg-slate-200'
        }`}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div
          className={`flex w-full shrink-0 items-center justify-between rounded-xl border px-4 py-3 sm:w-24 sm:flex-col sm:justify-center ${
            isNext
              ? 'border-brand-green/30 bg-brand-greenSoft text-brand-greenDark'
              : 'border-slate-200 bg-slate-50 text-slate-700'
          }`}
        >
          <span className="text-xs font-bold uppercase tracking-widest">
            {monthFormatter.format(eventDate)}
          </span>
          <span className="font-serif text-3xl font-black leading-none">
            {dayFormatter.format(eventDate)}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            {isNext ? (
              <span className="rounded-full bg-brand-green px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                Next Up
              </span>
            ) : null}
            {isPast ? (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Past
              </span>
            ) : null}
          </div>

          <h3 className="mt-3 text-xl font-semibold text-slate-950">
            {event.title}
          </h3>
          {event.description ? (
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {event.description}
            </p>
          ) : null}

          <dl className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-3">
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Date
              </dt>
              <dd className="mt-1 font-medium text-slate-900">
                {dateFormatter.format(eventDate)}
              </dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-3">
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Time
              </dt>
              <dd className="mt-1 font-medium text-slate-900">
                {event.startTime} - {event.endTime} {event.timeZone}
              </dd>
            </div>
            <div className="rounded-xl bg-slate-50 p-3 sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Location
              </dt>
              <dd className="mt-1 font-medium text-slate-900">
                {event.location}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}

function UpcomingEvents() {
  const today = getTodayStart();
  const sortedEvents = [...events].sort(
    (a, b) => getEventDate(a.date) - getEventDate(b.date)
  );
  const upcomingEvents = sortedEvents.filter((event) => getEventDate(event.date) >= today);
  const pastEvents = sortedEvents.filter((event) => getEventDate(event.date) < today);
  const nextEventDate = upcomingEvents[0]?.date;

  return (
    <section id="events" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Upcoming Events"
              title="Gather With Good Seed"
              description="Find the next fellowship meeting and room location at a glance."
            />
            <div className="rounded-2xl border border-brand-green/20 bg-brand-greenSoft p-5">
              <p className="text-sm font-semibold text-brand-greenDark">
                Meetings are open to students who want Christian fellowship, worship, and community on campus.
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href="#contact" className="justify-center">
                  Ask a Question
                </Button>
                <Button href="#resources" variant="secondary" className="justify-center bg-white">
                  Stay Updated
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {upcomingEvents.length > 0 ? (
              upcomingEvents.map((event) => (
                <EventCard
                  key={`${event.date}-${event.location}`}
                  event={event}
                  isNext={event.date === nextEventDate}
                />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-brand-green/30 bg-brand-greenSoft/60 p-8 text-center">
                <h3 className="text-xl font-semibold text-slate-950">
                  No upcoming events are posted yet.
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-700">
                  Check back soon, or join our GroupMe and follow Instagram for the latest Good Seed Fellowship updates.
                </p>
              </div>
            )}

            {pastEvents.length > 0 ? (
              <div className="pt-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Past Events
                </p>
                <div className="space-y-4">
                  {pastEvents.map((event) => (
                    <EventCard
                      key={`${event.date}-${event.location}`}
                      event={event}
                      isPast
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
