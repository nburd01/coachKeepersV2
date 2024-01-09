<template>
  <div class="promiseDiv">
    <div class="bubbleDiv">
      <BubbleElement title="Custom Title" />
    </div>
    <div class="promise">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String,
      default: "Default",
    },
  },
};
</script>

<style lang="scss" scoped></style>
