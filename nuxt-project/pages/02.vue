
<script lang="ts" setup>
    import { ref } from 'vue'
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Post 2'
    })

    interface Value {
        fullName: string | null;
        Email: string | null;
        favorite_food: string | null;
        instructions: string | null;
        length: number | null;
    }

    const data = ref<Record<string, any>>({
        fullName: 'fullName',
        Email: 'email@domain.com',
        favorite_food: 'Pizza',
        instructions: '',
    
    });

    

    async function handleSubmit(value:Value) {
        alert('Form has been submitted');
    
        // Alert the individual values
        alert(`Full Name: ${value.fullName}`);
        alert(`Email: ${value.Email}`);
        alert(`Favorite Food: ${value.favorite_food}`);
        alert(`Special Instructions: ${value.instructions}`);
    }


    

    
</script>

<template>
<div>
    <h1 class="text-2xl font-bold text-center">Posts 2 Page</h1>
    <p>This is the posts 2 page</p>

    <!-- FormKit -->
    <div>

        <FormKit
            type="form" #default="{ value }" :value="data.value"
            @submit="handleSubmit"
        >
            <FormKit
                type="text" label="Full Name" name="fullName" placeholder="Full Name"
                prefix-icon="name" validation="required|fullName"
                help="Full Name"
            />
            <FormKit
                type="email" label="Your Email" name="Email" placeholder="email@domain.com"
                prefix-icon="email" validation="required|email"
                help="Order confirmation will be sent to your address"
            />
            <FormKit
                type="select" label="Favorite Food" name="favorite_food" placeholder="Choose a food"
                :options="['Pizza', 'Ice Cream', 'Burger']"
            />

            <FormKit
                type="textarea" name="instructions" label="Special Instructions"
                placeholder="Allergies? No-contact delivery? Let us know."
                :help="`${data.instructions ? data.instructions.length : 0} / 20`"
                validation="length:0,20"
                validation-visibility="live"
                :validation-messages="{
                    length: 'Instructions cannot be more than 20 characters.',
                }"
            />            

            <pre wrap>{{ value }}</pre>
        </FormKit>
    </div>
     
</div>
</template>

<style lang="css" scoped>

</style>