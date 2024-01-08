<template>
  <Header />
  <!-- Output page content -->
  <div>
    <slot />
  </div>

  <Footer />
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: forestgreen;
}
</style>
