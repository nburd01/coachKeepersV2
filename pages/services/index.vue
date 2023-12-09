<template>
    <div>
        <h2>Services</h2>
        <div
            v-for="(p, index) in products" :key="index">
            <NuxtLink :to="`/services/${p.id}`">{{ p.title }}</NuxtLink>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
       layout:'services'
    })
    //fetch products
<<<<<<< Updated upstream
    const {data:products} = await useFetch('https://fakestoreapi.com/products')
</script>

<style lang="scss" scoped>

</style>
=======
    const {data:services} = await useFetch('https://fakestoreapi.com/products')
</script>
>>>>>>> Stashed changes
