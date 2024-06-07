<template>
  <div>
    <TheHeader />
    <div class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
      <NuxtLink
        to="/example-one"
        class="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-lg text-white transition-all hover:-translate-y-1 hover:scale-105"
      >
        See Example One
      </NuxtLink>
      <NuxtLink
        to="/example-two"
        class="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-lg text-white transition-all hover:-translate-y-1 hover:scale-105"
      >
        See Example two
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
