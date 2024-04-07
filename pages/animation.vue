<template>
    <section class="example-one relative flex m-auto h-[100dvh] overflow-hidden">
        <div
          class="page-start h-full w-full relative items-center flex justify-center"
        >
        <img
            class="car w-[140px] absolute bottom-20 left-0 z-10"
            src="~/assets/images/car.svg"
            alt="car"
          />
        <Wave :class="`ssm:h-[9rem] msm:h-[10.6rem]`" />
        </div>
    </section>
</template>
<script setup lang="ts">
// or all tools are exported from the "all" file (excluding members-only plugins):
import gsap from "gsap";
import { ScrollTrigger, Draggable, Flip, MotionPathPlugin } from "gsap/all";

// don't forget to register plugins
if (process.client) {
  gsap.registerPlugin(ScrollTrigger, Draggable, Flip, MotionPathPlugin);
  // gsap.fromTo(".car", {
  //   x: 50,
  //   y: 0,
  // },
  // {
  //   duration: 11,
  //   x: 0,
  //   y: 0, // use transform shorthand (this is now using SVG units not px, the SVG viewBox is 100 units wide)
  //   xPercent: 1400,
  //   yPercent: -300,
  //   // or target SVG attributes
  //   // attr: {
  //   //   fill: "#8d3dae",
  //   //   rx: 50,
  //   // },
  // });
  gsap.to(".car", {
    x: -100,
    y: 100,
    yPercent: -130,
    duration: 11,
    motionPath: {
      path: ".wave path",
      align: ".wave path",
      autoRotate: false
    },
    repeat: 1,
    ease: "linear"
  });
}
</script>