<template>
  <div>
    <NuxtParticles
      id="tsparticles"
      :options="options"
      @load="onLoad"
    />
  </div>
</template>

<script setup lang="ts">
import type { Container } from 'tsparticles-engine'

const options = {
  fullScreen: {
    enable: true,
    zIndex: 1
  },
  background: {
    color: {
      value: '#000'
    }
  },
  particles: {
    number: {
      value: 100, // Number of particles
    },
    color: {
      value: ['#ff0000', '#00ff00', '#0000ff'], // Colors of the particles
    },
    shape: {
      type: 'circle', // Shape of the particles (you can use 'triangle', 'square', etc.)
    },
    size: {
      value: 5, // Size of the particles
    },
    move: {
      enable: true,
      speed: 10, // Speed of particles' movement
    },
  },
}
const onLoad = (container: Container) => {
  // Do something with the container
  container.pause()
  setTimeout(() => container.play(), 2000)
}
</script>