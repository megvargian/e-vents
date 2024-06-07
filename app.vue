<template>
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
});
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
