
<script lang="ts" setup>
  import { useSeoMeta, useHead } from '#app';
  useSeoMeta({
    title: 'App.vue',
  })

  useHead({
    titleTemplate: '%s - Get Started with NUXT'
    // titleTemplate(titleChunk) {
    //   return titleChunk ? `${titleChunk} - Site Title` : 'Site Titile';
    // },
  })

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtRouteAnnouncer />
      <!-- <NuxtWelcome /> -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="css" scoped>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }

  .layout-enter-active,
  .layout-leave-active {
    transition: all 0.4s;
  }
  .layout-enter-from,
  .layout-leave-to {
    filter: grayscale(1);
  }
</style>
