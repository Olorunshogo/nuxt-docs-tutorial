
<script lang="ts" setup>
    import { useRoute } from 'vue-router';
    // import { useHead } from '#app/composables/head'
    const route = useRoute();
    console.log(route.params.id);
    
    // definePageMeta({
    //     validate: async (route) => {
    //         return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
    //     }
    // })

    useHead({
        title: 'Posts[1]'
    })

</script>

<template>
<div>
    <h1 class="text-2xl font-bold text-center">Post 1 Page</h1>

    <!-- Data Fetching -->
    <DataFetching />
</div>
</template>

<style lang="css" scoped>

</style>