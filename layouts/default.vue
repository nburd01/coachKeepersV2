<template>
    <div>
        <h2>Layout</h2>
    </div>

    <!-- output the page content -->
    <div>
        <slot/>
    </div>
</template>

<style scoped>
body{
    background-color: darkblue;
}
h2{
    color: greenyellow;
}
</style>