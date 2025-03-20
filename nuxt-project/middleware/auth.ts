
export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if a user is authenticated
    // if (isAuthenticated() === false) {
    //   return navigateTo('/login')
    // }
})

// export default defineNuxtRouteMiddleware((to, from) => {
//     // isAuthenticated() is an example method verifying if a user is authenticated
//     if (to.params.id === '1') {
//         return('/login')
//         return abortNavigation()        
//     }
//     if (to.path != '/') {
//         return navigateTo('/')
//     }
// })