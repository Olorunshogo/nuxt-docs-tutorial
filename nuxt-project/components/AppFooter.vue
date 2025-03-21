
<script lang="ts" setup>
  const currentYear = new Date().getFullYear();
</script>

<template>
  <div>
    <footer class="p-4 font-sans text-white bg-gray-800">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:mx-auto xl:flex xl:flex-wrap lg:justify-between max-w-7xl">
        <div class="flex-1 m-2.5">
          <h3 class="mb-2.5 font-semibold text-lg">About Us</h3>
          <p>We are a leading company providing high-quality products and services.</p>
        </div>

        <div class="flex-1 m-2.5">
          <h3 class="mb-2.5 font-semibold text-lg">Quick Links</h3>
          <ul class="p-0 list-none">
            <li class="mb-2 *:text-white *:decoration-0 *:hover:underline *:hover:decoration-1">
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="mb-2 *:text-white *:decoration-0 *:hover:underline *:hover:decoration-1">
              <NuxtLink to="/about" target="_blank">About</NuxtLink>
            </li>
            <li class="mb-2 *:text-white *:decoration-0 *:hover:underline *:hover:decoration-1">
              <NuxtLink to="/services" target="_blank">Services</NuxtLink>
            </li>
            <li class="mb-2 *:text-white *:decoration-0 *:hover:underline *:hover:decoration-1">
              <NuxtLink to="/contact" target="_blank">Contact</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="flex-1 m-2.5">
          <h3 class="mb-2.5 font-semibold text-lg">Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +234(0) 704 4456 7789</p>
        </div>

        <div class="text-sm text-center md:text-left">
          <p>
            &copy; 
            {{ currentYear }}
            Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>



<style lang="css" scoped>

</style>