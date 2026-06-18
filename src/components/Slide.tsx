import { ReactNode } from 'react';

export function Slide({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <section className={`h-screen w-full snap-center flex flex-col items-center justify-center p-8 relative ${className}`}>
      {children}
    </section>
  );
}
