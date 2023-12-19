<template>
    <div>
        <h2>Méthodologie</h2>
        <div
            v-for="(s, index) in services" :key="index">
            <NuxtLink :to="`/services/${s.id}`">{{ s.title }}</NuxtLink>
        </div>
    </div>
</template>

<script setup>
    //layout
    definePageMeta({
       layout:'services'
    })
    //fetch services
    const {data:services} = await useFetch('https://fakestoreapi.com/products')
</script>

<style lang="scss" scoped>

</style>
