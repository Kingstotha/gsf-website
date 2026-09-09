// All the words on the site live here. Dates, rooms and times live in events.js.

export const links = {
  email: 'goodseedfellowship1@gmail.com',
  mailto:
    'mailto:goodseedfellowship1@gmail.com?subject=Message%20from%20Good%20Seed%20Fellowship%20Website',
  phone: '+1 (813) 966-8180',
  tel: 'tel:+18139668180',
  instagram: {
    handle: '@goodseedfellowship',
    url: 'https://www.instagram.com/goodseedfellowship?igsh=cDd6b3hjdGZhcjE0'
  },
  groupme: {
    name: 'New Members GroupMe',
    url: 'https://groupme.com/join_group/113682070/e5jNFBYh'
  }
};

export const navLinks = [
  { label: 'Fall 2026', href: '#schedule' },
  { label: 'Fridays', href: '#fridays' },
  { label: 'Questions', href: '#questions' },
  { label: 'Contact', href: '#contact' }
];

export const siteContent = {
  brandName: 'Good Seed Fellowship',
  shortName: 'GSF',
  orgParent: 'The Redeemed Christian Church of God',
  seal: {
    alt: 'Seal of Good Seed Fellowship, The Redeemed Christian Church of God: a white dove on a black disc'
  },

  masthead: {
    homeLabel: 'Good Seed Fellowship, back to the top',
    menuLabel: 'Menu',
    closeLabel: 'Close',
    button: { label: 'Join the GroupMe', href: links.groupme.url }
  },

  hero: {
    scheduleLink: 'See the fall schedule',
    groupmeLink: 'Join the GroupMe',
    emailLink: 'Email us',
    empty: {
      headline: 'No date posted yet.',
      lastLine: (date) => `The last booked Friday was ${date}.`,
      body: 'Ask in the GroupMe or email us.'
    }
  },

  about: {
    paragraphs: [
      'Good Seed Fellowship is a Bible study for students at the University of South Florida, run under The Redeemed Christian Church of God. It meets on Friday nights, an hour and forty-five minutes at a time, in the Marshall Student Center (the MSC).',
      'The room changes most weeks, which is why it’s at the top of this page.',
      'It’s a small, growing group, and anyone can come, USF student or not.'
    ]
  },

  schedule: {
    intro:
      'Every date below comes from the MSC room reservation. If a Friday isn’t listed, no room is held for it yet.',
    columns: { date: 'Date', room: 'Room', what: 'What', time: 'Time' },
    nextLabel: 'Next',
    foodLabel: 'with food',
    empty: 'No dates are posted right now.',
    emptyLinks: { groupme: 'Join the GroupMe', email: 'Email us' }
  },

  fridays: {
    heading: 'Fridays',
    items: [
      {
        title: 'Bible study',
        body: 'The usual Friday, 7:00 to 8:45 PM. The first fifteen minutes or so are greetings, introductions and discussion; then worship, prayer and the study. A night that starts at 7:30 instead says so on its row of the schedule.'
      },
      {
        title: 'Game night',
        body: 'Games and food instead of Bible study. This fall there are two, both on the schedule.'
      }
    ]
  },

  questions: {
    heading: 'Questions',
    items: [
      {
        question: 'Do I have to be RCCG, or Nigerian, or a USF student, to come?',
        answer:
          'No. Anyone can come. GSF runs under The Redeemed Christian Church of God (RCCG), but you don’t have to be part of RCCG, or from anywhere in particular, or enrolled at USF, to show up.'
      },
      {
        question: 'Is it okay to come if I’m not sure what I believe?',
        answer: 'Yes. Anyone can come, whatever they believe.'
      },
      {
        question: 'Will I be asked to read or pray out loud?',
        answer: 'Only if you’re comfortable with it.'
      },
      {
        question: 'Do I need to bring a Bible?',
        answer: 'Bring one if you have one. A Bible app on your phone is fine; nobody minds if everything’s digital.'
      },
      {
        question: 'Can I come late or leave early?',
        answer: 'Yes. Come and go as you need to.'
      },
      {
        question: 'Is there food?',
        answer: 'Most Fridays, yes, and always at game night.'
      },
      {
        question: 'Where is the Marshall Student Center?',
        answer: 'It’s the student union on USF’s Tampa campus. Every date this fall is inside it.'
      },
      {
        question: 'How do I find the room once I’m inside?',
        answer:
          'Use the number. The first digit is the floor, so 2706 is on the second floor and 3709 is on the third. Each room has its name and number on the plaque by the door; match both to the room at the top of this page.'
      },
      {
        question: 'How do I know if the room changed?',
        answer:
          'Room changes go out in the GroupMe before Friday. If you’re at the door and something looks off, message the GroupMe or call the number at the bottom of this page.'
      }
    ]
  },

  contact: {
    heading: 'Contact',
    rows: [
      {
        label: 'Email',
        value: links.email,
        href: links.mailto,
        note: 'Questions about a date or a room.'
      },
      {
        label: 'Phone',
        value: links.phone,
        href: links.tel,
        note: 'Someone answers on Friday evenings.'
      },
      {
        label: 'GroupMe',
        value: `Join the ${links.groupme.name}`,
        href: links.groupme.url,
        external: true,
        note: 'A group chat for people new to GSF. Room changes are posted there before Friday.'
      },
      {
        label: 'Instagram',
        value: links.instagram.handle,
        href: links.instagram.url,
        external: true
      },
      {
        label: 'Where',
        value: 'University of South Florida, Tampa, FL',
        note: 'On Friday nights, the Marshall Student Center.'
      }
    ]
  },

  footer: {
    parentLine: 'Good Seed Fellowship is part of The Redeemed Christian Church of God.',
    verse: '“I am the vine; you are the branches.” John 15:5',
    copyright: 'Copyright 2026 Good Seed Fellowship - University of South Florida'
  }
};
