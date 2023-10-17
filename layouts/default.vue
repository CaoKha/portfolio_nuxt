<template>
  <div class="bg-white dark:bg-slate-900">
    <div class="background-gradient-circle" ref="layoutBody">
      <NavBar />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">

const layoutBody = useState<HTMLDivElement | null>('layoutBody', () => null);
const handleMouseMove = (e: MouseEvent) => {
  if (layoutBody.value) {
    const rect = layoutBody.value.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const bgPosX = offsetX - rect.width / 2;
    const bgPosY = offsetY - rect.height / 2;
    layoutBody.value.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
  }
};

onMounted(() => {
  if (layoutBody.value)
    layoutBody.value.addEventListener('mousemove', handleMouseMove);
});

onBeforeUnmount(() => {
  if (layoutBody.value)
    layoutBody.value.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style lang="postcss" scoped>
.background-gradient-circle {
  background-image: radial-gradient(circle closest-side, rgb(59 130 246 / 0.15), transparent 80%);
}
</style>
