<template>
  <div>
    <TheHeader />
    <div class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
      <Post v-for="post in data" :key="post.uri" :post="post"></Post>
    </div>
    <div class="grid gap-8 grid-cols-1 lg:grid-cols-3 p-6">
      <NuxtLink
        to="/particles"
        class="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-lg text-white transition-all hover:-translate-y-1 hover:scale-105"
      >
        See Particles
      </NuxtLink>
      <NuxtLink
        to="/confetti-explosions"
        class="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-lg text-white transition-all hover:-translate-y-1 hover:scale-105"
      >
        See Confetti explosions
      </NuxtLink>
      <NuxtLink
        to="/confetti"
        class="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-lg text-white transition-all hover:-translate-y-1 hover:scale-105"
      >
        See confetti
      </NuxtLink>
      <NuxtLink
        to="/test-gsap"
        class="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 p-8 rounded-lg text-white transition-all hover:-translate-y-1 hover:scale-105"
      >
        See test gsap
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const config = useRuntimeConfig();
const { data, refresh, pending } = await useFetch(config.public.wordpressUrl, {
  method: "get",
  query: {
    query: `
      query NewQuery {
        posts(first:10){
          nodes {
            title
            date
            excerpt
            uri
          }
        }
      }`,
  },
  transform(data: any) {
    return data.data.posts.nodes as Array<
      Record<"title" | "date" | "excerpt" | "uri", string>
    >;
  },
});
</script>
