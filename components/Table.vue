<template>
  <div
    class="mx-auto w-full max-w-xl rounded-lg bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-lg dark:bg-white/10">
    <div class="mb-4 flex items-center justify-between">
      <div class="space-y-1">
        <h2 class="text-xl font-semibold dark:text-slate-200">Recent Users</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Fetched {{ users?.length }} users in {{ duration }}ms
        </p>
      </div>
      <button class="hover:opacity-80 dark:text-slate-200" @click="refreshPage">
        Refresh Page
      </button>
    </div>
    <div class="divide-y divide-gray-900/5">
      <div v-for="user in users" :key="user.id" class="flex items-center justify-between py-3">
        <div class="flex items-center space-x-4">
          <img :src="user.image" :alt="user.name" :width="48" :height="48" class="rounded-full ring-1 ring-gray-900/5" />
          <div class="space-y-1">
            <p class="font-medium leading-none dark:text-slate-200">{{ user?.name }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ user?.email }}</p>
          </div>
        </div>
        <p class="text-sm text-gray-500 dark:text-slate-400">{{ timeAgo(user?.createdAt) }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ms from 'ms';
import  {UserData}  from '@/types/UserData'

const {users, duration} = withDefaults(defineProps<{
  users: UserData[];
  duration: Number; 
}>(), {
    users: () => [],
    duration: () => 0
  })

function timeAgo(timestamp: Date, timeOnly?: string) {
  if (!timestamp) return 'never'
  return `${ms(Date.now() - new Date(timestamp).getTime())}${timeOnly ? '' : ' ago'
    }`
}

function refreshPage() {
  location.reload()
}

</script>
