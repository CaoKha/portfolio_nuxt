<template>
  <main class="relative flex min-h-screen flex-col items-center justify-start p-4">
    <h2 class="text-xl text-slate-500 font-semibold dark:text-slate-200 m-4">-- My Yogurt --</h2>

    <div class="w-full h-full flex items-center justify-center">
      <iframe class="w-[1280px] h-[720px]" id="bevy-game" src="/game/index.html"></iframe>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
const usersStore = useUsersStore()
await usersStore.fetchUsers()
</script>
