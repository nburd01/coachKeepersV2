<template>
  <div class="contactUs">
    <h2 class="contact">{{ contactUs }}</h2>
    <font-awesome-icon class="rotate45__large" :icon="['fas', 'arrow-right']" />
  </div>
</template>

<script>
export default {
  props: {
    contactUs: {
      type: String,
      default: "Default Title",
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  background-color: aqua;
}
</style>
