<template>
    <ConfettiExplosion
        :particleCount="200"
        :particleSize="10"
        :duration="5000"
        :force="0.3"
        v-if="visible"
    />
    <div class="h-full">
        <button @click="explode()" class="flex justify-center m-auto bg-white font-bold text-center text-black rounded border-4 border-black p-4">Explode</button>
    </div>
    <ConfettiExplosion
        :particleCount="200"
        :particleSize="10"
        :duration="5000"
        :force="0.3"
        v-if="visible"
    />
</template>

<script setup lang="ts">
  import ConfettiExplosion from "vue-confetti-explosion";
  const visible = ref<Boolean>(false);

  const explode = async () => {
    visible.value = false;
    await nextTick();
    visible.value = true;
  };
</script>

