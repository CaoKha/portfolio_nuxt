<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title: 'Portfolio',
  ogTitle: 'Portfolio',
  description: 'Kha Portfolio',
  ogDescription: 'Kha Portfolio',
  ogImage: 'https://nuxt-wasm.vercel.app/images/avatar.jpeg',
  twitterCard: 'summary'
})
</script>
