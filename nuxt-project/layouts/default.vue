
<script lang="ts" setup>
  import { useSeoMeta, useHead } from 'nuxt/app';

  useSeoMeta({
    title: 'Index',
    titleTemplate: '%s - Authenticated',
    ogTitle: 'Default layout',
    description: 'This is the Default layout.',
    ogDescription: 'This is the description of the Default layout.',
    ogUrl: 'og:https://github.com/Olorunshogo/nuxt-docs-tutorial.git',
    ogImage: 'https://www.vectorlogo.zone/logos/nuxtjs/index.html',
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

  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const id = computed(() => Number(route.params.id || 1));
  const prev = computed(() => '/' + (id.value - 1));
  const next = computed(() => '/' + (id.value + 1));
</script>

<template>
  <div id="default-layout" class="w-screen h-full text-white bg-[#020420]">
    <AppHeader class="sticky z-[99] inset-0 bottom-[unset]" />
    <div v-if="route.params.id">
      <NuxtLink :to="prev">⬅️</NuxtLink> |
      <NuxtLink :to="next">➡️</NuxtLink>
    </div>
    
    <!-- <div class="grid grid-cols-1 bg-green-700 md:grid-cols-2 xl:flex xl:flex-wrap lg:justify-between xl:mx-auto max-w-7xl"> -->
    <div class="flex flex-col p-4 mx-auto lg:p-8 max-w-7xl w-5/5">
      <slot>
        Default Layout Content
      </slot>
    </div>
    <AppFooter/>
  </div>
</template>



<style lang="css" scoped>
  #default-layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: max-content minmax(0, 1fr) max-content;
    min-height: 100vh;
    min-height: 100dvh;
  }
</style>