
import { defaultConfig, defineFormKitConfig } from '@formkit/vue';
import { createLocalStoragePlugin } from '@formkit/addons';

import { rootClasses } from './formkit.theme';
import { genesisIcons } from '@formkit/icons';

const config = defaultConfig({
    plugins: [
        createLocalStoragePlugin({
            // Plugin defaults:
            prefix: 'formkit',
            key: 'undefined',
            control: 'undefined',
            maxAge: 3600000, // 1 hour
            debounce: 200,
            beforeSave: undefined,
            beforeLoad: undefined
        }),
    ],
})

// export default {
//     plugins: [],
// }


export default defineFormKitConfig({
    config: {
        rootClasses,
    },
    theme: 'genesisIcon',
    icons: {
        ...genesisIcons,
    },
    plugins: [
        createLocalStoragePlugin({
            prefix: 'formkit',
            maxAge: 1000 * 60 * 60,
        }),
    ],

})



