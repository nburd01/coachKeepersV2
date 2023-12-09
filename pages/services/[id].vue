<template>
    <div>
        <!-- product details for {{ id }} -->
        <div>
            <p>{{ product.id }}</p>
            <p>{{ product.title }}</p>
        </div>
    </div>
</template>

<script setup>
    const {id} = useRoute().params

    definePageMeta({
        layout:'services'
    })
    const uri = 'https://fakestoreapi.com/products/' + id

    //fetch product
    const { data: product } = await useFetch(uri)
</script>

<style lang="scss" scoped>
    h1{
        color: lightblue;
    }
</style>