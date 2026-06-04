'use client';

const CHIPS = [
  'what is qi and why does it matter?',
  'why do i always feel tired even after sleeping?',
  'what does cupping actually do?',
  'is my body type heaty or cooling?',
];

interface StarterChipsProps {
  onSelect: (question: string) => void;
}

export function StarterChips({ onSelect }: StarterChipsProps) {
  return (
    <div className="flex flex-col items-center gap-4 px-4 py-8">
      <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-white text-xl font-bold">
        M
      </div>
      <div className="text-center">
        <p className="text-sm font-semibold text-black">Ask Mark</p>
        <p className="text-xs text-gray-500 mt-0.5">TCM doctor · Singapore</p>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-sm mt-2">
        {CHIPS.map((chip) => (
          <button
            key={chip}
            onClick={() => onSelect(chip)}
            className="text-left px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-black hover:bg-black hover:text-white hover:border-black transition-colors"
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}
