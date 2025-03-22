

<script lang="ts" setup>
  import { useHead } from "nuxt/app";

  useHead({
    titleTemplate: '%s - Get Started with NUXT'
    // titleTemplate(titleChunk) {
    //   return titleChunk ? `${titleChunk} - Site Title` : 'Site Titile';
    // },
  })

</script>

<template>
  <div>
    <!-- Add a hidden element with a page title to announce route changes to assistive technologies. -->
    <NuxtRouteAnnouncer />

    <!-- Display a progress bar between page navigations -->
    <NuxtLoadingIndicator />

    <NuxtLayout>
      

      
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
