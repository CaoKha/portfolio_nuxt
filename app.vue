<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Portfolio',
  meta: [
    { property: 'description', content: 'Kha Portfolio' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
</script>
