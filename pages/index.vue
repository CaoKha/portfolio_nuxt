<template>
  <main class="relative flex flex-col items-center justify-center min-h-screen py-10">
    <Table :users="usersStore.users" :duration="usersStore.duration" />
  </main>
</template>

<script setup lang="ts">
import { useUsersStore } from '@/stores/users'
const usersStore = useUsersStore()
await usersStore.fetchUsers()
</script>
