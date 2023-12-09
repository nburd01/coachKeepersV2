<template>
    <div>
        <h2>Services</h2>
        <div
            v-for="(s, index) in services" :key="index">
           <ServiceCard :service="s"/>
           <!-- <NuxtLink :to="`/services/${s.id}`">{{ s.title }}</NuxtLink> -->
        </div>
    </div>
</template>

<script setup>
    //layout
    definePageMeta({
       layout:'services'
    })
    //fetch products
<<<<<<< HEAD
<<<<<<< Updated upstream
    const {data:products} = await useFetch('https://fakestoreapi.com/products')
=======
    const {data:services} = await useFetch('https://fakestoreapi.com/products')
>>>>>>> components
</script>

<style lang="scss" scoped>

</style>
=======
    const {data:services} = await useFetch('https://fakestoreapi.com/products')
</script>
>>>>>>> Stashed changes
