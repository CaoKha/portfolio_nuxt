<template>
  <div class="group menu-item-template">
    <div class="menu-item-content-hover">
    </div>
    <header class="date" aria-label="September 2023 to Present">{{ date }}</header>
    <div class="z-10 sm:col-span-6">
      <h3 class="menu-item-header">
        <div><a class="group/link menu-item-header-link" :href="link" target="_blank"
          rel="noreferrer" aria-label="`${{job}} at ${{company}}`"><span
              class="menu-item-header-title"></span><span>
              {{ job }} at <span class="inline-block whitespace-nowrap"> {{ company }}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                  class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"></path>
                </svg>
              </span></span>
          </a></div>
      </h3>
      <p class="menu-item-body-paragraph">
        {{ content }}
      </p>
      <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
        <li class="mr-1.5 mt-2" v-for="tech in tech_stack">
          <div class="tech-tag">
            {{ tech }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { date, job, company, link, content, tech_stack } = defineProps<{
  date: string,
  job: string,
  company: string,
  link: string,
  content: string,
  tech_stack: Array<string>
}>();

</script>

