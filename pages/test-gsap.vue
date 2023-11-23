<template>
  <svg id="svg" viewBox="0 0 100 100">
    <rect
      class="svgBox"
      fill="#28a92b"
      x="0"
      y="35"
      width="30"
      height="30"
      rx="2"
    />
  </svg>
</template>
<script setup lang="ts">
// or all tools are exported from the "all" file (excluding members-only plugins):
import gsap from "gsap";
import { ScrollTrigger, Draggable, Flip, MotionPathPlugin } from "gsap/all";

// don't forget to register plugins
if (process.client) {
  gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);
  gsap.to(".svgBox", {
    duration: 2,
    x: 100, // use transform shorthand (this is now using SVG units not px, the SVG viewBox is 100 units wide)
    xPercent: -100,
    // or target SVG attributes
    attr: {
      fill: "#8d3dae",
      rx: 50,
    },
  });
}
</script>

<style scoped>
body {
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  margin: 0;
  overflow: hidden;
}

svg {
  height: 90vh;
  max-height: 300px;
  border: solid 2px white;
  overflow: visible;
}
</style>
