import {genkit} from 'genkit';
import {googleAI, gemini15Pro, textEmbeddingGecko001} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.5-flash',
});

export const llm = gemini15Pro;
export const embedder = textEmbeddingGecko001;
