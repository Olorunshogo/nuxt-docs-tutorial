
<script lang="ts" setup>
    import { reactive } from 'vue';
    import { useHead, navigateTo } from 'nuxt/app';
    //import { useUserSession } from '../composables/useUserSession';
    //const { loggedIn, user, fetch: refreshSession } = useUserSession()
    const credentials = reactive({
        // fullName: '',
        email: '',
        password: ''
    })

    useHead({
        title: 'Login Page'
    });

    definePageMeta({
        layout: 'dashboard'
    });

    async function login() {
        $fetch('/api/login', {
            method: 'POST',
            body: credentials
        })
        .then(async () => {
            // Refresh the session on client-side and redirect to the home page
            //await refreshSession()
            await navigateTo('/dashboard/overview')
        })
        .catch(() => alert('Bad credentials'))
    }

</script>


<template>
  <div class="relative w-5/5">
    <h1>Login Page</h1>

    <div class="p-4 my-8 w-5/5">
        <h1 class="text-2xl font-bold text-grey-700">Personal information</h1>

        <form 
            @submit.prevent="login" autocomplete="on" aria
            class=" mt-8 grid grid-cols-1 *:rounded-lg gap-4"
        >
            <!-- <input v-model="credentials.fullName" type="text" name="fullName" id="fullName"> -->
            <div class="w-5/5">
                <div class="grid grid-cols-1 gap-4 w-5/5">
                    <label class="my-2 text-xl font-bold text-grey-700" for="email">Email</label>
                    <input 
                        v-model="credentials.email" type="email" name="email" id="email" required autocomplete="email"
                        class="px-4 py-2 transition-all duration-300 ease-out border-2 rounded-lg outline-none focus:outline-2 focus:ring-2 border-slate-700 focus:border-none focus:ring-slate-400 bg-slate-800"
                    >
                </div>
                <div class="grid grid-cols-1 w-5/5 ">
                    <label class="my-2 text-xl font-bold text-grey-700" for="password">Password</label>
                    <input 
                        v-model="credentials.password" type="password" name="password" id="password" required autocomplete="password"
                        class="px-4 py-2 transition-all duration-300 ease-out border-2 rounded-lg outline-none focus:outline-2 focus:ring-2 border-slate-700 focus:border-none focus:ring-slate-400 bg-slate-800"
                    >
                </div>
            </div>
            <button class="px-4 py-2 mx-auto transition-all duration-300 ease-out border-2 rounded-lg outline-none w-35 focus:outline-2 hover:text-slate-300 focus:ring-2 hover:ring-2 border-slate-700 focus:border-none hover:ring-slate-400 bg-slate-800"
                type="submit"
            >
            Login
            </button>
        </form>
    </div>
  </div>
</template>


<style lang="css" scoped>

</style>