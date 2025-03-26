
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
    <nav class=" w-5/5">
        <div class="relative flex flex-wrap items-center justify-between">
            

            <!-- Mobile hamburger Button -->               
            <button
                aria-label="Toggle Navigation" 
                class="flex items-center text-white md:hidden focus:outline-none"
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
                :class="{'transform translate-x-100': isSidebarOpen, 'transform transform-x-0': !isSidebarOpen}"
                class="fixed top-0 -left-100 z-50 flex flex-col items-center w-2/4 *:w-5/5 *:mx-auto h-full p-4 space-x-16 transition-transform duration-300 ease bg-gray-900 md:hidden *:py-4 *:px-8 *:my-1 *:rounded-lg *:hover:text-gray-400 *:hover:ring-1 outline-none *:hover:shadow-xl"
            >
                <NuxtLink to="/" aria-label="Home Page" class="flex items-center"  @click="closeSidebar">
                    <span class="flex items-center mr-1 text-xl"> 
                        <Icon name="mdi:home" /> 
                    </span>
                    <span>Home</span>
                </NuxtLink>

                <NuxtLink to="/about" aria-label="About Page" class="flex items-center"  @click="closeSidebar">
                    <span class="flex items-center mr-1 text-xl"> 
                        <Icon name="mdi:about" /> 
                    </span>
                    <span>About</span>
                </NuxtLink>

                <NuxtLink to="/data" aria-label="Data Fetching Page" class="flex items-center" @click="closeSidebar">
                    <span class="flex items-center mr-1 text-xl"> 
                        <Icon name="mdi:database-check-outline" /> 
                    </span>
                    <span>Data Fetching</span>
                </NuxtLink>

                <NuxtLink to="/forms" aria-label="Forms Page" class="flex items-center" @click="closeSidebar">
                    <span class="flex items-center mr-1 text-xl"> 
                        <Icon name="mdi:form" /> 
                    </span>
                    <span>Forms</span>
                </NuxtLink>

                <NuxtLink to="/browserAPI" aria-label="Browser API Page" class="flex items-center" @click="closeSidebar">
                    <span class="flex items-center mr-1 text-xl"> 
                        <Icon name="mdi:api" /> 
                    </span>
                    <span>Browser API</span>
                </NuxtLink>

                <NuxtLink to="/login" aria-label="Login Page" class="flex items-center hover:opacity-80" target="_blank" @click="closeSidebar">
                    <span class="flex items-center mr-1 text-xl"> 
                        <Icon name="mdi:login-variant" /> 
                    </span>
                    <span>Login</span>
                </NuxtLink>
            </div>

            <!-- Desktop Navigation (Flex) -->
            <div class="hidden space-x-2 *:text-(--nav-green) md:flex *:px-4 *:rounded-lg *:py-2 *:hover:opacity-70 *:focus:opacity-100 *:active:text-green-500 transition-all duration-300 ease-out *:hover:shadow-xl">
                <NuxtLink to="/" aria-label="Home Page" class="flex items-center gap-1">
                    <span class="flex items-center text-xl"> 
                        <Icon name="mdi:home" /> 
                    </span>
                    <span>Home</span>
                </NuxtLink>

                <NuxtLink to="/about" aria-label="About Page" class="flex items-center gap-1">
                    <span class="flex items-center text-xl"> 
                        <Icon name="mdi:about" /> 
                    </span>
                    <span>About</span>
                </NuxtLink>

                <NuxtLink to="/data" aria-label="Post 1 Page" class="flex items-center gap-1">
                    <span class="flex items-center text-xl"> 
                        <Icon name="mdi:database-check-outline" /> 
                    </span>
                    <span>Data</span>
                </NuxtLink>

                <NuxtLink to="/forms" aria-label="Post 2 Page" class="flex items-center gap-1">
                    <span class="flex items-center text-xl"> 
                        <Icon name="mdi:form" /> 
                    </span>
                    <span>Forms</span>
                </NuxtLink>

                <NuxtLink to="/browserAPI" aria-label="Browser API Page" target="_blank" class="flex items-center gap-1">
                    <span>Browser</span>
                    <span class="flex items-center text-xl"> 
                        <Icon name="mdi:api" /> 
                    </span>
                </NuxtLink>

                <NuxtLink to="/login" aria-label="Login Page" target="_blank" class="flex items-center gap-1">
                    <span class="flex items-center text-xl"> 
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