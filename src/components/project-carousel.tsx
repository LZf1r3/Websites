'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import type { Project } from '@/data/projects';

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <div>
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6"
      >
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="min-w-[280px] snap-start rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-soft transition hover:-translate-y-1 md:min-w-[360px]"
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={600}
              height={420}
              className="h-48 w-full rounded-2xl object-cover"
            />
            <div className="mt-4">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">{project.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-white/60">{project.shortDescription}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10">
        <motion.div style={{ scaleX: scrollXProgress }} className="h-full origin-left bg-accent" />
      </div>
    </div>
  );
}
