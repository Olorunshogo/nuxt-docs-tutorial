
<script lang="ts" setup>
  import { useSeoMeta } from '#app';
  useSeoMeta({
    title: 'app.vue',
    ogTitle: 'Get',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
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
      <NuxtRouteAnnouncer />
      <!-- <NuxtWelcome /> -->
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
