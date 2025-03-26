
<script lang="ts" setup>
    import { ref, onMounted, computed } from 'vue';
    import { getNode } from '@formkit/core';
    import { useHead } from 'nuxt/app';
    import { avatarMan } from '@formkit/icons';

    useHead({
        title: 'Post 2'
    });

    // Form 1
    const email = `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/></svg>`;
    const location = `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"/></svg>`;
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

    // Form 3
    const city = ref<string>('Florence');
    const cities = ref<string[]>([
        'Prague','Rome','Berlin',
        'Amsterdam','Barcelona','London',
    ])

    function randomCity() {
        let index = Math.floor(Math.random() * (cities.value.length - 1));
        let selectedCity = cities.value[index]
        if (selectedCity !== undefined && selectedCity !== city.value) {
            city.value = selectedCity
        } else {
            randomCity()
        }
    }

    const fruit = ref<string>('');
    const errors = computed(() => {
        return fruit.value ? [`Sorry, we are sold out of ${fruit.value}`] : [];
    });
    
    const airlines = {
        american: 'American Airlines',
        delta: 'Delta',
        easyjet: 'easyJet',
        jetblue: 'JetBlue',
        klm: 'KLM',
        lufthansa: 'Lufthansa',
    }

    // Form 4
    const submitted = ref<boolean>(false);
    const submitHandler = async () => {
        // Let us pretend this is an ajax request:
        await new Promise((r) => setTimeout(r, 1000));
        submitted.value = true;
        onMounted(() => {
            setTimeout(() => {
                submitted.value = false; 
            }, 2000)
        });
    }

</script>

<template>
<div>
    <h1 class="text-2xl font-bold text-center">Posts 2 Page</h1>
    <p>This is the posts 2 page</p>

    <a 
        href="../public/cv/Full_CV.pdf"
        download="Full_CV.pdf"
        class="download-btn"
    >
        <button>Download Cv</button>
    </a>

    <!-- FormKit -->
    
    <div class="grid flex-wrap grid-cols-1 gap-8 lg:flex lg:gap-16">

        <div>
            <h2 class="text-xl font-semibold text-center">Creating the form</h2>

            <!-- <h3>Form 1</h3>
            <FormKit
                type="form" #default="{ value }" :value="data.value"
                @submit="handleSubmit"
            >
                <FormKit
                    type="text" label="Full Name" name="fullName" placeholder="Full Name"
                    :prefix-icon="avatarMan" validation="required|name|matches:/^@[a-zA-Z]+$/|length:5"
                    help="Full Name"
                />
                <FormKit
                    type="email" label="Your Email" name="Email" placeholder="email@domain.com"
                    :prefix-icon="email" validation="required|length:5|email"
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
            </FormKit> -->
        </div>
        

        <!-- <div class="relative">
            <h3>Form 2</h3>
            <FormKit 
                type="form" @submit="submitForm"
                submit-label="Submit" #default="{ value }"
            >

                <FormKit
                    type="group" name="fullName" id="fullName"
                >
                    <FormKit 
                        type="text" name="firstName" id="firstName" label="First Name"
                        placeholder="Scarlet" help="Enter your first name here" suffix-icon="settings"
                        validation="required|name|matches:/^@[a-zA-Z]+$/|length:5|not:Admin"
                    />
                    <FormKit 
                        type="text" name="lastName" id="lastName" label="Last Name"
                        validation="required|not:Admin" placeholder="Sword" icon="avatarWoman"
                        help="Enter your last name here"
                    />
                </FormKit>
                
                <FormKit 
                    type="email" name="email" label="Email"
                    help="Your email address" placeholder="hello@email.com"
                    validation="required|length:5|email"
                />
                
                <FormKit 
                    type="select" name="class" id="class" label="Class"
                    placeholder="Select a Class"
                    :options="['Warror', 'Mage', 'Assassin']"
                />

                <FormKit 
                    type="checkbox" name="checkbox" label="Check a Pen Brand"
                    class="flex"
                    help="Check Pen brand" placeholder="Check a Pen brand"
                    :options="['Bik', 'Lucky', 'Tuns']"
                />

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
            
        </div> -->

        <h3>Form 3</h3>
        <!-- <div class="relative">
            <FormKit type="form" use-local-storage>
                <FormKit
                    type="text" name="username" label="Username" placeholder="username"
                    help="Pick a new username" value="@FormKit" prefix-icon="avatarMan"
                    validation="required|matches:/^@[a-zA-Z]+$/|length:5"
                    data-category="username" :delay="1000"
                />
                <FormKit
                    type="text" label="European city" v-model="city"
                    help="What is your favorite European city?"
                    data-category="city" :prefix-icon="location"
                />
                <FormKit type="button" @click="randomCity">Random City</FormKit>
                <pre>City: {{ city }}</pre>

                <FormKit
                    label="Favorite type of coffee type?" id="coffee"
                    help="What is your favorite type of coffee?"
                    data-category="coffee"
                />

                <FormKit 
                    type="group" name="address"
                    :value="{
                        street: '456 Mangrove St',
                        city: 'Franklin',
                        state: 'ny',
                    }"
                    data-category="address"
                >
                    <FormKit
                        label="Street"
                        name="street"
                    />
                    <FormKit
                        name="city"
                        label="City"
                    />
                    
                    <FormKit
                        type="select" name="state" label="State"
                        :options="{
                            ca: 'California',
                            ny: 'New York',
                            va: 'Virginia',
                        }"  
                    />
                </FormKit>

                <FormKit
                    type="select" label="Fruit" placeholder="Select a fruit"
                    v-model="fruit" :options="['Apple', 'Peach', 'Pear']" :errors="errors"
                />

                <FormKit
                    label="Airlines" type="checkbox" :options="airlines"
                    help="Which airlines do you prefer to fly on?"
                >
                    <template #label="context">
                        <img
                            :src="`https://cdn.formk.it/example-assets/airlines/${context.option.value}.png`"
                            :width="120" :alt="context.option.label"
                        />
                    </template>
                </FormKit>

                <FormKit
                    label="Full name" help="Please provide your full name."
                    :sections-schema="{
                        messages: { $el: 'div' },
                        message: { $el: 'span' },
                    }"
                    validation="required|length:5" validation-visibility="live"
                />

                <FormKit
                    type="checkbox" validation="+accepted" validation-visibility="live" label="Terms and conditions"
                    :sections-schema="{
                        outer: { $el: null },
                        inner: { $el: null },
                        messages: { $el: null },
                        message: { $el: 'div' },
                    }"
                    help="Do you accept our terms and conditions?"
                />

                <FormKit
                    type="text" label="Your name" help="Try entering the name 'FormKit.'"
                    :sections-schema="{
                        label: {
                            children: [
                                '$label',
                                {
                                if: '$value == FormKit',
                                then: {
                                    $el: 'span',
                                    attrs: {
                                    style: { color: 'green' },
                                    },
                                    children: [
                                    {
                                        $el: 'span',
                                        children: 'That\'s our name too!',
                                        attrs: {
                                        class: 'ml-2',
                                        },
                                    },
                                    ],
                                },
                                },
                            ],
                        },
                    }" 
                    validation-visibility="live"
                />
  
            </FormKit>
        </div> -->

        <h4>Form 4</h4>
        <!-- <div class="relative">
            <FormKit
                type="form" id="registration-example" :actions="false"
                :form-class="submitted ? 'hide' : 'show'" #default="{ value }"
                @submit="submitHandler" submit-label="Register"
            >
                <h4 class="mb-2 text-xl font-semibold text-center">Register</h4>
                <p class="mb-4 text-sm">
                    You can put any type of element inside a form, not just FormKit inputs
                    (although only FormKit inputs are included with the submission).
                </p>

                <FormKit
                    type="text" name="name" id="name" label="Your name"
                    placeholder="Jane Doe" validation="required"
                    help="What is your name"
                />

                <FormKit
                    type="email" name="email" id="email" label="Your Email"
                    placeholder="email@domain.com" validation="required|email"
                    help="What email should we use?"
                />

                <div class="flex gap-8">
                    <FormKit
                        type="password" name="password" id="password"
                        label="Password" placeholder="Your Password" value="password*"
                        validation="required|length:6|matches:/[^a-zA-Z]/"  help="Choose a password"
                        :validation-messages="{
                            matches: 'Please include at least one symbol',
                        }" 
                        :errors="['our server is not working.', 'But we dont like you anyway']"
                        incomplete-message="Sorry, please fill all input fields before submitting the form"                       
                    />
                    
                    <FormKit
                        type="password" name="password_confirm" id="password_confirm"
                        label="Confirm Password" placeholder="Confirm Password" value="password*"
                        validation="required|confirm" help="Confirm your password"
                    />
                </div>

                <FormKit type="submit" label="Register"></FormKit>

                <pre wrap>{{ value }}</pre>
                
            </FormKit>
            <div v-if="submitted">
                <h2 class="text-xl text-green-500">Submission successful</h2>
            </div>
        </div> -->

        

        
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

    .download-btn button {
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 16px;
        border-radius: 5px;
    }

    .download-btn button:hover {
        background-color: #45a049;
    }
</style>