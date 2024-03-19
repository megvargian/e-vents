<template>
  <div
    class="w-full overflow-hidden absolute bottom-[-3px] z-0"
    :class="props.class"
  >
    <svg
      class="wave"
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style="height: 100%; width: 100%"
    >
      <path
        d="M-0.00,49.85 C150.00,149.60 349.20,-49.85 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z"
        style="stroke: none; fill: #002e51"
      ></path>
    </svg>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    required: true,
  },
});
</script>
