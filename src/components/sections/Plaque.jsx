import { events, offFridays } from '../../data/events';
import { links, siteContent } from '../../data/siteContent';
import {
  describeWhen,
  floorOf,
  getPageCurrent,
  longDate,
  pastEvents,
  timeSpan,
  upcomingEvents
} from '../../lib/schedule';

// The top of the page answers one question: which room is it this Friday?
function Plaque() {
  const { hero } = siteContent;
  const current = getPageCurrent();
  const upcoming = upcomingEvents(events, current);
  const next = upcoming[0];

  if (!next) {
    const last = pastEvents(events, current).pop();
    return (
      <section id="top" aria-labelledby="top-heading" className="wrap py-10 sm:py-16">
        <h2 id="top-heading" className="text-name">
          {hero.empty.headline}
        </h2>
        {last ? <p className="mt-4 max-w-prose text-lead">{hero.empty.lastLine(longDate(last.date))}</p> : null}
        <p className="mt-2 max-w-prose text-lead">{hero.empty.body}</p>
        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base">
          <a href={links.groupme.url} target="_blank" rel="noreferrer" className="link">
            {hero.groupmeLink}
          </a>
          <a href={links.mailto} className="link">
            {hero.emailLink}
          </a>
        </p>
      </section>
    );
  }

  const when = describeWhen(next, current, offFridays, events);
  const floor = floorOf(next.room.number);

  return (
    <section id="top" aria-labelledby="top-heading" className="wrap py-10 sm:py-16">
      <p className="text-lead">{when.lead}</p>

      <h2 id="top-heading" className="mt-3 flex flex-wrap items-baseline gap-x-6 gap-y-1">
        <span className="room-number text-room text-green">{next.room.number}</span>
        <span className="text-name">{next.room.name}</span>
      </h2>

      <p className="mt-6 max-w-prose text-lead">
        {next.title}, {timeSpan(next)}. {next.building}
        {floor ? `, ${floor}` : ''}.
      </p>

      {when.gap ? <p className="mt-2 max-w-prose text-small text-pencil">{when.gap}</p> : null}

      <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base">
        <a href="#schedule" className="link">
          {hero.scheduleLink}
        </a>
        <a href={links.groupme.url} target="_blank" rel="noreferrer" className="link">
          {hero.groupmeLink}
        </a>
      </p>
    </section>
  );
}

export default Plaque;
