
'use server';

import { getFirestore } from 'firebase-admin/firestore';
import { adminApp } from '@/lib/firebase-admin';
import type { ConversationMessage } from '../abe/actions';

export interface ConversationHistory {
  id: string;
  createdAt: string;
  messages: ConversationMessage[];
}

export async function getConversations(): Promise<ConversationHistory[]> {
  // Placeholder user ID. In a real app, this would come from a validated session.
  const userId = "placeholder-user-id-for-now";
  if (!userId) {
    return [];
  }

  const db = getFirestore(adminApp);

  try {
    const snapshot = await db.collection('users').doc(userId).collection('conversations')
      .orderBy('createdAt', 'desc')
      .get();
      
    if (snapshot.empty) {
      return [];
    }

    const conversations: ConversationHistory[] = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    } as ConversationHistory));

    return conversations;
  } catch (error) {
    console.error("Error fetching conversations:", error);
    return [];
  }
}
