<template>
  <div class="font-sans antialiased bg-blue-500/10 dark:bg-gray-800/90 border-b-2 border-b-slate-100" id="app">
    <nav class="flex items-center justify-between flex-wrap p-2">
      <div class="flex items-center flex-no-shrink text-white mr-6 ml-4 mt-1">
        <NuxtLink to="/">
          <img src="/images/avatar.jpeg" alt="ava" :width="40" :height="40" class="rounded-full ring-1 ring-gray-900/5" />
        </NuxtLink>
        <span class="font-semibold text-xl tracking-tight"></span>
      </div>
      <div class="flex-grow flex items-center w-auto">
        <div class="text-xl font-bold flex-grow">
          <NuxtLink to="/portfolio"
            class="no-underline text-right inline-block mt-0 mr-4 text-slate-500 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
            Portfolio
          </NuxtLink>
          <NuxtLink to="/projects"
            class="no-underline text-right inline-block mt-0 mr-4 text-slate-500 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
            Projects
          </NuxtLink>
          <NuxtLink to="/blogs"
            class="no-underline text-right inline-block mt-0 text-slate-500 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
            Blogs
          </NuxtLink>
        </div>
      </div>
    </nav>
  </div>
  <el-backtop :right="20" :bottom="20"/>
</template>

<script lang="ts" setup>
</script>
