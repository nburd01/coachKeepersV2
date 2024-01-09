<template>
  <div class="promise">{{ title }}</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Default Title",
    },
  },
};
</script>

<style lang="scss" scoped></style>
