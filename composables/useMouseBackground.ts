export const useMouseBackground = () => {
  const layout = useState<HTMLDivElement | null>('layout', () => null);
  const handleMouseMove = (e: MouseEvent) => {
    if (layout.value) {
      const rect = layout.value.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      const bgPosX = offsetX - rect.width / 2;
      const bgPosY = offsetY - rect.height / 2;
      layout.value.style.backgroundPosition = `${bgPosX}px ${bgPosY}px`;
    }
  };

  onMounted(() => {
    if (layout.value) layout.value.addEventListener("mousemove", handleMouseMove);
  });

  onBeforeUnmount(() => {
    if (layout.value) layout.value.removeEventListener("mousemove", handleMouseMove);
  });

  return layout
};
