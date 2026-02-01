'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Command, Menu, Sparkles, X } from 'lucide-react';
import { useMotionSettings } from './motion-provider';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/packages', label: 'Packages' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Navbar({ onOpenCommand }: { onOpenCommand?: () => void }) {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 120], [96, 72]);
  const background = useTransform(scrollY, [0, 120], ['rgba(11,14,23,0.4)', 'rgba(11,14,23,0.8)']);
  const border = useTransform(scrollY, [0, 120], ['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.18)']);
  const { motionEnabled, toggleMotion } = useMotionSettings();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      style={{ height, backgroundColor: background, borderColor: border }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 text-accent glow-ring">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>Studio Drift</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-sm font-medium transition-colors hover:text-white',
                  isActive ? 'text-white' : 'text-white/60'
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-3 left-0 h-0.5 w-full rounded-full bg-accent"
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenCommand}
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:text-white md:flex"
            aria-label="Open command palette"
          >
            <Command className="h-3.5 w-3.5" />
            Ctrl+K
          </button>
          <button
            type="button"
            onClick={toggleMotion}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 transition hover:text-white"
            aria-label="Toggle motion"
          >
            {motionEnabled ? 'Motion On' : 'Motion Off'}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/10 bg-[#0B0E17]/95 px-6 pb-6 md:hidden"
          >
            <nav className="flex flex-col gap-4 pt-4 text-sm text-white/70">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenCommand?.();
                }}
                className="flex items-center gap-2 text-white/70 transition hover:text-white"
              >
                <Command className="h-4 w-4" />
                Open command palette
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
