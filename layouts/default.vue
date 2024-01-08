<template>
  <div>
    <Header />
    <!-- Output page content -->
    <div>
      <slot />
    </div>
    <ContactUsDiv contactUs="Custom Title" />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  color: purple;
}
</style>
