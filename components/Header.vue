<template>
  <header>
    <div class="container large desktop">
      <nav>
        <ul>
          <li><NuxtLink to="/about">Qui suis-je</NuxtLink></li>
          <li><NuxtLink to="/methodology">Méthodologie</NuxtLink></li>
          <NuxtLink to="/">CoachKeepers</NuxtLink>

          <li><NuxtLink to="/offres">Coachkeepers et vous</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </div>
    <div class="container large mobile">
      <nav>
        <ul>
          <NuxtLink to="/">CoachKeepers</NuxtLink>
          <button class="menuBtn">Menu</button>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
