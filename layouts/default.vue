<template>
  <div class="bg-white dark:bg-slate-900">
    <div class="background-gradient-circle" ref="layout_body">
      <Navbar />
      <slot />
    </div>
  </div>
</template>

<script setup>
const layout_body = ref(null);
const handleMouseMove = (e) => {
  layout_body.value.style.backgroundPosition = `${e.pageX - 800}px  ${e.pageY - 800}px`;
};

onMounted(() => {
  layout_body.value.addEventListener('mousemove', handleMouseMove);
});

onBeforeUnmount(() => {
  layout_body.value.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style lang="postcss" scoped>
.background-gradient-circle {
  background-image: radial-gradient(circle, rgb(59 130 246 / 0.15), transparent 80%);
}
</style>
