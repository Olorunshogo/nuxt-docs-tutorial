
<script lang="ts" setup>
import { useSeoMeta } from 'nuxt/app';
useSeoMeta({
    title:'Dashboard',
    titleTemplate: '%s - Get Started with NUXT',
})
  
</script>

<template>
  <div class="w-screen p-4 text-white bg-slate-950 h-dvh">
    <h1>Dashboard Layout</h1>
    <slot />
    <!-- <AppFooter></AppFooter> -->
  </div>
</template>



<style lang="css" scoped>

</style>