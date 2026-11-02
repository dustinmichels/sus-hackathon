// All event content lives here. Edit this file to update the site.

export const event = {
  name: 'Sustainable Project Hackathon',
  dates: 'Nov 14–15',
  year: 2026,
  room: 'Anderson 206',
  campus: 'Tufts University, Medford/Somerville',
  registerUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSfz560VsEM_RUSixJI5FSofe7ObF-xl5SGRBdbSS-0yea9HfQ/viewform?usp=dialog',
  contact: {
    organizers: 'Michael and Clarabelle',
    email: 'michael.gonzales@tufts.edu',
  },
};

export const perks = [
  'Food provided',
  'Microcontrollers and art supplies',
  '$1,125+ in cash prizes',
  'Beginner friendly, all majors welcome',
];

export const steps = [
  {
    title: 'Team up',
    body: 'Form a team of 3 to 5 students. No group? You’ll form one on the day. Group changes are open until 2:00 pm Saturday.',
  },
  {
    title: 'Get your challenge',
    body: 'Challenges are announced at 2:30 pm Saturday, and sponsors are on hand for questions.',
  },
  {
    title: 'Build',
    body: 'Use workshops, mentors, and makerspaces to turn your idea into a working solution.',
  },
  {
    title: 'Demo',
    body: 'Submit by 3:30 pm Sunday and present to the judges.',
  },
];

export const schedule = [
  {
    day: 'Saturday, Nov 14',
    events: [
      { time: '11:00 am', title: 'Check-in opens' },
      { time: '12:00 pm', title: 'Opening ceremony', note: 'Lunch, 12 to 1 pm' },
      { time: '2:00 pm', title: 'Group changes and form due' },
      { time: '2:30 pm', title: 'Challenge reveal, hacking starts' },
      { time: '6:30 pm', title: 'Dinner', note: '6:30 to 8:00 pm' },
      { time: '8:00 pm', title: 'Rooms close' },
    ],
  },
  {
    day: 'Sunday, Nov 15',
    events: [
      { time: '8:00 am', title: 'Rooms open' },
      { time: '8:30 am', title: 'Breakfast' },
      { time: '12:00 pm', title: 'Lunch' },
      { time: '3:30 pm', title: 'Projects due' },
      { time: '4:00 pm', title: 'Judging round 1', note: 'Initial review' },
      { time: '5:00 pm', title: 'Judging round 2', note: 'Finalists present' },
      { time: '7:00 pm', title: 'Closing ceremony', note: 'Winners announced' },
    ],
  },
];

export const prizes = [
  { place: '1st place', amount: '$500' },
  { place: '2nd place', amount: '$375' },
  { place: '3rd place', amount: '$250' },
];

export const judging = [
  {
    title: 'Round 1: initial review',
    body: 'Judges review projects and recordings and choose the finalists.',
  },
  {
    title: 'Round 2: finalists',
    body: 'Finalists present to a panel for 1st, 2nd, and 3rd place. Judging criteria will be announced.',
  },
];

export const makerspaces = [
  { name: 'Nolop', use: 'Making and prototyping', confirmed: true },
  { name: 'Craft Center', use: 'Wood, diagrams, prototypes', confirmed: false },
  { name: 'Data Lab', use: 'GIS and data support', confirmed: false },
];

export const faq = [
  {
    q: 'Who can join?',
    a: 'Students of any major. We expect most hackers to be Tufts students.',
  },
  {
    q: 'Do I need a team?',
    a: 'Not before the event. Teams have 3 to 5 graduate and undergraduate students. If you don’t have a group, you’ll form one on the day. Group changes are open until 2:00 pm on Saturday.',
  },
  {
    q: 'Do I need experience?',
    a: 'No. Workshops, mentors, and volunteers will help beginners.',
  },
  {
    q: 'Is food provided?',
    a: 'Yes. We plan to provide meals both days.',
  },
  {
    q: 'What materials are provided?',
    a: 'Microcontrollers and art supplies will be provided, and the makerspaces will be open.',
  },
  {
    q: 'What kind of project are you looking for?',
    a: 'Any! Your project can involve engineering, policy, art, computer science, and more. Judging criteria will be posted soon.',
  },
  {
    q: 'How are projects judged?',
    a: 'Round 1 is an initial review that picks the finalists. Finalists present in round 2 for 1st, 2nd, and 3rd place. Criteria will be announced.',
  },
];
