<template>
  <div>
    <header>
      <nav>
        <NuxtLink to="/">CoachKeepers</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">Qui suis-je</NuxtLink></li>
          <li><NuxtLink to="/services">Méthodologie</NuxtLink></li>
          <li><NuxtLink to="/offres">Coachkeepers et vous</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <section>
      <HeaderSecond />
    </section>

    <!-- Output page content -->
    <div>
      <slot />
    </div>

    <footer>
      <nav>
        <NuxtLink to="/">CoachKeepers</NuxtLink>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">Qui suis-je</NuxtLink></li>
          <li><NuxtLink to="/services">Méthodologie</NuxtLink></li>
        </ul>
      </nav>
    </footer>
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
</style>
