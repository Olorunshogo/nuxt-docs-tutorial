
<script lang="ts" setup>
  import { useHead  } from 'nuxt/app'

  useHead({
    title: 'Dashboard'
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