
<script setup lang="ts">
    
    import { onMounted, ref, reactive } from 'vue';
    import { useHead } from 'nuxt/app';
    import { useLocalStorageProductsCategories } from '../utils/browserAPI/dataLocalStorage';
    import { handleOrientation, requestDeviceOrientation, handleDoubleTap } from '../utils/browserAPI/deviceOrientation';

    useHead({
        title: 'Browser API'
    })
    
    // Data Fetching with Local Storage
    const { pending, productInfo, handleRefresh, error } = useLocalStorageProductsCategories();

    // Device Orientation
    const alpha = ref<number>(0);
    const beta = ref<number>(0);
    const gamma = ref<number>(0);

    const cubeStyle = reactive({
        transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)',
    });

    onMounted(() => {
        requestDeviceOrientation(handleOrientation);
    });

    // Location API
    // const locationApiUrl = ref<string>('https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY');
        // curl -X POST "https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY" \
        //     -H "Content-Type: application/json" \
        //     -d \
        //     '{ "homeMobileCountryCode":310,
        //     "homeMobileNetworkCode":410,
        //     "radioType":"gsm",
        //     "carrier":"Vodafone",
        //     "considerIp":true
        // }'

    // Print current permission state to console;
    // Update onscreen message.
    async function showPermission() {
        Notification.requestPermission().then(permission => {
            // console.log('Notification permission is: ' + permission);
            // alert('Notification permission is: ' + permission);
            let p = document.getElementById('showPermission')!;
            p.textContent = 'Notification permission is: ' + permission;
        });
    }

    // // Use the notification API to request permission to send notifications.
    // function requestPermission() {
    //     Notification.requestPermission()
    //     .then((permission) => {
    //         console.log('Promise resolved: ' + permission);
    //         showPermission();
    //     })
    //     .catch((error) => {
    //         console.log('Promise was rejected');
    //         console.log(error);
    //     });
    //     console.log('TODO: Implement requestPermission()');
    // }

    async function showNotification() {
        Notification.requestPermission()
        .then(perm => {
            if (perm === 'granted') {
                const notification = new Notification("Notification Title", {
                    // body: "This is the notification body text",
                    body: Math.floor(Math.random() * 1000).toString(),
                    data: { hello: "world" },
                    icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDE5djFIM3YtMWwyLTJ2LTZjMC0zLjEgMi4wMy01LjgzIDUtNi43MVY0YTIgMiAwIDAgMSAyLTJhMiAyIDAgMCAxIDIgMnYuMjljMi45Ny44OCA1IDMuNjEgNSA2LjcxdjZ6bS03IDJhMiAyIDAgMCAxLTIgMmEyIDIgMCAwIDEtMi0yIi8+PC9zdmc+",
                    //tag: "Welcome Message",
                });
                notification.addEventListener('close', e => {
                    console.log(e);
                    alert(e)
                })
            } else {
                alert('Notification permission is: ' + perm);
            }
        });
    }

    // onMounted(() => {
    //     // setInterval(() => {
    //     //     const notification = new Notification("Notification Title", {
    //     //         // body: "This is the notification body text",
    //     //         body: 'You have been gone for ${new Date}',
    //     //         data: { hello: "world" },
    //     //         icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDE5djFIM3YtMWwyLTJ2LTZjMC0zLjEgMi4wMy01LjgzIDUtNi43MVY0YTIgMiAwIDAgMSAyLTJhMiAyIDAgMCAxIDIgMnYuMjljMi45Ny44OCA1IDMuNjEgNSA2LjcxdjZ6bS03IDJhMiAyIDAgMCAxLTIgMmEyIDIgMCAwIDEtMi0yIi8+PC9zdmc+",
    //     //         //tag: "Welcome Message",
    //     //     });

    //     //     notification.addEventListener('close', e => {
    //     //         console.log(e);
    //     //         alert(e)
    //     //     })
    //     // }, 200);
    // });

    onMounted(() => {
        const leaveDate = new Date();
        const notificationInterval = 2000;

        setInterval(() => {
            const secondsGone: number = Math.round((new Date().getTime() - leaveDate.getTime()) / 1000);
            const notification = new Notification("Come back please", {
                // body: "This is the notification body text",
                body: `You have been gone for ${secondsGone} seconds`,
                data: { hello: "world" },
                icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIxIDE5djFIM3YtMWwyLTJ2LTZjMC0zLjEgMi4wMy01LjgzIDUtNi43MVY0YTIgMiAwIDAgMSAyLTJhMiAyIDAgMCAxIDIgMnYuMjljMi45Ny44OCA1IDMuNjEgNSA2LjcxdjZ6bS03IDJhMiAyIDAgMCAxLTIgMmEyIDIgMCAwIDEtMi0yIi8+PC9zdmc+",
                //tag: "Welcome Message",
            });
            notification.addEventListener('close', e => {
                alert(e);
                alert('Notification was closed');
                console.log('Notification was closed');
            });
        }, notificationInterval)
    });
    
</script>

<template>
  <div class="flex flex-col gap-8">
    <h1 class="text-2xl font-bold text-center">Browser API Page</h1>

    <!-- Data Fetching with Local Storage -->
    <div>
        <h2 class="text-xl font-semibold text-center">1. Data Fetching with Local Storage</h2>
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
        <h2 class="text-xl font-semibold text-center">2. Device Orientation with JS</h2>
        <button class="px-4 py-2 my-2 rounded-lg border-1" onClick="requestDeviceOrientation">Permission</button>

        <div class="cube" @dblclick="handleDoubleTap">
            <div>Front</div>
            <div class="rotate-y-180">Back</div>
            <div class="-rotate-x-90">Top</div>
            <div class="totate-x-90">Bottom</div>
            <div class="-rotate-y-90">Left</div>
            <div class="rotate-y-90">Right</div>
        </div>

        <div>
            <div class="screen" @dblclick="handleDoubleTap">
                <div class="screenCube" :style="cubeStyle"></div>
                <p>Alpha: {{ alpha }}°</p>
                <p>Beta: {{ beta }}°</p>
                <p>Gamma: {{ gamma }}°</p>
            </div>
            <button onClick="requestDeviceOrientation">Enable Orientation</button>
        </div>
    </div>

    <!-- What is RFC 6455: The Websocket Protocol -->
    <div>
        <h2 class="text-xl font-semibold text-center">3. What is WebSockets Protocol? Implementation and Use Cases</h2>
        
        <div>
            <p>
                WebSockets can be used for real-time event-driven communication between the client and the server.
            </p>
        </div>
    </div>

    <!-- Notification API -->
    <div>
        <h2 class="text-xl font-semibold text-center">4. Notification API</h2>
        
        <div class="flex gap-2">
            <div class="gap-2">
                <p id="showPermission"></p>
                <button class="px-4 py-2 mr-4 rounded-lg border-1" @click="showPermission">Show Permission</button>
            </div>
            <div>
                <button class="px-4 py-2 mr-4 rounded-lg border-1" @click="showNotification">Show Notification</button>
            </div>
            
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

    .screen {
        display: flex;
        flex-direction: column;
        border-radius: 0.5rem;
        width: 200px;
        height: 100%;
        background-color: #f1f1f1;
        color:black;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
    }
    
</style>