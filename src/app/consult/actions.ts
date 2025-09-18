
'use server';

import { z } from 'zod';
import { getFirestore } from 'firebase-admin/firestore';
import { adminApp } from '@/lib/firebase-admin';
import { redirect } from 'next/navigation';

const formSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    purposeClarity: z.string().min(1, 'Please select a rating'),
    biggestChallenge: z.string().min(1, 'This field is required'),
    challengeTransformation: z.string().min(1, 'This field is required'),
    idealSelf: z.string().min(1, 'This field is required'),
    commitmentLevel: z.string().min(1, 'Please select a rating'),
});

export async function submitConsultation(formData: unknown) {
    const validatedFields = formSchema.safeParse(formData);

    if (!validatedFields.success) {
        return {
            type: 'error',
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please correct the errors and try again.',
        };
    }
    
    const db = getFirestore(adminApp);

    try {
        await db.collection('consultationSubmissions').add({
            ...validatedFields.data,
            submittedAt: new Date().toISOString(),
        });
    } catch (error) {
        console.error('Firestore Error:', error);
        return {
            type: 'error',
            message: 'There was an error saving your submission. Please try again.',
        };
    }

    try {
        const EMAILOCTOPUS_API_KEY = process.env.EMAILOCTOPUS_API_KEY;
        const EMAILOCTOPUS_LIST_ID = process.env.EMAILOCTOPUS_CONSULT_LIST_ID;

        if (!EMAILOCTOPUS_API_KEY || !EMAILOCTOPUS_LIST_ID) {
            throw new Error('EmailOctopus environment variables are not set.');
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
                    LastName: validatedFields.data.lastName,
                },
                status: 'SUBSCRIBED',
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('EmailOctopus Error:', errorData);
            // Non-critical error, so we still proceed
        }

    } catch (error) {
        console.error('EmailOctopus Integration Error:', error);
         // Non-critical error, so we still proceed
    }

    redirect('/thank-you');
}
