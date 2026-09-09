import { events, notes, offFridays, term } from '../../data/events';
import { links, siteContent } from '../../data/siteContent';
import { activeNotes, floorOf, getPageCurrent, shortDate, timeSpan, upcomingEvents } from '../../lib/schedule';
import Section from '../ui/Section';

// One row of the schedule. Below md the cells stack; from md up it is a real table row.
function ScheduleRow({ event, isNext }) {
  const { schedule } = siteContent;
  const isGameNight = event.kind === 'game-night';
  const floor = floorOf(event.room.number);

  return (
    <tr
      role="row"
      aria-current={isNext ? 'true' : undefined}
      className={`block border-t md:table-row ${isGameNight ? 'border-dashed border-ink' : 'border-solid border-hairline'}`}
    >
      <td role="cell" className="block pt-5 align-top md:table-cell md:w-[8.5rem] md:py-5 md:pr-6">
        <span className="whitespace-nowrap text-base font-semibold">{shortDate(event.date)}</span>
        {isNext ? (
          <span className="ml-2 text-small font-semibold text-green md:ml-0 md:block">{schedule.nextLabel}</span>
        ) : null}
      </td>

      <td role="cell" className="block pt-1 align-top md:table-cell md:min-w-[13rem] md:py-5 md:pr-6">
        <span className="text-row">{event.room.number}</span>{' '}
        <span className="text-base font-medium">{event.room.name}</span>
        {floor ? <span className="block text-small text-pencil">{floor}</span> : null}
      </td>

      <td role="cell" className="block pt-2 align-top md:table-cell md:w-[16rem] md:py-5 md:pr-6">
        <span className={`text-body ${isGameNight ? 'font-bold' : ''}`}>{event.title}</span>
        {event.food ? <span className="text-body">, {schedule.foodLabel}</span> : null}
        {event.description ? <span className="block text-small text-pencil">{event.description}</span> : null}
      </td>

      <td role="cell" className="block pb-5 pt-1 align-top text-small text-pencil md:table-cell md:w-[7rem] md:py-5">
        {timeSpan(event)}
      </td>
    </tr>
  );
}

// The fall schedule as a ruled table. Past dates are filtered out and never shown.
function Schedule() {
  const { schedule } = siteContent;
  const current = getPageCurrent();
  const upcoming = upcomingEvents(events, current);
  const nextDate = upcoming[0]?.date;
  const footnotes = activeNotes(offFridays, notes, current);

  return (
    <Section id="schedule" heading={term}>
      <p className="max-w-prose text-body">{schedule.intro}</p>

      {upcoming.length > 0 ? (
        <table role="table" className="mt-8 block border-collapse border-b border-hairline md:table">
          <caption className="sr-only">{term} dates, rooms and times</caption>
          <thead role="rowgroup" className="sr-only">
            <tr role="row">
              <th role="columnheader" scope="col">{schedule.columns.date}</th>
              <th role="columnheader" scope="col">{schedule.columns.room}</th>
              <th role="columnheader" scope="col">{schedule.columns.what}</th>
              <th role="columnheader" scope="col">{schedule.columns.time}</th>
            </tr>
          </thead>
          <tbody role="rowgroup" className="block md:table-row-group">
            {upcoming.map((event) => (
              <ScheduleRow key={`${event.date}-${event.room.number}`} event={event} isNext={event.date === nextDate} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="mt-8 flex max-w-prose flex-wrap gap-x-6 gap-y-2 text-body">
          <span>{schedule.empty}</span>
          <a href={links.groupme.url} target="_blank" rel="noreferrer" className="link">
            {schedule.emptyLinks.groupme}
          </a>
          <a href={links.mailto} className="link">
            {schedule.emptyLinks.email}
          </a>
        </p>
      )}

      {footnotes.length > 0 ? (
        <ul className="mt-5 max-w-prose space-y-1 text-small text-pencil">
          {footnotes.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      ) : null}
    </Section>
  );
}

export default Schedule;
