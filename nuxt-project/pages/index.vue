
<script lang="ts" setup>
  const runtimeConfig = useRuntimeConfig()
  console.log(runtimeConfig.apiSecret)
  console.log(runtimeConfig.public.apiBase)

  const appConfig = useAppConfig()
  import { useAppConfig, useHead, useRuntimeConfig } from 'nuxt/app';

  useHead({
    title: 'Index',
    titleTemplate: '%s - Get Started with NUXT'
  })

</script>

<template>
  <div>
    <div>
      <h1>Welcome to homepage</h1>
      <AppAlert>
        This is an auto-imported component.
      </AppAlert>
    </div>
  </div>
</template>



<style lang="css" scoped>

</style>