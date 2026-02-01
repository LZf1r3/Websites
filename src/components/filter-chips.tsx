'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function FilterChips({
  filters,
  active,
  onChange
}: {
  filters: string[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={cn(
            'relative rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] transition',
            active === filter ? 'text-white' : 'text-white/60 hover:text-white'
          )}
        >
          {filter}
          {active === filter && (
            <motion.span
              layoutId="chip"
              className="absolute inset-0 -z-10 rounded-full bg-accent/20"
            />
          )}
        </button>
      ))}
    </div>
  );
}
