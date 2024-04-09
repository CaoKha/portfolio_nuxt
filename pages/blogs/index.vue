<template>
  <main class="min-h-screen py-10">
    <section id="Projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <div
        class="sticky top-0 z-20 mb-4 w-screen bg-blue-500/10 px-6 py-5 backdrop-blur dark:bg-slate-900/75 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 class="text-sm font-bold uppercase tracking-widest text-slate-700 dark:text-slate-200 lg:sr-only">Projects
        </h2>
      </div>
      <div>
        <ul>
          <li class="mb-12 px-2" v-for="blog in blogs">
            <ProjectCard :title="blog.title" :link="blog.link" :description="blog.description"
              :imgSrc="blog.imgSrc" :tech_stack="blog.tech_stack" />
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
  
<script setup lang="ts">
const { blogs } = useMyConstants();
</script>
  
<style scoped></style>
