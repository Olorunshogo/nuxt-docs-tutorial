
export default defineNuxtPlugin((nuxtapp) => {
    const { session } = useUserSession();

    const nuxtApi = $fetch.create({
        baseURL: 'https://api.nuxt.com',
        onRequest({ request, options, error }) {
            if (session.value?.token) {
                // Note that this relies on ofetch >= 1.4.0 - you may need to refresh your lockfile
                // If the header exidt
                options.headers.set('Authorization', `Bearer ${session.value?.token}`)
            }
        },
        async onResponseError({ response }) {
            if (response.status === 401) {
                await nuxtapp.runWithContext(() => navigateTo('/login'))
            }
        }
    })

    return {
        provide: {
            nuxtApi
        }
    }
})