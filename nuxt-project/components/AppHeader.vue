
<script lang="ts" setup>

</script>

<template>
  <div>

    <header class="relative text-white bg-gray-800">
      <div class="flex items-center justify-between p-4 mx-auto max-w-7xl h-(--nav-height)">
        <!-- Logo or Branding -->
        <div class="flex items-center space-x-2">
          <NuxtLink to="/" aria-label="Home">
            <NuxtImg src="../public/nuxt-logo.svg" width="70" height="auto" />
          </NuxtLink>
        </div>
        
        <div>
          <NavigationBar/>
        </div>
      </div>
    </header>

  </div>
</template>



<style lang="css" scoped>

</style>