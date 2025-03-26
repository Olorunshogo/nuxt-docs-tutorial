
<script lang="ts" setup>
  import { ref } from 'vue';
  const greenLogoUrl = ref<string>('https://nuxt.com/assets/design-kit/icon-green.png');
  const whiteLogoUrl = ref<string>('https://nuxt.com/assets/design-kit/icon-white.png');

</script>

<template>
  <div>

    <header class="relative text-white bg-gray-800">
      <div class="flex items-center justify-between p-4 mx-auto max-w-7xl h-(--nav-height)">
        <!-- Logo or Branding -->
        <div class="flex items-center space-x-2">
          <NuxtLink to="/" aria-label="Home">
            <span class="hidden md:flex">
              <NuxtImg 
                width="70px" height="auto" alt="Logo"
                :src="greenLogoUrl"
                sizes="100vw sm:50vw md:400px"
                format="png" fit="cover" preload
              />
            </span>
            <span class="md:hidden block">
              <NuxtImg 
              width="70px" height="auto" alt="Logo"
              :src="whiteLogoUrl"
              sizes="100vw sm:50vw md:400px"
              format="png" fit="cover" preload
            />
            </span>
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