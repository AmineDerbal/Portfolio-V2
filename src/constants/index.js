import {
  github,
  linkedin,
  medium,
  concertHub,
  MetricsWebapp,
  spaceTravelersHub,
  web,
  backend,
  creator,
  recipe,
  WeatherApp,
  mathMagician,
  clarifion,
  HomeNovel,
  gitlab,
  hardwareApp,
} from '../assets';

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
    name: 'GitLab,',
    url: 'https://gitlab.com/AmineDerbal',
    icon: gitlab,
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
];

const projects = [
  {
    name: 'Hardware Ecommerce',
    description:
      'An ecommerce website project that allows to display add and order electronic pc hardware , built with Laravel and VueJS (still in development).',
    tags: [
      {
        name: 'Pinia',
        color: 'blue-text-gradient',
      },
      {
        name: 'VueJS',
        color: 'green-text-gradient',
      },
      {
        name: 'Laravel',
        color: 'pink-text-gradient',
      },
    ],
    image: hardwareApp,
    source_code_link:
      'https://github.com/AmineDerbal/laravel-hardware-ecommerce',
  },
  {
    name: 'HomeNovel',
    description:
      'A desktop App scrapper built with Electron and NextJs, utilizing Puppeteer to scrape stories from ScribbleHub website and download it as PDF (still in development).',
    tags: [
      {
        name: 'Electron',
        color: 'blue-text-gradient',
      },
      {
        name: 'NextJS',
        color: 'green-text-gradient',
      },
      {
        name: 'SQLite',
        color: 'pink-text-gradient',
      },
    ],
    image: HomeNovel,
    source_code_link: 'https://github.com/AmineDerbal/home-Novel-nextron-V2',
    source_code_gitlab: 'https://gitlab.com/AmineDerbal/home-novel',
  },
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
    name: 'CLarifion',
    description:
      ' clarifion-upsell This react project is about coverting a Figma Design into a web app while maintaining the design for both the desktop and mobile versions.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Redux',
        color: 'pink-text-gradient',
      },
    ],
    image: clarifion,
    source_code_link: 'https://github.com/AmineDerbal/clarifion-upsell',
    source_code_gitlab: 'https://gitlab.com/AmineDerbal/clarifion-upsell',
    live_link: 'https://clarifion-et2h.onrender.com/',
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
    source_code_gitlab: 'https://gitlab.com/AmineDerbal/metrics-webapp',
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
    source_code_gitlab: 'https://gitlab.com/AmineDerbal/space-travelers-hub',
    live_link: 'https://space-traveler-qf9m.onrender.com/',
  },
  {
    name: 'Recipe App',
    description:
      'The rails-recipe-app is a classic example of a recipe website, that keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. Also, since sharing recipes is an important part of cooking the app should allow you to make them public so anyone can access them.',
    tags: [
      {
        name: 'Bootstrap',
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
    image: recipe,
    source_code_link: 'https://github.com/AmineDerbal/rails-recipe',
    source_code_gitlab: 'https://gitlab.com/AmineDerbal/recipe-app',
    live_link: 'https://rails-recipe-apj7.onrender.com/',
  },
  {
    name: 'Weather App',
    description:
      'A website that fetches the current weather from OpenWeatherMap API for the input city And display Them.',
    tags: [
      {
        name: 'Express',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: WeatherApp,
    source_code_link: 'https://github.com/AmineDerbal/Weather-App/tree/main',
    live_link: 'https://weather-app.cyberamined31.repl.co/',
  },
  {
    name: 'Math Magicians',
    description:
      'Math Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations. Read a random math-related quote. This project is Built using React front end framework.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'JavaScript',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: mathMagician,
    source_code_link: 'https://github.com/AmineDerbal/Math-Magicians-React',
    live_link: 'https://math-magician-zppr.onrender.com/',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
    skills: [
      {
        name: 'Vue3',
      },
      {
        name: 'Pinia',
      },
      {
        name: 'React',
      },
      {
        name: 'Redux',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'NodeJS',
      },
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'Jest',
      },
      {
        name: 'Figma',
      },
    ],
  },

  {
    title: 'Backend Developer',
    icon: backend,
    skills: [
      {
        name: 'Laravel',
      },
      {
        name: 'Ruby on Rails',
      },
      {
        name: 'MySQL',
      },
      {
        name: 'PostgreSQL',
      },
      {
        name: 'Ruby',
      },
      {
        name: 'RSpec',
      },
      {
        name: 'Capybara',
      },
      {
        name: 'Selenium',
      },
    ],
  },
  {
    title: 'Other Professional Skills',
    icon: creator,
    skills: [
      {
        name: 'Git',
      },
      {
        name: 'GitHub',
      },
      {
        name: 'Render,Netlify',
      },
      {
        name: 'Remote Pair-Programming',
      },
      {
        name: 'Dev Tools',
      },
    ],
  },
];

export { socialLinks, projects, services };
