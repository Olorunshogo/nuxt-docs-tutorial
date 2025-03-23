
<script lang="ts" setup>
  import { useSeoMeta, useHead } from 'nuxt/app';

  useSeoMeta({
    title: 'Overview layout',
    titleTemplate: '%s - Authenticated',
    ogTitle: 'Authenticated Overview layout',
    description: 'This is the Overview layout.',
    ogDescription: 'This is the description of the Overview layout.',
    ogImage: 'https://nuxt.com/assets/design-kit/timeline-mobile-dark.svg',
    ogUrl: '[https://github.com/Olorunshogo/nuxt-docs-tutorial.git]',
    twitterTitle: 'NUXT Docs',
    twitterDescription: 'Examples I learnt when I was studying the NUXT documentation.',
    twitterImage: '../public/nuxt-logo.png',
    twitterCard: 'Summary that will show on the twitter card'
  });

  useHead({
    htmlAttrs: {
    lang: 'en'
    },
    link: [
    { rel: 'icon', type: 'image/png', href: '../public/nuxt-logo.png' }
    ]
  })

  definePageMeta({
    layout: 'dashboard'
  })
</script>

<template>
  <div>
    <h1>Welcome to your dashboard</h1>
  </div>
</template>



<style lang="css" scoped>

</style>