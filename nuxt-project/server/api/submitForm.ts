
import { defineEventHandler } from '#imports';

interface FORM {
    name: string;
    age: number;
    email: string;
    password: string;
}

const form: FORM[] = [
    {
        name: 'Mount Doe',
        age: 43,
        email: 'info@example.com',
        password: 'The highest.'
    },
    {
            name: 'Mount Doe',
            age: 43,
            email: 'info@example.com',
            password: 'The highest.'
        },
]

export default defineEventHandler(async (event) => {
    const body = await useBody(event);

    if (!body.name || !body.age || !body.email || !body.password) {
        return { 
            statusCode: 400,
            message: 'All fields are required' 
        };
    }

    const response = {
        message: 'Form submitted successfully',
        data: body
    }

    return response;
})