
'use server';
/**
 * @fileOverview An AI flow that acts as an expert on Abe Newmeyer's philosophy.
 * - askAbe - A function that answers questions based on Abe's writings.
 * - knowledge - The knowledge base retrieved from training-data.json.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import knowledgeBase from '@/lib/training-data.json';
import { embed } from 'genkit/embed';
import { embedder } from '@/ai/genkit';
import { nearestNeighbor } from 'genkit/retriever';

// Prepare the knowledge base by adding a slug for URL generation
const knowledge = knowledgeBase.map(doc => ({
  ...doc,
  slug: doc.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
}));

const documentRetriever = nearestNeighbor(
  await Promise.all(
    knowledge.map(async (doc) => ({
      document: {
        content: [
          { text: `Title: ${doc.title}\nContent: ${doc.content}` },
        ],
        metadata: {
          title: doc.title,
          slug: doc.slug,
          // We don't have dates in the current training data, so we'll omit it for now.
          // This can be added later if the JSON is updated.
        },
      },
      embedding: await embed({
        embedder,
        content: `Title: ${doc.title}\nContent: ${doc.content}`,
      }),
    }))
  )
);

const AskAbeInputSchema = z.object({
  question: z.string().describe("The user's question for AI Abe."),
});
export type AskAbeInput = z.infer<typeof AskAbeInputSchema>;

const AskAbeOutputSchema = z.object({
  answer: z.string().describe("AI Abe's response, grounded in the provided context."),
});
export type AskAbeOutput = z.infer<typeof AskAbeOutputSchema>;

export async function askAbe(input: AskAbeInput): Promise<AskAbeOutput> {
  return askAbeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askAbePrompt',
  input: { schema: z.object({
    question: z.string(),
    context: z.any(),
  })},
  output: { schema: AskAbeOutputSchema },
  prompt: `You are AI Abe, an expert assistant on the philosophy and writings of Abe Newmeyer. Your answers MUST be based *only* on the provided context from his writings.

Your task is to answer the user's question clearly and concisely, directly using the information from the provided context.

When you use information from a source, you MUST cite it at the end of the sentence. A citation looks like this: [Source: Title of the List](/lists#slug-of-the-list). You can and should include up to three (3) citations if multiple sources are relevant, but do not exceed three.

User Question:
"{{{question}}}"

Context from Abe's Writings:
{{#each context}}
- **Source**: "{{document.metadata.title}}" (slug: {{document.metadata.slug}})
- **Content**:
"{{#each document.content}}{{this.text}}{{/each}}"
---
{{/each}}
`,
});


const askAbeFlow = ai.defineFlow(
  {
    name: 'askAbeFlow',
    inputSchema: AskAbeInputSchema,
    outputSchema: AskAbeOutputSchema,
  },
  async ({ question }) => {
    const context = await documentRetriever(question, { k: 3 });

    const { output } = await prompt({ question, context });
    if (!output) {
      return { answer: "I'm sorry, I couldn't find a relevant answer in Abe's writings." };
    }
    
    // Convert citations to markdown links
    let { answer } = output;
    const citationRegex = /\[Source:\s*(.*?)]\(\/lists#(.*?)\)/g;
    answer = answer.replace(citationRegex, (match, title, slug) => {
        return `[Source: ${title}](/lists#${slug})`;
    });

    return { answer };
  }
);
