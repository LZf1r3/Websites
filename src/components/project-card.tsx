'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import React, { useRef, useState } from 'react';
import type { Project } from '@/data/projects';
import { formatTags } from '@/lib/utils';

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) * 2 - 1) * 6;
    const rotateX = ((y / rect.height) * 2 - 1) * -6;
    setTransform({ rotateX, rotateY });
  };

  const handleLeave = () => setTransform({ rotateX: 0, rotateY: 0 });

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)` }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-soft transition-transform duration-300"
    >
      <Link href={`/work/${project.slug}`} className="relative overflow-hidden rounded-2xl">
        <Image
          src={project.thumbnail}
          alt={`${project.title} preview`}
          width={800}
          height={600}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
          priority={false}
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black/40 text-sm font-medium text-white"
        >
          View case study
        </motion.div>
      </Link>
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">{project.category}</p>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/60">
            {project.year}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-white/60">{project.shortDescription}</p>
        <p className="mt-4 text-xs text-white/40">{formatTags(project.tags)}</p>
        <div className="mt-6 flex items-center justify-between">
          <p className="text-xs text-white/50">{project.metrics[0]}</p>
          <ArrowUpRight className="h-4 w-4 text-accent transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.div>
  );
}
