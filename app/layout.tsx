import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ask Mark',
  description: 'TCM advice, in plain English (and a bit of Singlish)',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full bg-white text-black">{children}</body>
    </html>
  );
}
