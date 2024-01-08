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

<style scoped>
body {
  background-color: darkblue;
}
h2 {
  color: greenyellow;
}
.router-link-exact-active {
  color: pink;
}
nav a {
  color: aqua;
}
</style>
