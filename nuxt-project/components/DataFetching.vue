
<script lang="ts" setup>
    import { ref } from 'vue';
    import { useFetch, useAsyncData } from 'nuxt/app';

    const data = ref<any>(null);
    const formData = ref({
        name: '',
        age: 0,
        email: 0,
        password: 0
    });

    const isSubmitting = ref<boolean>(false);
    const errorMessage = ref<string>('');
    const successMessage = ref<string>('');

    async function handleFormSubmit(e: Event) {
        e.preventDefault();
        isSubmitting.value = true;
        errorMessage.value = '';
        successMessage.value = '';

        try {
            const response = await useFetch('/api/submitForm', {
                method: 'POST',
                body: formData.value,
            });
            successMessage.value = 'Form submitted successfully!'
            console.log(response);
        } catch (error) {
            console.error('Error submitting form: ', error);
        } finally {
            isSubmitting.value = false;
        }
    }

    // Video
    // const { pending, data: products, refresh } = useFetch(
    //     'https://fakestoreapi.com/products', 
    //     {
    //         lazy: false,
    //         // server: false,
    //         transform: (products) => {
    //             return products.map((product) => ({
    //                 id: product.id,
    //                 title: product.title,
    //                 image: product.image,
    //             }))
    //         }
    //     }
    // );

    // const { pending, data: products } = useFetch(
    //     'https://fakestoreapi.com/products', 
    //     {
    //         lazy: false,
    //         // pick: ["id","image", "title"],
    //     }
    // );  

    const { pending, data: productInfo, refresh, error } = useAsyncData(
        'productInfo', 
        async () => {
            const [products, categories] = await Promise.all([
                $fetch("https://fakestoreapi.com/products"),
                $fetch("https://fakestoreapi.com/products/categories"),
            ]);
            
            return {
                products, 
                categories,
            }        
        }, 
        {
            lazy: false,
            transform: (productInfo) => {
                return {
                    categories: productInfo.categories,
                    products: productInfo.products.map((product) => ({
                        id: product.id,
                        title: product.title,
                        image: product.image
                    }))
                }
            }
        }
    )



</script>


<template>
    <div class="grid gap-4">
        <div>
            <div v-if="data == null">
                No data!
            </div>
            <div v-else>
                <form @submit.prevent="handleFormSubmit">
                    <!-- Form Input Fields -->
                    <div>
                        <label for="name">Name</label>
                        <input v-model="formData.name" id="name" type="text" required />
                    </div>

                    <div>
                        <label for="age">Age</label>
                        <input v-model="formData.age" id="age" type="number" required />
                    </div>

                    <div>
                        <label for="email">Email</label>
                        <input v-model="formData.email" id="email" type="email" required />
                    </div>

                    <div>
                        <label for="password">Password</label>
                        <input v-model="formData.password" id="password" type="password" required />
                    </div>

                    <div><button type="submit" :disabled="isSubmitting">Submit</button></div>

                </form>
            </div>

            <div v-if="isSubmitting">Submitting...</div>
            <div v-if="errorMessage">{{ errorMessage }}</div>
            <div v-if="successMessage">{{ successMessage }}</div>
            
        </div>

        <div>
            <div v-if="pending">
                <p>Loading</p>
            </div>

            <div v-else-if="error">
                <p>Error Code: {{ error.statusCode }}</p>
                <p>Error Message: {{ error.message }}</p>
            </div>

            <div v-else>
                <button @click="refresh">Refresh Data</button>

                <!-- <div class="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    <div 
                        v-for="product in products" :key="product"
                        class="grid grid-cols-1 p-4 bg-white rounded-lg shadow-lg"
                    >
                        <img :src="product.image" alt="" class="flex mx-auto h-auto w-[75px]">
                        <h2 class="mt-2 text-sm text-center text-black">{{ product.title }}</h2>
                        <p>{{ product.id }}</p>
                        <p>{{ product.price }}</p>
                    </div>

                </div> -->

                <div class="grid grid-cols-2 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
</template>



<style lang="css" scoped>
    
</style>