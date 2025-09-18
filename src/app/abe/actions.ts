
'use server';

import { getFirestore } from 'firebase-admin/firestore';
import { adminApp } from '@/lib/firebase-admin';
import { askAbe as askAbeFlow } from '@/ai/flows/ask-abe-flow';
import { auth } from 'firebase-admin';

export interface ConversationMessage {
  role: 'user' | 'model';
  content: string;
}

export async function askAbe(
  newMessage: ConversationMessage,
  history: ConversationMessage[],
  idToken?: string, // This is a placeholder for future secure token validation
): Promise<{ success: boolean; answer?: string; error?: string }> {
  
  // In a real app, you'd validate the idToken here to get the user
  // For now, we'll use a placeholder user ID.
  // In a real implementation: const decodedToken = await auth().verifyIdToken(idToken); const userId = decodedToken.uid;
  const userId = "placeholder-user-id-for-now"; 
  if (!userId) {
    return { success: false, error: 'User not authenticated.' };
  }

  const db = getFirestore(adminApp);

  try {
    const response = await askAbeFlow({ question: newMessage.content });

    const newConversation: ConversationMessage[] = [...history, newMessage, { role: 'model', content: response.answer }];

    // We'll create a new conversation document for each interaction for simplicity.
    // A more complex app might group messages into longer conversation threads.
    await db.collection('users').doc(userId).collection('conversations').add({
      messages: newConversation,
      createdAt: new Date().toISOString(),
    });

    return { success: true, answer: response.answer };
  } catch (error) {
    console.error('Error in askAbe server action:', error);
    return { success: false, error: 'Failed to get a response from AI Abe.' };
  }
}
