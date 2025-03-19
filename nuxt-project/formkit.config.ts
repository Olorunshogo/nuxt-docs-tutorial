
import { defineFormKitConfig } from '@formkit/vue';
// import { createProPlugin, inputs } from '@formkit/pro';
import { defaultConfig } from '@formkit/vue';
import { rootClasses } from './formkit.theme';
import { genesisIcons } from '@formkit/icons';

export default defineFormKitConfig({
    // rules: {},
    // locales: {},
    // etc. 
    config: {
        rootClasses,
    },

    // const config = defaultConfig({
    //     icons: {
    //         ...genesisIcons
    //     },
    //     plugins: [proPlugin],
    // })
        
})

