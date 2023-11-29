<template>
  <NuxtPage />
</template>

<script setup lang="ts">
onMounted(() => {
  const documentHeight = () => {
    document.documentElement.style.setProperty(
      "--doc-height",
      `${window.innerHeight}px`
    );
  };
  window.addEventListener("resize", documentHeight);
  console.log(window.innerHeight);
});
</script>
