
<script lang="ts" setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
    console.log(route.params.id);
    
    // definePageMeta({
    //     validate: async (route) => {
    //         return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
    //     }
    // })

</script>

<template>
<div>
    
</div>
</template>

<style lang="css" scoped>

</style>