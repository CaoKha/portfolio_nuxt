export const useMyConstants = () => {
  const headers = [
    'About',
    'Experiences',
    'Projects'
  ]

  const experiences = [
    {
      date: 'Sep 2023 — Present',
      job: 'Software Engineer',
      company_name: 'Allianz Trade',
      link: 'https://www.allianz-trade.fr/',
      content: 'Automating data analysis processes of many legacy c/c++ projects. \
    creating automation scripts and cli tool. Transforming legacy plm documents into git history for better tracking system',
      tech_stack: ['Rust', 'Python', 'C', 'C++', 'Batch File', 'Polars', 'Makefile', 'Cmake']
    },
    {
      date: 'Sep 2021 — Sep 2023',
      job: 'Fullstack Engineer',
      company_name: 'Federation Francaise de Football',
      link: 'https://www.fff.fr/',
      content: 'Developed and maintained multiple applications and tools for internal FFF employees \
              such as payment app, event organizers app, document management app, etc',
      tech_stack: ['React', 'Angular', 'HTML', 'CSS', 'Python', 'FastAPI', 'Javascript', 'Typescript',
        'PrimeNG', 'MaterialUI', 'Bootstrap', 'TailwindCSS', 'Traefik', 'Azure', 'MongoDB', 'Redis']
    },
    {
      date: 'Sep 2020 — Mars 2021',
      job: 'Deep Learning Engineer',
      company_name: 'Fintricity',
      link: 'https://www.fintricity.com/',
      content: 'Researched and developed a Deep Learning Model for Weed Detection App. \
              The Deep Learning Model can differentiate different growth stage of the plant \
              Worked with a researcher to implement his solution into Amazon Web Service',
      tech_stack: ['Python', 'Numpy', 'FastAI', 'OpenCV', 'AWS']
    },
    {
      date: 'Mars 2019 — Sep 2019',
      job: 'Robotics Engineer',
      company_name: 'Trimble Inc',
      link: 'https://www.trimble.com/',
      content: 'Researched and developed a synchronization method between motion sensors and camera on a mobile robot. \
              Worked with a researcher to implement his solution onto navigation system of the company',
      tech_stack: ['C++', 'CMake', 'Boost', 'OpenCV', 'Python', 'FPGA']
    }
  ];
  const projects = [
    {
      title: 'Finite State Machine Mobile Robot',
      link: '/projects/SumoRobot',
      description: 'A robot that can push any object using luminosity sensor and infrared sensor. \
                  Implementation of finite state machine methodology',
      imgSrc: '/images/sumo_robot.png',
      tech_stack: ['C', 'Arduino', 'Blender']
    },
  ];

  const blogs = [
    {
      title: 'Testing Blog',
      link: '/blogs/webgpu',
      description: 'Blog Description',
      imgSrc: '/images/journey.png',
      tech_stack: ['C++', 'Python', 'Rust']
    }
  ]


  return { headers, experiences, projects, blogs }
};
