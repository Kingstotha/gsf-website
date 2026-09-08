// Fall 2026 dates, taken from the Marshall Student Center room reservation.
//
// To add a date: copy one object and change the fields.
//   date         'YYYY-MM-DD'. The page sorts by this and hides a date once its end time has
//                passed in Eastern time, so nothing has to be deleted by hand.
//   kind         'bible-study' or 'game-night'. Game nights get a dashed rule and a bolder label.
//   title        What goes on the schedule: 'Bible study' or 'Game night'.
//   startTime    'h:mm AM/PM' in Eastern time. endTime the same.
//   room         { number: '2706', name: 'Ybor Room' }. The floor is worked out from the first
//                digit of the number (27xx is the second floor, 37xx the third).
//   food         true when there is food.
//   description  One short line that says something the other columns don't.
//
// Unconfirmed dates stay commented out at the bottom until the room is booked.

export const term = 'Fall 2026';

const MSC = 'Marshall Student Center';

export const events = [
  {
    date: '2026-09-11',
    kind: 'bible-study',
    title: 'Bible study',
    startTime: '7:00 PM',
    endTime: '8:45 PM',
    timeZone: 'ET',
    building: MSC,
    room: { number: '2706', name: 'Ybor Room' },
    food: false,
    description: 'First booked Friday of the fall.'
  },
  {
    date: '2026-09-25',
    kind: 'bible-study',
    title: 'Bible study',
    startTime: '7:00 PM',
    endTime: '8:45 PM',
    timeZone: 'ET',
    building: MSC,
    room: { number: '2707', name: 'Spirit Room' },
    food: false,
    description: 'Two weeks after the first one; nothing on the 18th.'
  },
  {
    date: '2026-10-02',
    kind: 'game-night',
    title: 'Game night',
    startTime: '7:30 PM',
    endTime: '9:15 PM',
    timeZone: 'ET',
    building: MSC,
    room: { number: '3712', name: 'Columbia Room' },
    food: true,
    description: 'Games instead of Bible study, a later start, and the first third-floor room of the fall.'
  },
  {
    date: '2026-10-09',
    kind: 'bible-study',
    title: 'Bible study',
    startTime: '7:00 PM',
    endTime: '8:45 PM',
    timeZone: 'ET',
    building: MSC,
    room: { number: '2703', name: 'Honors Room' },
    food: false,
    description: 'Back to the usual 7:00 start.'
  },
  {
    date: '2026-10-16',
    kind: 'bible-study',
    title: 'Bible study',
    startTime: '7:30 PM',
    endTime: '9:15 PM',
    timeZone: 'ET',
    building: MSC,
    room: { number: '3704', name: 'Tarpon Room' },
    food: false,
    description: 'The one Bible study that starts at 7:30.'
  },
  {
    date: '2026-11-06',
    kind: 'game-night',
    title: 'Game night',
    startTime: '7:00 PM',
    endTime: '8:45 PM',
    timeZone: 'ET',
    building: MSC,
    room: { number: '2703', name: 'Honors Room' },
    food: true,
    description: 'Second game night, same Honors Room as October 9.'
  },
  {
    date: '2026-11-13',
    kind: 'bible-study',
    title: 'Bible study',
    startTime: '7:00 PM',
    endTime: '8:45 PM',
    timeZone: 'ET',
    building: MSC,
    room: { number: '3709', name: 'Heron Room' },
    food: false,
    description: 'Last booked Friday of the fall.'
  }

  // Unconfirmed. Uncomment once the room is booked.
  // {
  //   date: '2026-10-23',
  //   kind: 'bible-study',
  //   title: 'Bible study',
  //   startTime: '7:00 PM',
  //   endTime: '8:45 PM',
  //   timeZone: 'ET',
  //   building: MSC,
  //   room: { number: '2703', name: 'Honors Room' },
  //   food: false,
  //   description: ''
  // },

  // Unconfirmed: date not confirmed and no room booked. Fill in and uncomment once it is.
  // {
  //   date: '2026-10-30',
  //   kind: 'bible-study',
  //   title: 'Bible study',
  //   startTime: '7:00 PM',
  //   endTime: '8:45 PM',
  //   timeZone: 'ET',
  //   building: MSC,
  //   room: { number: '', name: '' },
  //   food: false,
  //   description: ''
  // },

  // Unconfirmed: no room booked yet. Add the room and uncomment once it is.
  // {
  //   date: '2026-11-20',
  //   kind: 'bible-study',
  //   title: 'Bible study',
  //   startTime: '7:00 PM',
  //   endTime: '8:45 PM',
  //   timeZone: 'ET',
  //   building: MSC,
  //   room: { number: '', name: '' },
  //   food: false,
  //   description: ''
  // }
];

// Fridays with no meeting. Shown under the schedule, and at the top of the page during the
// week before that Friday, until the date has passed.
export const offFridays = [
  { date: '2026-09-18', text: 'No meeting Friday, September 18.' }
];

// Notes shown under the schedule until the date in `until` has passed.
export const notes = [
  {
    until: '2026-12-04',
    text: 'Nothing over Thanksgiving week or finals. The fall semester ends Friday, December 4.'
  }
];
