

<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    interface Mountain {
        title: string
        description: string
    }
    const mountain = ref<Mountain | null>(null);
    const route = useRoute();
    onMounted(async () => {
        const slug = route.params?.slug
        if (slug) {
            try{
                const response = await fetch(`/api/mountains/${route.params.slug}`)
                if (!response.ok) {
                    throw new Error('Failed to fetch mountain data')
                }
                mountain.value = await response.json()
            } catch (error) {
                console.error('Error fetching mountain data: ', error)
            }
        } else {
            console.error('No slug found in route parameters')
        }
        
    })

</script>

<template>
<div>
    <div>
        <h1>{{ mountain?.title }}</h1>
        <p>{{ mountain?.description }}</p>
    </div>
</div>
</template>

<style lang="css" scoped>

</style>