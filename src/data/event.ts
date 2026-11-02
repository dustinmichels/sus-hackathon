// All event content lives here. Edit this file to update the site.

export const event = {
  name: 'Sustainable Project Hackathon',
  dates: 'Nov 14–15',
  year: 2026,
  room: 'Anderson 206',
  registerUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSfz560VsEM_RUSixJI5FSofe7ObF-xl5SGRBdbSS-0yea9HfQ/viewform?usp=dialog',
  email: 'michael.gonzales@tufts.edu',
};

// Wording from the flyers.
export const perks = [
  'Food, Microcontrollers & Art Supplies Provided',
  '$1000+ in Cash Prizes',
  'Beginner Friendly and All Majors Welcome!',
];

// From the event website, trimmed to the key times.
export const schedule = [
  {
    day: 'Saturday, Nov 14',
    events: [
      { time: '11:00 am', title: 'Check-in opens' },
      { time: '12:00 pm', title: 'Opening ceremony and lunch' },
      { time: '2:30 pm', title: 'Challenge reveal, hacking starts' },
      { time: '6:30 pm', title: 'Dinner' },
      { time: '8:00 pm', title: 'Rooms close' },
    ],
  },
  {
    day: 'Sunday, Nov 15',
    events: [
      { time: '8:00 am', title: 'Rooms open, breakfast' },
      { time: '3:30 pm', title: 'Projects due' },
      { time: '4:00 pm', title: 'Judging' },
      { time: '7:00 pm', title: 'Closing ceremony, winners announced' },
    ],
  },
];

export const prizes = [
  { place: '1st place', amount: '$500' },
  { place: '2nd place', amount: '$375' },
  { place: '3rd place', amount: '$250' },
];
