<template>
  <NuxtPage />
</template>

<script setup lang="ts">
onBeforeMount(() => {
  const documentHeight = () => {
    document.documentElement.style.setProperty(
      "--doc-height",
      `${window.innerHeight}px`
    );
  };
  window.addEventListener("resize", documentHeight);
});
</script>
