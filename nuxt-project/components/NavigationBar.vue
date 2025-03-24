
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
    <nav class="mx-auto">
        <div class="relative flex flex-wrap items-center justify-between">
            

            <!-- Mobile hamburger Button -->               
            <button
                aria-label="Toggle Navigation" class="text-white md:hidden focus:outline-none"
                @click="toggleSidebar"
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
            <div 
                v-show="isSidebarOpen" class="fixed inset-0 z-50 bg-transparent bg-opacity-75 md:hidden"
                @click="closeSidebar"
            />

            <div
                :class="{'transform translate-x-90': isSidebarOpen, 'transform transform-x-0': !isSidebarOpen}"
                class="fixed top-0 z-50 flex flex-col w-2/4 h-full p-4 text-center space-x-8 transition-transform duration-300 ease bg-gray-900 -left-90 md:hidden *:py-4 *:my-1 *:rounded-lg *:hover:text-gray-400 *:hover:ring-1 *:focus:text-gray-400 *:focus:outline-none *:focus:ring-2 *:focus:ring-indigo-500 *:shadow-xl"
            >
                <NuxtLink to="/" aria-label="Go to Home Page"  @click="closeSidebar">
                    Home
                </NuxtLink>

                <NuxtLink to="/about" aria-label="Go to About Page"  @click="closeSidebar">
                    About
                </NuxtLink>

                <NuxtLink to="/01" aria-label="Go to Post 1 Page" @click="closeSidebar">
                    Post 1
                </NuxtLink>

                <NuxtLink to="/02" aria-label="Go to post 2 Page" @click="closeSidebar">
                    Data Fetching
                </NuxtLink>

                <NuxtLink to="/login" aria-label="Login Page" target="_blank" @click="closeSidebar">
                    Login
                </NuxtLink>
            </div>

            <!-- Desktop Navigation (Flex) -->
            <div class="hidden space-x-6 md:flex *:px-4 *:rounded-lg *:py-2 *:hover:text-gray-400 *:focus:text-gray-400 *:focus:outline-none *:focus:ring-2 *:focus:ring-indigo-500 *:shadow-xl">
                <NuxtLink to="/" aria-label="Go to Home Page" class="flex items-center">
                    <span class="flex items-center mr-1 text-xl"> 
                        <!-- <Icon name="mdi:home-variant" />  -->
                        <Icon name="mdi:home" /> 
                    </span>
                    <span>Home</span>
                </NuxtLink>

                <NuxtLink to="/about" aria-label="Go to About Page" class="flex items-center">
                    <span class="flex items-center mr-1 text-xl"> 
                        <Icon name="mdi:about" /> 
                    </span>
                    <span>About</span>
                </NuxtLink>

                <NuxtLink to="/01" aria-label="Go to Post 1 Page" class="flex items-center">
                    <span class="flex items-center mr-1 text-xl"> 
                        <Icon name="mdi:database-check-outline" /> 
                    </span>
                    <span>Post 1</span>
                </NuxtLink>

                <NuxtLink to="/02" aria-label="Go to Post 2 Page" class="flex items-center">
                    <span class="flex items-center mr-1 text-xl"> 
                        <Icon name="mdi:form" /> 
                    </span>
                    <span>Post 2</span>
                </NuxtLink>

                <NuxtLink to="/login" aria-label="Login Page" target="_blank" class="flex items-center">
                    <span class="flex items-center mr-1 text-xl"> 
                        <Icon name="mdi:login-variant" /> 
                    </span>
                    <span>Login</span>
                </NuxtLink>
            </div>
            
        </div>
    </nav>
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