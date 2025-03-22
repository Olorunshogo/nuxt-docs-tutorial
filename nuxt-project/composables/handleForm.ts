
const formData = ref({
    name: '',
    age: 0,
    email: 0,
    password: 0
});

export function useHandleForm() {
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

    return {
        isSubmitting,
        errorMessage,
        successMessage,
        formData,
        handleFormSubmit
    }
}