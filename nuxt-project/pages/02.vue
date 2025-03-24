
<script lang="ts" setup>
    import { ref, onMounted } from 'vue';
    import { getNode } from '@formkit/core';
    import { useHead } from 'nuxt/app';

    useHead({
        title: 'Post 2'
    });

    // Form 1
    type Value = {
        fullName: string | null;
        Email: string | null;
        favorite_food: string | null;
        instructions: string | null;
        length: number | null;
    }

    type Fields = {
        fullName: string,
        email: string,
        class: string,
        checkbox: string
    };

    const data = ref<Record<string, any>>({
        fullName: 'fullName',
        Email: 'email@domain.com',
        favorite_food: 'Pizza',
        instructions: '',
    
    });    

    async function handleSubmit(value: Value) {
        alert('Form has been submitted');
    
        // Alert the individual values
        // alert(`Full Name: ${value.fullName}`);
        // alert(`Email: ${value.Email}`);
        // alert(`Favorite Food: ${value.favorite_food}`);
        // alert(`Special Instructions: ${value.instructions}`);
    }

    // Form 2 
    const isFormSubmitted = ref<boolean>(false);
    const isSubmittedModal = ref<boolean>(false);
    
    const submitForm = async (fields : Fields) => {
        await new Promise((r) => {
            setTimeout(r, 1000)
        })
        alert(JSON.stringify(fields))
        console.log('Form Submitted');
        // alert(JSON.stringify('Full Name is: ' + fields.fullName));
        // alert(JSON.stringify('Email is: ' + fields.email));
        // alert(JSON.stringify('Class is: ' + fields.class));
        // alert(JSON.stringify('Checkbox is: ' + fields.checkbox));

        isFormSubmitted.value = true;        

        if (isFormSubmitted.value === true) {
            setTimeout(() => {
                isSubmittedModal.value = true;
            }, 2000);
        };
        setTimeout(() => {
            isSubmittedModal.value = false;
        }, 5000);
    }

    // Transition hooks for modal
    const beforeEnter = (el: Element) => {
        if (el instanceof HTMLElement) {
            el.style.transform = 'translateY(100%)'; // Start from the bottom
            el.style.opacity = '0'; // Start hidden
        }
    }

    const enter = (el: Element, done: Function) => {
        if (el instanceof HTMLElement) {
            el.offsetHeight; // Trigger reflow to restart the transition
            el.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            el.style.transform = 'translateY(0)'; // Move to the final position
            el.style.opacity = '1'; // Fade in
        }
        done();
    };

    const leave = (el: HTMLElement, done: Function) => {
        el.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
        el.style.transform = 'translateY(100%)'; // Move back to the bottom
        el.style.opacity = '0'; // Fade out
        done();
    }; 
    
</script>

<template>
<div>
    <h1 class="text-2xl font-bold text-center">Posts 2 Page</h1>
    <p>This is the posts 2 page</p>

    <!-- FormKit -->
    <div class="flex gap-8">

        <div>
            <h2 class="form-label">Creating the form</h2>

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

        

        <div class="relative">
            <FormKit 
                type="form" @submit="submitForm" 
                submit-label="Submit" #default="{ value }"
            >
                <!-- Name -->
                <!-- <FormKit 
                    type="text" name="fullName" id="fullName" label="Full Name"
                    validation="required|not:Admin" placeholder="Scarlet Sword"
                    help="Enter your character's full name here"
                /> -->

                <!-- Full Name Group -->
                <FormKit
                    type="group" name="fullName" id="fullName"
                >
                    <FormKit 
                        type="text" name="firstName" id="firstName" label="First Name"
                        validation="required|not:Admin" placeholder="Scarlet"
                        help="Enter your first name here"
                    />
                    <FormKit 
                        type="text" name="lastName" id="lastName" label="Last Name"
                        validation="required|not:Admin" placeholder="Sword"
                        help="Enter your last name here"
                    />
                </FormKit>
                
                <!-- Email -->
                <FormKit 
                    type="email" name="email" label="Email"
                    help="Your email address" placeholder="hello@email.com"
                />
                
                <!-- Select -->
                <FormKit 
                    type="select" name="class" id="class" label="Class"
                    placeholder="Select a Class"
                    :options="['Warror', 'Mage', 'Assassin']"
                />

               <!-- Checkbox -->
                <FormKit 
                    type="checkbox" name="checkbox" label="Check a Pen Brand"
                    class="flex"
                    help="Check Pen brand" placeholder="Check a Pen brand"
                    :options="['Bik', 'Lucky', 'Tuns']"
                />

                <!-- Range Group -->
                <FormKit 
                    type="group" name="attributes"
                    id="attributes"
                    validation-visibility="live" validation="max_sum"
                >
                    <FormKit
                        type="range" name="skill" id="skill" label="skill"
                        value="5" min="1" max="10" step="1"
                        help="How much skill points to start with"
                    />

                    <FormKit
                        type="range" name="strength" id="strength" label="Strength"
                        value="5" min="1" max="10" step="1"
                        help="How much strength points to start with"
                    />

                    <FormKit 
                        type="range" name="dexterity" id="dexterity" label="Dexterity"
                        value="5" min="1" max="10" step="1"
                        help="How many dexterity points should this character have?"
                    />
                </FormKit>

                <pre wrap>{{ value }}</pre>
    
            </FormKit>

            <Transition
                name="modal-transition"
                @before-enter="beforeEnter" @enter="enter" leave="leave"
            >
                <div v-if="isSubmittedModal" class="fixed bg-black z-99 border-2 border-green-600 w-3/5 max-w-[400px] rounded-lg shadow-lg *:text-center py-4 bottom-[300px] left-25/100">
                    <h2 class="font-bold">Modal Header</h2>
                    <p>Form is Submitted</p>
                </div>
            </Transition>
            
        </div>

        

        
    </div>
     
</div>
</template>

<style lang="css" scoped>
    .modal-transition-enter-active,
    .modal-transition-leave-active {
        transition: transform 0.5s ease, opacity 0.5s ease;
    }

    .modal-transition-enter, 
    .modal-transition-leave-to  {
        transform: translateY(100%);
        opacity: 0;
    }
</style>