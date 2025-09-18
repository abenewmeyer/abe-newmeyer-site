
'use server';

import { z } from 'zod';

const subscribeSchema = z.object({
    firstName: z.string().min(1, { message: 'First name is required.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
});


export async function subscribeToList(prevState: any, formData: FormData) {
    const validatedFields = subscribeSchema.safeParse({
        firstName: formData.get('firstName'),
        email: formData.get('email'),
    });

    if (!validatedFields.success) {
        const fieldErrors = validatedFields.error.flatten().fieldErrors;
        return {
            message: fieldErrors.firstName?.[0] || fieldErrors.email?.[0] || 'Invalid input.',
            success: false,
        };
    }

    try {
        const EMAILOCTOPUS_API_KEY = process.env.EMAILOCTOPUS_API_KEY;
        const EMAILOCTOPUS_LIST_ID = process.env.EMAILOCTOPUS_GRATITUDE_LIST_ID;

        if (!EMAILOCTOPUS_API_KEY || !EMAILOCTOPUS_LIST_ID || EMAILOCTOPUS_API_KEY === "YOUR_API_KEY_HERE") {
            console.error('EmailOctopus environment variables are not set.');
            return {
                message: 'The subscription service is not configured. Please contact the site administrator.',
                success: false,
            };
        }

        const response = await fetch(`https://emailoctopus.com/api/1.6/lists/${EMAILOCTOPUS_LIST_ID}/contacts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_key: EMAILOCTOPUS_API_KEY,
                email_address: validatedFields.data.email,
                fields: {
                    FirstName: validatedFields.data.firstName,
                },
                status: 'SUBSCRIBED',
            }),
        });
        
        const responseData = await response.json();

        if (!response.ok) {
            console.error('EmailOctopus Error:', responseData);
            const errorMessage = responseData.error?.message || 'There was an issue with your subscription. Please try again.';
            return {
                message: errorMessage,
                success: false,
            };
        }
        
        return {
            message: "Success! You've been subscribed to the Daily Gratitude Reminder.",
            success: true,
        };

    } catch (error) {
        console.error('Subscription Error:', error);
        return {
            message: 'An unexpected error occurred. Please try again later.',
            success: false,
        };
    }
}
