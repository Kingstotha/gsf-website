import { events } from '../../data/events';
import { formatEventDate, getEventDate, getSchedule } from '../../lib/eventSchedule';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

function ClockIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function EventCard({ event, isNext = false, isPast = false }) {
  const hasDate = Boolean(getEventDate(event.date));

  return (
    <article
      className={`relative rounded-2xl border p-4 sm:p-5 ${
        isNext
          ? 'border-brand-green/30 bg-brand-greenSoft/50'
          : isPast
            ? 'border-slate-200 bg-slate-50/70'
            : 'border-slate-200 bg-white'
      }`}
    >
      <div className="flex items-start gap-4 sm:gap-5">
        {hasDate ? (
          <time
            dateTime={event.date}
            aria-label={formatEventDate(event.date)}
            className={`flex w-16 shrink-0 flex-col items-center rounded-xl py-3 ${
              isNext ? 'bg-brand-green text-white' : 'bg-brand-greenSoft text-brand-greenDark'
            }`}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em]">
              {formatEventDate(event.date, { month: 'short' })}
            </span>
            <span className="my-1 font-serif text-2xl font-black leading-none">
              {formatEventDate(event.date, { day: '2-digit' })}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider">
              {formatEventDate(event.date, { weekday: 'short' })}
            </span>
          </time>
        ) : (
          <span className="flex w-16 shrink-0 items-center justify-center rounded-xl bg-slate-100 py-5 text-xs font-semibold text-slate-600">
            TBA
          </span>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
            <h3 className="text-lg font-semibold leading-7 text-slate-950">
              {event.title || 'Fellowship meeting'}
            </h3>
            {isNext ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-green/15 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-greenDark">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" aria-hidden="true" />
                Next gathering
              </span>
            ) : null}
          </div>
          {!hasDate ? <p className="mt-1 text-sm text-slate-600">Date to be announced</p> : null}

          <dl className="mt-2 space-y-1.5 text-sm leading-6 text-slate-600">
            <div className="flex items-start gap-2">
              <ClockIcon />
              <dt className="sr-only">Time</dt>
              <dd className="font-medium text-slate-800">
                {event.startTime && event.endTime
                  ? `${event.startTime} – ${event.endTime} ${event.timeZone || 'ET'}`
                  : 'Time to be announced'}
              </dd>
            </div>
            <div className="flex items-start gap-2">
              <LocationIcon />
              <dt className="sr-only">Location</dt>
              <dd>{event.location || 'Location to be announced'}</dd>
            </div>
          </dl>
          {event.description ? (
            <p className="mt-2 text-xs leading-5 text-slate-500">{event.description}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function UpcomingEvents({ now }) {
  const { upcoming: upcomingEvents, past: pastEvents } = getSchedule(events, now);
  const nextEvent = upcomingEvents.find((event) => getEventDate(event.date));

  return (
    <section id="events" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              eyebrow="Upcoming Events"
              title="Gather With Good Seed"
              description="Find the next fellowship meeting and room location at a glance."
            />
            <div className="rounded-2xl border border-brand-green/15 bg-brand-greenSoft/60 p-6">
              <p className="font-serif text-lg font-bold text-brand-greenDark">Your first time? You're welcome here.</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Meet other USF students for faith, conversation, and community. Check each meeting's time and room before you head over.
              </p>
              <Button href="#contact" variant="secondary" className="mt-5">
                Ask a Question
                <span className="ml-2" aria-hidden="true">↗</span>
              </Button>
            </div>
          </div>

          <div>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4">
              <p className="text-sm font-semibold text-slate-900">Fall 2026 gatherings</p>
              <p className="text-xs text-slate-500">All times Eastern</p>
            </div>
            <div className="space-y-3">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event, index) => (
                  <EventCard
                    key={`${event.date}-${event.location}-${index}`}
                    event={event}
                    isNext={event === nextEvent}
                  />
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-brand-green/30 bg-brand-greenSoft/60 p-8">
                  <h3 className="text-lg font-semibold text-slate-950">No upcoming dates posted yet.</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    The posted schedule has wrapped up. Join our GroupMe or follow Instagram for the next Good Seed Fellowship dates.
                  </p>
                  <Button href="#resources" variant="secondary" className="mt-5">Stay Connected</Button>
                </div>
              )}
            </div>

            {pastEvents.length > 0 ? (
              <details className="group mt-6 border-t border-slate-200 pt-4">
                <summary className="flex cursor-pointer list-none items-center justify-between rounded-lg py-2 text-sm font-medium text-slate-600 transition hover:text-brand-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-4 [&::-webkit-details-marker]:hidden">
                  Past meetings ({pastEvents.length})
                  <svg className="h-4 w-4 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="m5 7.5 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="mt-3 space-y-3">
                  {[...pastEvents].reverse().map((event, index) => (
                    <EventCard key={`${event.date}-${event.location}-${index}`} event={event} isPast />
                  ))}
                </div>
              </details>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
