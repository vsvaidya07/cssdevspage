// All the content of the site lives here. Components receive it as props and
// render it with .map(), so adding a skill or project = adding one object.

export const profile = {
  name: 'Vidhathri Vaidya',
  role: 'Information Science Engineering student',
  highlight: 'Agronex',
  tagline:
    'Led team Agronex as team leader through the Smart India Hackathon (SIH) ideathon. Into systems that connect messy real-world data to something people can actually use.',
  ascii: [
    '██╗   ██╗██╗   ██╗',
    '██║   ██║██║   ██║',
    '██║   ██║██║   ██║',
    '╚██╗ ██╔╝╚██╗ ██╔╝',
    ' ╚████╔╝  ╚████╔╝ ',
    '  ╚═══╝    ╚═══╝  ',
  ].join('\n'),
  facts: [
    { label: 'name', value: 'Vidhathri Vaidya' },
    { label: 'studying', value: '2nd year ISE · NMAMIT, Karkala' },
    { label: 'team led', value: 'Agronex — SIH ideathon' },
    { label: 'status', value: 'open to opportunities' },
  ],
};

export const navItems = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'academics', label: 'academics' },
  { id: 'activities', label: 'activities' },
  { id: 'contact', label: 'contact' },
];

export const skills = [
  { name: 'C', category: 'Languages', status: 'core', blurb: 'Procedural and close to the hardware — great for understanding memory and how programs really run.' },
  { name: 'Python', category: 'Languages', status: 'core', blurb: 'Scripting, data handling and quick prototypes.' },
  { name: 'Java', category: 'Languages', status: 'core', blurb: 'Object-oriented programming: classes, inheritance and interfaces.' },
  { name: 'HTML', category: 'Web', status: 'learning', blurb: 'The structure of the web — this site started as a plain HTML profile page.' },
  { name: 'CSS', category: 'Web', status: 'learning', blurb: 'Styling with the box model, Flexbox, Grid and responsive layouts.' },
  { name: 'JavaScript', category: 'Web', status: 'learning', blurb: 'Makes pages interactive.' },
  { name: 'React', category: 'Web', status: 'learning', blurb: 'Component-based UI — what this portfolio is built with.' },
  { name: 'Git & GitHub', category: 'Tools', status: 'learning', blurb: 'Version control, and publishing projects for others to see.' },
];

export const projects = [
  {
    id: 'agronex',
    title: 'Agronex',
    meta: 'Smart India Hackathon (SIH) · Ideathon · Team Lead',
    description:
      "Led a team through SIH's ideathon stage, taking an agriculture-focused concept from problem statement to pitch.",
    category: 'Hackathon',
    tags: ['team leadership', 'agritech', 'SIH'],
    link: null,
  },
  {
    id: 'portfolio',
    title: 'Developer Portfolio',
    meta: 'Web development course · Weeks 01–03',
    description:
      'This site. Began as a plain HTML profile page, was styled with CSS Grid and Flexbox in Week 02, and is now rebuilt from reusable React components.',
    category: 'Web',
    tags: ['HTML', 'CSS', 'React'],
    link: 'https://github.com/vsvaidya07',
  },
];

export const academics = [
  { label: '10th grade', display: '98%', percent: 98 },
  { label: '12th grade', display: '90%', percent: 90 },
  { label: '1st yr CGPA', display: '8.3', percent: 83 },
];

export const activities = [
  {
    title: 'Singing',
    description:
      'Completed Junior level in Hindustani classical vocal exams. Participated in the SA RE GA MA PA audition and made it to the last selection round.',
    tags: ['Hindustani classical', 'SA RE GA MA PA'],
  },
  {
    title: 'Drawing',
    description: 'Completed the Drawing board exam with distinction.',
    tags: ['distinction'],
  },
];

// NOTE: double-check the LinkedIn URL below matches your real profile link.
export const contact = [
  { label: 'email', text: 'vsvidhu07@gmail.com', href: 'mailto:vsvidhu07@gmail.com', copy: true },
  { label: 'github', text: 'github.com/vsvaidya07', href: 'https://github.com/vsvaidya07' },
  { label: 'linkedin', text: 'linkedin.com/in/vidhathri-vaidya', href: 'https://linkedin.com/in/vidhathri-vaidya' },
];

export const bootLines = [
  '> booting profile.exe',
  '> loading identity ...',
  '  name: Vidhathri Vaidya  [OK]',
  '> mounting /skills ...',
  '  C, Python, Java          [OK]',
  '> reading academics.txt ...  [OK]',
  '> reading activities.log ... [OK]',
  '> initializing Agronex@SIH ...',
  '  team lead handshake      [OK]',
  '> starting portfolio session',
  '',
  'welcome.',
];
