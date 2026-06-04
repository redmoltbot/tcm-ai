'use client';

import { useState, useRef } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    onSend(trimmed);
    setInput('');
    inputRef.current?.focus();
  };

  return (
    <div className="px-4 py-3 bg-white border-t border-gray-200">
      <p className="text-center text-[10px] text-gray-400 mb-2">
        General TCM info only. Not a substitute for a proper consultation.
      </p>
      <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              submit();
            }
          }}
          placeholder="ask me anything about TCM…"
          disabled={isLoading}
          autoFocus
          className="flex-1 bg-transparent text-sm text-black placeholder-gray-400 focus:outline-none disabled:opacity-50"
        />
        <button
          onClick={submit}
          disabled={isLoading || !input.trim()}
          className="shrink-0 w-8 h-8 rounded-full bg-black hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
          aria-label="Send"
        >
          {isLoading ? (
            <svg className="animate-spin h-3.5 w-3.5 text-white" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : (
            <svg className="h-3.5 w-3.5 text-white translate-x-px" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
