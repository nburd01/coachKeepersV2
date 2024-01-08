<template>
  <div>
    <div class="bubble">{{ title }}</div>
  </div>
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
