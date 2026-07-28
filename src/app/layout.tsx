import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GCC AI | Gearhart Custom Carpentry',
  description: 'Luxury staircase estimation and proposal platform for contractors',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
