import { redis } from './redis';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const MAX_MESSAGES = 100;

export async function getHistory(sessionId: string, limit = 8): Promise<Message[]> {
  const key = `session:${sessionId}`;
  const raw = await redis.lrange<Message>(key, -limit, -1);
  return raw ?? [];
}

export async function appendMessages(sessionId: string, messages: Message[]): Promise<void> {
  const key = `session:${sessionId}`;
  await redis.rpush(key, ...messages);
  await redis.ltrim(key, -MAX_MESSAGES, -1);
}
