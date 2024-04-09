<template>
  <main class="relative flex min-h-screen flex-col items-center justify-start p-4">
    <h2 class="text-xl text-slate-500 font-semibold dark:text-slate-200 m-4">-- Gizmo Testing --</h2>
    <div class="w-full h-full flex items-center justify-center">
      <iframe v-if="isDesktop" class="w-[1280px] h-[720px]" id="bevy-game" src="/game/index.html"
        allow="fullscreen"></iframe>
      <h3 v-if="!isDesktop" class="text-xl text-slate-500 font-semibold dark:text-slate-200 m-4"> Open in desktop to see
        the gizmo</h3>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
const usersStore = useUsersStore()
await usersStore.fetchUsers()
const { isDesktop } = useDevice()
</script>
