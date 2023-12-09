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
    const {data:services} = await useFetch('https://fakestoreapi.com/products')
</script>

<style lang="scss" scoped>

</style>
