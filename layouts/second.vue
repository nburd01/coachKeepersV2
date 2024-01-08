<template>
  <div>
    <section>
      <Header />
      <HeaderSecond />
    </section>

    <!-- Output page content -->
    <div>
      <slot />
    </div>
    <ContactUsDiv />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  color: hotpink;
}
a {
  color: green;
}
</style>
