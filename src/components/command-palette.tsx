'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { projects } from '@/data/projects';

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const lowered = query.toLowerCase();
    return projects.filter(
      (project) =>
        project.title.toLowerCase().includes(lowered) ||
        project.tags.some((tag) => tag.toLowerCase().includes(lowered))
    );
  }, [query]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (open) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setQuery('');
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="w-full max-w-xl rounded-[28px] border border-white/10 bg-[#0E1220] p-6 shadow-soft"
          >
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3">
              <Search className="h-4 w-4 text-white/60" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search projects, tags..."
                className="w-full bg-transparent text-sm text-white outline-none"
              />
            </div>
            <div className="mt-4 max-h-72 space-y-2 overflow-y-auto">
              {results.length === 0 && (
                <p className="text-sm text-white/50">No matching projects.</p>
              )}
              {results.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-accent/60 hover:text-white"
                >
                  <span>{project.title}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/40">{project.category}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
