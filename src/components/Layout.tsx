import { ReactNode } from 'react';
import clsx from 'clsx';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-white font-sans transition-colors duration-300">
      <main className="h-screen w-full p-4 md:p-6 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
