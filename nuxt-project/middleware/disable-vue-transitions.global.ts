
export default defineNuxtRouteMiddleware(to => {
    if (import.meta.server || !document.startViewTransition) { return }

    // Disable built-in Vue transitions
    // to.meta.pageTransition = false
    // to.meta.layoutTransition = false
})

// Known Issues
// If you perform data fetching within your page setup functions, that you may wish to reconsider using this feature for the moment. 
// (By design, View Transitions completely freeze DOM updates whilst they are taking place.) 
// We're looking at restrict the View Transition to the final moments before <Suspense> resolves, but in the interim you may want to consider carefully whether to adopt this feature if this describes you.