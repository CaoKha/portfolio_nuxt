<template>
  <div class="min-h-screen p-6">
    <div class="lg:mx-auto lg:flex lg:justify-between lg:gap-4">
      <header
        class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/4 lg:flex-col lg:justify-between lg:pb-28 lg:pt-10">
        <div>
          <h1 class="text-4xl font-bold tracking-tight dark:text-slate-200 sm:text-5xl">Kha Nguyen</h1>
          <h2 class="mt-3 text-lg font-medium tracking-tight dark:text-slate-200 sm:text-xl"> Software Engineer </h2>
          <p class="mt-4 max-w-xs leading-normal text-slate-400"></p>
          <nav class="nav hidden lg:block" aria-label="In-page jump links">
            <ul class="mt-16 w-max">
              <li v-for="header in headers">
                <a class="group flex items-center py-3" :class="{ 'active': header === currentSection }" :key="header"
                  :href="`#${header}`"><span
                    class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all active:bg-slate-700 group-hover:w-16 group-hover:bg-slate-700 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none dark:group-hover:bg-slate-200"></span><span
                    class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-700 group-focus-visible:text-slate-200 dark:group-hover:text-slate-200">{{
                      header }}</span></a>
              </li>
            </ul>
          </nav>
        </div>
        <ul class="ml-1 flex items-center" aria-label="Social media">
          <li class="mr-5 text-xs"><a class="block hover:text-slate-200 dark:text-slate-200 dark:hover:text-slate-500"
              href="https://github.com/CaoKha" target="_blank" rel="noreferrer"><span class="sr-only">GitHub</span><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6"
                aria-hidden="true">
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                </path>
              </svg></a></li>
          <li class="mr-5 text-xs"><a class="block hover:text-slate-200 dark:text-slate-200 dark:hover:text-slate-500"
              href="https://www.linkedin.com/in/cao-kha-nguyen-11327a239/" target="_blank" rel="noreferrer"><span
                class="sr-only">LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="currentColor" class="h-6 w-6" aria-hidden="true">
                <path
                  d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
                </path>
              </svg></a></li>
        </ul>
      </header>
      <main class="pt-24 lg:w-3/4 lg:pt-10" ref="portfolio_body">
        <section v-intersection-observer="[onIntersectionObserver, { threshold: 1, root: portfolio_body }]"
          id="About" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
          <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-blue-500/10 px-6 py-5 backdrop-blur dark:bg-slate-900/75 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 lg:sr-only">About
            </h2>
          </div>
          <div class="text-base text-slate-700 dark:text-slate-200">
            <p class="mb-2">Hi, I studied mechatronics at Univeristy of Technologies of Compiegne (UTC) in France and I'm
              working
              on a graphical project.
            </p>
            <p>When I’m not at the computer, I’m usually hanging out with my friend, playing card game, watching movies or
              running around Paris searching for stuffs
            </p>
          </div>
        </section>
        <section
          v-intersection-observer="[onIntersectionObserver, { threshold: [0.90, 1], root: portfolio_body }]"
          id="Experiences" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
          <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-blue-500/10 px-6 py-5 backdrop-blur dark:bg-slate-900/75 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 lg:sr-only">
              Experience
            </h2>
          </div>
          <div>
            <ol class="group/list">
              <li class="mb-12" v-for="experience in experiences">
                <ExperienceCard :date="experience.date" :job="experience.job" :company="experience.company_name"
                  :link="experience.link" :content="experience.content" :tech_stack="experience.tech_stack" />
              </li>
            </ol>
            <div class="mt-12"><a
                class="group inline-flex items-center font-semibold leading-tight text-slate-500 dark:text-slate-200"
                aria-label="View Full Résumé" href="/pdf/resume.pdf" target="_blank"><span><span
                    class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View
                    Full<!-- --> </span><span class="whitespace-nowrap"><span
                      class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Résumé</span><svg
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                      class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                      aria-hidden="true">
                      <path fill-rule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clip-rule="evenodd"></path>
                    </svg></span></span></a></div>
          </div>
        </section>
        <section v-intersection-observer="[onIntersectionObserver, { threshold: 1, root: portfolio_body }]"
          id="Projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
          <div
            class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-blue-500/10 px-6 py-5 backdrop-blur dark:bg-slate-900/75 md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 class="text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 lg:sr-only">Projects
            </h2>
          </div>
          <div>
            <ul class="group/list">
              <li class="mb-12" v-for="project in projects">
                <ProjectCard :title="project.title" :link="project.link" :description="project.description"
                  :imgSrc="project.imgSrc" :tech_stack="project.tech_stack" />
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { vIntersectionObserver } from '@vueuse/components'

const headers = [
  'About',
  'Experiences',
  'Projects'
]

const experiences = [
  {
    date: 'Sep 2023 — Present',
    job: 'Frontend Software Engineer',
    company_name: 'Qarnot Computing',
    link: 'https://qarnot.com/en',
    content: 'Developed a web app monitoring data from electrical raditor to customer. \
              Work with the DevOps team to engineer and improve current infrasturcture to a better one',
    tech_stack: ['Vue', 'Nuxt', 'NodeJS', 'HTML', 'CSS', 'Javascript', 'Typescript']
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
    link: '/projects',
    description: 'A robot that can push any object out of a using a luminosity sensor and infrared sensor. ring \
                  Implementation of finite state machine methodology',
    imgSrc: '/images/sumo_robot.png',
    tech_stack: ['C', 'Arduino', 'Blender']
  },
];

const portfolio_body = useState('portfolio_body', () => null)
const currentSection = useState('currentSection', () => null as string | null)

function onIntersectionObserver([entry]: IntersectionObserverEntry[]) {
  if (entry.isIntersecting === true) {
    currentSection.value = entry.target.id
  }
}
</script>

<style lang="postcss" scoped>
.active .nav-indicator {
  width: 4rem;
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85/var(--tw-bg-opacity));
}

.active .nav-text {
  --tw-text-opacity: 1;
  color: rgb(51 65 85/var(--tw-text-opacity));
}

:is(.dark .active .nav-indicator) {
  width: 4rem;
  --tw-bg-opacity: 1;
  background-color: rgb(226 232 240/var(--tw-bg-opacity));
}

:is(.dark .active .nav-text) {
  --tw-bg-opacity: 1;
  color: rgb(226 232 240/var(--tw-text-opacity));
}
</style>
