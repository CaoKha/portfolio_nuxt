<template>
  <div class="bg-white dark:bg-slate-900">
    <div class="background-gradient-circle" ref="layoutBody">
      <NavBar />
      <slot />

      <el-backtop :right="20" :bottom="20" style="position: fixed; z-index: 999" />
    </div>
  </div>
</template>

<script setup lang="ts">
const layoutBody = useMouseBackground();

</script>

<style lang="postcss" scoped>
.background-gradient-circle {
  background-image: radial-gradient(circle closest-side, rgb(59 130 246 / 0.15), transparent 80%);
}
</style>
