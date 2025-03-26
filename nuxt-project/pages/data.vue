
<script lang="ts" setup>
    import { useRoute } from 'vue-router';
    import { useHead } from 'nuxt/app'
    const route = useRoute();
    console.log(route.params.id);
    

    useHead({
        title: 'Data Fetching'
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