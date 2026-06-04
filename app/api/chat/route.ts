import { NextRequest, NextResponse } from 'next/server';
import { straicoChat } from '@/lib/straico';
import { getMarkSystemPrompt } from '@/lib/mark-system-prompt';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export async function POST(request: NextRequest) {
  try {
    const { history, userMessage } = await request.json() as { history: Message[]; userMessage: string };
    const content = await straicoChat(history, userMessage, getMarkSystemPrompt());
    return NextResponse.json({ role: 'assistant', content });
  } catch (error) {
    console.error('Chat API error:', error instanceof Error ? error.message : error);
    return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
  }
}
