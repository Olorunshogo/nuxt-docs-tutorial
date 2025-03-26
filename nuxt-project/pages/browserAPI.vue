
<script setup>

    import { useHead } from 'nuxt/app';
    import { useLocalStorageProductsCategories } from '../composables/browserAPI/dataLocalStorage';

    useHead({
        title: 'Browser API'
    })
    
    // Data Fetching with Local Storage
    //const { pending, productInfo, handleRefresh, error } = useLocalStorageProductsCategories();

    // Device Orientation
    function handleOrientation(e) {
        console.log(e);

        let alpha = e.alpha;
        let beta = e.beta;
        let gamma = e.gamma;

        let cube = document.querySelector('.cube');
        cube.style.transform = 'rotateX(' + beta +'deg) rotateY(' + gamma +'deg) rotateZ(' + alpha +'deg)';
    }

    async function requestDeviceOrientation() {
        if(typeof DeviceOrientationEvent != 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
            // iOs 13+
            try {
                const permissionState = await DeviceOrientationEvent.requestPermission();
                if (permissionState === 'granted') {
                    window.addEventListener('deviceorientation', handleOrientation)
                }
            } catch(error) {
                console.error(error);
            }


            
        } else if('DeviceOrientationEvent' in window) {
            // Not iOs 13+
            window.addEventListener('deviceorientation', handleOrientation)
        } else {
            // If the function is not supported at all, alert
            alert('Device not supported');
        }
    }
    
</script>

<template>
  <div class="flex flex-col gap-8">
    <h1 class="text-2xl font-bold text-center">Browser API Page</h1>

    <!-- Data Fetching with Local Storage -->
    <div>
        <div v-if="pending">
            <p>Loading</p>
        </div>

        <div v-else-if="error">
            <p>Error Code: {{ error.statusCode }}</p>
            <p>Error Message: {{ error.message }}</p>
        </div>

        <div v-else>
            <button class="px-4 py-2 mb-4 rounded-lg border-1" @click="handleRefresh">Refresh Data</button>

            <div v-if="productInfo?.products">
                <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <div 
                        v-for="product in productInfo.products" :key="product.id"
                        class="grid grid-cols-1 p-4 bg-white rounded-lg shadow-lg"
                    >
                        <img :src="product.image" alt="" class="flex mx-auto h-auto w-[75px]">
                        <h2 class="mt-2 text-sm text-center text-black">{{ product.title }}</h2>
                    </div>

                </div>
            </div>
        </div>            
            
    </div>

    <!-- Detect the device orientation with JS by moinSite -->
    <div>
        <button class="px-4 py-2 my-2 rounded-lg border-1" @click="requestDeviceOrientation">Permission</button>

        <div class="cube">
            <div>Front</div>
            <div class="rotate-y-180">Back</div>
            <div class="-rotate-x-90">Top</div>
            <div class="totate-x-90">Bottom</div>
            <div class="-rotate-y-90">Left</div>
            <div class="rotate-y-90">Right</div>
        </div>
    </div>
     
  </div>
</template>



<style lang="css" scoped>
    .cube {
        position: relative;
        margin: 0 auto;
        color: black;
        background-color: #918686;
        width: 120px;
        height: 120px;
        /* transform: translate(-50px, -50px); */
        transform-style: preserve-3d;
    }

    .cube > div {
        /* transform: translateZ(50px); */
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #ccc;
        border: 1px solid #999;
    }
    
</style>