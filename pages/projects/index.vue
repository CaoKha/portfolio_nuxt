<template>
  <main class="min-h-screen py-10">
    <section id="Projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
      <div>
        <ul>
          <li class="mb-12 px-2" v-for="project in projects">
            <ProjectCard :title="project.title" :link="project.link" :description="project.description"
              :imgSrc="project.imgSrc" :tech_stack="project.tech_stack" />
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
  
<script setup lang="ts">
const { projects } = useMyConstants();
</script>
  
<style scoped></style>
