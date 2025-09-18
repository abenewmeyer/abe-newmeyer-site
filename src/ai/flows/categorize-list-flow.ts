
'use server';
/**
 * @fileOverview An AI flow to categorize personal notes and lists.
 *
 * - categorizeList - A function that analyzes a note and returns relevant categories.
 * - CategorizeListInput - The input type for the categorizeList function.
 * - CategorizeListOutput - The return type for the categorizeList function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const CategorizeListInputSchema = z.object({
  title: z.string().describe('The title of the note or list.'),
  content: z.string().describe('The full text content of the note or list.'),
});
export type CategorizeListInput = z.infer<typeof CategorizeListInputSchema>;

const CategorizeListOutputSchema = z.object({
  categories: z.array(z.string()).describe('An array of 2 to 3 relevant categories or keywords that summarize the content. Examples: Gratitude, Personal Growth, Resilience, Business Strategy.'),
});
export type CategorizeListOutput = z.infer<typeof CategorizeListOutputSchema>;

export async function categorizeList(input: CategorizeListInput): Promise<CategorizeListOutput> {
  return categorizeListFlow(input);
}

const prompt = ai.definePrompt({
  name: 'categorizeListPrompt',
  input: { schema: CategorizeListInputSchema },
  output: { schema: CategorizeListOutputSchema },
  prompt: `You are an expert at analyzing text and extracting key themes. Based on the following title and content of a personal note, generate 2-3 relevant categories or keywords that summarize the main topics. Focus on themes like personal growth, gratitude, resilience, business, relationships, and self-reflection.

Title: {{{title}}}

Content:
{{{content}}}
`,
});

const categorizeListFlow = ai.defineFlow(
  {
    name: 'categorizeListFlow',
    inputSchema: CategorizeListInputSchema,
    outputSchema: CategorizeListOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      return { categories: ['Personal Note'] };
    }
    // Ensure we don't have too many categories
    if (output.categories.length > 3) {
        return { categories: output.categories.slice(0, 3) };
    }
    return output;
  }
);
