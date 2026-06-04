import { ChatInterface } from '@/components/ChatInterface';

export default function Home() {
  return (
    <div className="flex flex-col h-full max-w-lg mx-auto">
      <header className="flex items-center gap-3 px-5 py-3.5 bg-white border-b border-gray-200">
        <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white font-bold text-sm shrink-0">
          M
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-black">Ask Mark</p>
          <p className="text-xs text-gray-500">TCM advice, in plain English (and a bit of Singlish)</p>
        </div>
      </header>
      <ChatInterface />
    </div>
  );
}
