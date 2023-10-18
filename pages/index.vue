<template>
  <main class="relative flex min-h-screen flex-col items-center justify-center p-2">
    <Table :users="usersStore.users" :duration="usersStore.duration" />
  </main>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
const usersStore = useUsersStore()
await usersStore.fetchUsers()
</script>
