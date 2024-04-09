<template>
  <div class="border-b-2 border-b-slate-100 bg-blue-500/10 font-sans antialiased dark:bg-gray-800/90" id="app">
    <nav class="flex flex-wrap items-center justify-between p-2">
      <div class="flex-no-shrink ml-4 mr-6 mt-1 flex items-center text-white">
        <NuxtLink to="/">
          <img src="/images/avatar.jpeg" alt="ava" width="40" height="40" class="aspect-auto w-10 rounded-full ring-1 ring-gray-900/5" />
        </NuxtLink>
        <span class="text-xl font-semibold tracking-tight"></span>
      </div>
      <div class="flex w-auto flex-grow items-center justify-between">
        <div class="flex-grow text-lg font-bold lg:text-xl">
          <NuxtLink v-for="navlink in navlinks" :to="navlink.link"
            class="mr-4 mt-0 inline-block text-right text-slate-500 no-underline hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
            {{ navlink.title }}
          </NuxtLink>
        </div>
        <div class="pr-1">
          <ClientOnly>
            <ButtonColorMode />
          </ClientOnly>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const navlinks = [
  { link: '/portfolio', title: 'Portfolio' },
  { link: '/projects', title: 'Projects' },
  { link: '/blogs', title: 'Blogs' },
]

</script>
