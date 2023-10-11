<template>
  <div
    class="group menu-item-template">
    <div
      class="menu-item-content-hover">
    </div>
    <div class="z-10 sm:order-2 sm:col-span-6">
      <h3><NuxtLink
          class="group/link menu-item-header-link"
          :to="link" rel="noreferrer"><span
            class="menu-item-header-title"></span><span>
            {{title}}<span class="inline-block"><svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor"
                class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clip-rule="evenodd"></path>
              </svg></span></span></NuxtLink></h3>
      <p class="menu-item-body-paragraph">{{description}}</p>
    </div><img alt="" loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
      class="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
      style="color:transparent"
      src="/images/sumo_robot.png">
  </div>
</template>

<script lang="ts" setup>
const { link, title, description } = defineProps<{
  link: string,
  title: string,
  description: string
}>();
</script>
