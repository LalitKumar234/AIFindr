import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export const getUserEmbedding = async (userDescription: string) => {
  const response = await openai.embeddings.create({
    model: 'text-embedding-ada-002',
    input: userDescription,
  });
  return response.data[0].embedding;
};