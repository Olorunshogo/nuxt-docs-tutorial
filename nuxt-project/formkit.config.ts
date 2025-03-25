
import { defineFormKitConfig, defaultConfig } from '@formkit/vue';
// import { createProPlugin, inputs } from '@formkit/pro';

import { rootClasses } from './formkit.theme';
import { genesisIcons } from '@formkit/icons';

export default defineFormKitConfig({
    config: {
        rootClasses,
    },
    theme: 'genesisIcon',
    icons: {
        ...genesisIcons,
    }        
})

