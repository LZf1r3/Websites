'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { AnimatedSection } from '@/components/animated-section';
import { projects } from '@/data/projects';

const sections = [
  { title: 'Problem', key: 'problem' },
  { title: 'Approach', key: 'approach' },
  { title: 'Features', key: 'features' },
  { title: 'Results', key: 'results' },
  { title: 'Tech', key: 'tech' }
];

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug]);
  const { scrollYProgress } = useScroll();

  if (!project) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h1 className="text-3xl font-semibold text-white">Project not found</h1>
        <p className="mt-3 text-white/60">Try browsing the work directory.</p>
        <Link href="/work" className="mt-6 inline-flex text-accent">
          Back to work
        </Link>
      </div>
    );
  }

  return (
    <div className="relative">
      <motion.div style={{ scaleX: scrollYProgress }} className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-accent" />
      <div className="mx-auto max-w-5xl px-6 pb-20">
        <div className="py-12">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">{project.category}</p>
          <h1 className="mt-4 text-4xl font-semibold text-white md:text-5xl">{project.title}</h1>
          <p className="mt-4 text-lg text-white/70">{project.longDescription}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/60">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Role: Design + Build</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Stack: {project.techStack.join(', ')}</span>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={project.liveUrl}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black"
            >
              View Live
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white"
            >
              Request something similar
            </Link>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            {project.gallery.map((image) => (
              <div key={image} className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5">
                <Image src={image} alt={project.title} width={1200} height={800} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Impact</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {project.metrics.map((metric) => (
                  <li key={metric}>{metric}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Project outline</p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {sections.map((section) => (
                  <li key={section.key}>{section.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 space-y-10">
          {sections.map((section, index) => (
            <AnimatedSection key={section.key} className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">Section {index + 1}</p>
              <h2 className="mt-3 text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-4 text-sm text-white/70">
                This section details how the {project.title} experience was crafted. It covers decisions around design,
                UX, and implementation with focus on measurable outcomes.
              </p>
            </AnimatedSection>
          ))}
        </div>
        <div className="mt-16 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 text-center">
          <h3 className="text-2xl font-semibold text-white">Want a build like this?</h3>
          <p className="mt-3 text-white/60">Let’s scope a fast, premium launch tailored to your brand.</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </div>
  );
}
