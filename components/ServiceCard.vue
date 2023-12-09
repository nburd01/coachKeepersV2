
import type servicesVue from '~/layouts/services.vue';

import type servicesVue from '~/layouts/services.vue';
<template>
    <div>
        <img :src="service.image" alt="" srcset="">
        <p class="abc">{{service.title}}</p>
    </div>
</template>

<script setup lang="ts">
    const {service} = defineProps(['service'])
</script>
