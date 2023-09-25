<template>
  <Navbar/>
  <main class="relative flex flex-col items-center justify-center min-h-screen py-10">
    <Table :users="data?.users" :duration="data?.duration" />
  </main>
</template>

<script setup>
const { data } = useFetch('/api/get-users')
</script>
