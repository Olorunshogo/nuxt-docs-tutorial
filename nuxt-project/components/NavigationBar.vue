
<script lang="ts" setup>

    import { ref } from 'vue';
    const isSidebarOpen = ref<boolean>(false);

    // Toggle Sidebar visibility
    const toggleSidebar = () => {
        isSidebarOpen.value = !isSidebarOpen.value;
    }

    // Close Sidebar
    function closeSidebar() {
        isSidebarOpen.value = false;
    }
    
</script>

<template>
  <div>
    <header class="p-4 text-white bg-gray-800">
        <nav class="mx-auto max-w-7xl">
            <div class="relative flex flex-wrap items-center justify-between">
                <!-- Logo or Branding -->
                <div class="flex items-center space-x-2">
                    <NuxtLink to="/" aria-label="Home">
                        <img
                            src="../public/favicon.ico" alt="Logo" class="w-auto h-auto"
                        />
                    </NuxtLink>
                </div>

                <!-- Mobile hamburger Button -->               
                <button
                    @click="toggleSidebar" aria-label="Toggle Navigation"
                    class="text-white md:hidden focus:outline-none"
                >
                    <Transition name="icon-transition" mode="out-in">
                        <span :key="isSidebarOpen ? 'x-icon' : 'hamburger-icon'">
                            <span v-if="!isSidebarOpen" class="hamburger-icon">
                                &#9776; <!-- This is the hamburger symbol, or you can use an SVG/icon -->
                            </span>

                            <!-- X Icon -->
                            <span v-if="isSidebarOpen" class="x-icon">
                                &times; <!-- This is the "X" symbol, or you can use an SVG/icon -->
                            </span>
                        </span>
                    </Transition>
                </button>

                <!-- Sidebar (Mobile) -->
                <!-- <div 
                    v-show="isSidebarOpen" @click="closeSidebar"
                    class="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 md:hidden"
                ></div> -->
                <div 
                    v-show="isSidebarOpen" @click="closeSidebar"
                    class="fixed inset-0 z-50 bg-transparent bg-opacity-75 md:hidden"
                ></div>

                <div
                    :class="{'transform translate-x-90': isSidebarOpen, 'transform transform-x-0': !isSidebarOpen}"
                    class="fixed top-0 z-50 flex w-2/4 h-full p-4 space-x-4 transition-transform duration-300 ease-in-out bg-gray-900 -left-90 md:hidden  *:px-4 *:py-2 *:hover:text-gray-400 *:focus:text-gray-400 *:focus:outline-none *:focus:ring-2 *:focus:ring-indigo-500 *:shadow-xl"
                >
                    <NuxtLink to="/" aria-label="Go to Home"  @click="closeSidebar">
                        Home
                    </NuxtLink>

                    <NuxtLink to="/about" aria-label="Go to About"  @click="closeSidebar" target="_blank">
                        About
                    </NuxtLink>

                    <NuxtLink to="/posts/1" aria-label="Go to Post 1" @click="closeSidebar" target="_blank">
                        Post 1
                    </NuxtLink>

                    <NuxtLink to="/posts/2" aria-label="Go to Post 2" @click="closeSidebar" target="_blank">
                        Post 2
                    </NuxtLink>
                </div>

                <!-- Desktop Navigation (Flex) -->
                <div class="hidden space-x-6 md:flex *:px-4 *:py-2 *:hover:text-gray-400 *:focus:text-gray-400 *:focus:outline-none *:focus:ring-2 *:focus:ring-indigo-500 *:shadow-xl">
                    <NuxtLink to="/" aria-label="Go to Home">
                        Home
                    </NuxtLink>

                    <NuxtLink to="/about" aria-label="Go to About" target="_blank">
                        About
                    </NuxtLink>

                    <NuxtLink to="/posts/1" aria-label="Go to Post 1" target="_blank">
                        Post 1
                    </NuxtLink>

                    <NuxtLink to="/posts/2" aria-label="Go to Post 2" target="_blank">
                        Post 2
                    </NuxtLink>
                </div>

                <!-- Mobile Navigation (Grid) -->
                <!-- <div class="grid grid-cols-1 gap-4 md:hidden *:px-4 *:py-2 *:hover:text-gray-400 *:focus:text-gray-400 *:focus:outline-none *:focus:ring-2 *:focus:ring-indigo-500 *:shadow-xl">
                    <NuxtLink to="/" aria-label="Go to Home">
                        Home
                    </NuxtLink>

                    <NuxtLink to="/about" aria-label="Go to About" target="_blank>
                        About
                    </NuxtLink>

                    <NuxtLink to="/posts/1" aria-label="Go to Post 1" target="_blank>
                        Post 1
                    </NuxtLink>

                    <NuxtLink to="/posts/2" aria-label="Go to Post 2" target="_blank>
                        Contact
                    </NuxtLink>
                </div> -->
                
            </div>
        </nav>
    </header>
  </div>
</template>



<style lang="css" scoped>
    .icon-transition-enter-active, 
    .icon-transition-leave-active {
        transition: opacity 0.3s ease;
    }

    .icon-transition-enter, 
    .icon-transition-leave-to /* .icon-transition-leave-active in <2.1.8 */ {
        opacity: 0;
    }

    /* Optional: Style your hamburger and X icons */
    .hamburger-icon {
        font-size: 24px;
    }

    .x-icon {
        font-size: 24px;
    }

    /* Styling for the sidebar */
    .sidebar-transition {
        transition: transform 0.3s ease-in-out;
    }
</style>