<template>
    <div>
      <h1 class="title">Nuxt Anime</h1>
    </div>
  </template>

<script setup lang="ts">
import { useAnime } from '#imports';

onMounted(() => {
    useAnime({ targets: '.title', translateX: 250, duration: 800 })
})
</script>