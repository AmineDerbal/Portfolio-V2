import { github, linkedin, medium, concertHub, MetricsWebapp, spaceTravelersHub } from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const socialLinks = [
  {
    name: 'Github',
    url: 'https://github.com/AmineDerbal',
    icon: github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mohammed-el-amine-derbal/',
    icon: linkedin,
  },
  {
    name: 'Medium',
    url: 'https://medium.com/@aminedoran31/what-are-3-pieces-of-advice-that-you-would-give-someone-whos-just-beginning-their-journey-with-45e7cf980c5d',
    icon: medium,
  },
  // {
  //   name: 'AngelList',
  //   url: 'https://angel.co/u/mohammed-el-amine-derbal',
  //   icon: 'angelList',
  // },
];

const projects = [
  {
    name: 'ConcertHub',
    description:
      'ConcertHub is a platform where music enthusiasts can discover upcoming concerts, book tickets, and explore their favorite artists. Experience the world of music like never before with ConcertHub!',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'PostgreSQL',
        color: 'green-text-gradient',
      },
      {
        name: 'Ruby on Rails',
        color: 'pink-text-gradient',
      },
    ],
    image: concertHub,
    source_code_link: 'https://github.com/Stephen-Adom/concert-react-front-end',
    live_link: 'https://concert-react-front-end.vercel.app/',
  },
  {
    name: 'Metrics webapp',
    description:
      'Metrics webapp This React capstone project is about building a mobile web application to check a list of metrics (numeric values) that we will create making use of React and Redux and will be following this design by Nelson Sakwa on Behance.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Redux',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: MetricsWebapp,
    source_code_link: 'https://github.com/AmineDerbal/React-Capstone-project',
    live_link: 'https://idyllic-semifreddo-83ba58.netlify.app/',
  },

  {
    name: "Space Travelers' Hub",
    description:
      'In this Project, we will be working with the real live data from the SpaceX API. Our task is to build a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'Redux',
        color: 'green-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'pink-text-gradient',
      },
    ],
    image: spaceTravelersHub,
    source_code_link: 'https://github.com/AmineDerbal/Space-Travelers-Hub/',
    live_link: 'https://space-traveler-qf9m.onrender.com/',
  },
];

export { socialLinks, projects };
