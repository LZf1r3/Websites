import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { MotionProvider } from '@/components/motion-provider';
import { PageTransition } from '@/components/page-transition';
import { AppShell } from '@/components/app-shell';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Studio Drift | Portfolio Marketplace',
  description: 'A premium portfolio marketplace showcasing high-end web experiences.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <MotionProvider>
          <AppShell>
            <PageTransition>{children}</PageTransition>
          </AppShell>
        </MotionProvider>
      </body>
    </html>
  );
}
