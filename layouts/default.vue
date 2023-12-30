<template>
  <div>
    <header>
      <div class="container desktop">
        <nav>
          <ul>
            <li><NuxtLink to="/about">Qui suis-je</NuxtLink></li>
            <li><NuxtLink to="/services">Méthodologie</NuxtLink></li>
            <NuxtLink to="/">CoachKeepers</NuxtLink>

            <li><NuxtLink to="/offres">Coachkeepers et vous</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </nav>
      </div>
      <div class="container mobile">
        <nav>
          <ul>
            <NuxtLink to="/">CoachKeepers</NuxtLink>
            <button class="menuBtn">Menu</button>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Output page content -->
    <div>
      <slot />
    </div>
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
