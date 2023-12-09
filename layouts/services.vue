<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">CoachKeepers</NuxtLink>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">A propos</NuxtLink></li>
                    <li><NuxtLink to="/services">Services</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <!-- Output page content -->
        <div>
            <slot/>
        </div>

        <footer>
            <nav>
                <NuxtLink to="/">CoachKeepers</NuxtLink>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">A propos</NuxtLink></li>
                    <li><NuxtLink to="/services">Services</NuxtLink></li>
                </ul>
            </nav>
        </footer>
    </div>
</template>


<style scoped>
body{
    background-color: darkblue;
}
h2{
    color: greenyellow;
}
.router-link-exact-active{
    color: pink
}
</style>