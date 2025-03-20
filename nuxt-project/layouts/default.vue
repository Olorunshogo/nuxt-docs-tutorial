
<script lang="ts" setup>

</script>

<template>
  <div id="default-layout">
    <AppHeader class="sticky z-[99] inset-0 bottom-[unset]" />
    <div class="grid grid-cols-1 md:grid-cols-2 xl:flex xl:flex-wrap lg:justify-between xl:mx-auto max-w-7xl">
      <slot>Default Layout Content</slot>
    </div>
    <AppFooter class="mt-16" />
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