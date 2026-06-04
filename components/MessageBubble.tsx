interface MessageBubbleProps {
  role: 'user' | 'assistant';
  content: string;
}

export function MessageBubble({ role, content }: MessageBubbleProps) {
  const isUser = role === 'user';

  return (
    <div className={`flex items-end gap-2 mb-2 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white text-xs font-bold shrink-0">
          M
        </div>
      )}
      <div
        className={`max-w-[72%] sm:max-w-[60%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed break-words whitespace-pre-wrap ${
          isUser
            ? 'bg-black text-white rounded-br-md'
            : 'bg-gray-100 text-black rounded-bl-md'
        }`}
      >
        {content}
      </div>
    </div>
  );
}
