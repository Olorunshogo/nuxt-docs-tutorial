
<script lang="ts" setup>
    import { clearError, type NuxtError, } from 'nuxt/app';
    const props = defineProps({
        error: {
            type: Object as () => NuxtError | undefined,
            default: () => undefined,
        }
    })
    const handleError = () => {
        clearError({ redirect: '/' })
    }
</script>

<template>
    <div>
        <div v-if="error">
            <h2>{{ error.statusCode }}</h2>
            <button @click="handleError">Clear errors</button>
        </div>
        <div v-else>
            <p>No error available.</p>
        </div>

        <!-- Render the slot for content passed from the parent -->
        <slot />
    </div>
</template>