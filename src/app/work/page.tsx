'use client';

import { useMemo, useState } from 'react';
import { AnimatedSection } from '@/components/animated-section';
import { FilterChips } from '@/components/filter-chips';
import { ProjectCard } from '@/components/project-card';
import { categories, projects } from '@/data/projects';

const sorts = ['Newest', 'Most Popular', 'A–Z'] as const;

export default function WorkPage() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [sort, setSort] = useState<(typeof sorts)[number]>('Newest');

  const filtered = useMemo(() => {
    const lowered = query.toLowerCase();
    const base = projects.filter((project) => {
      const matchesQuery =
        project.title.toLowerCase().includes(lowered) ||
        project.shortDescription.toLowerCase().includes(lowered) ||
        project.tags.some((tag) => tag.toLowerCase().includes(lowered));
      const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
      return matchesQuery && matchesFilter;
    });

    if (sort === 'Newest') {
      return base.sort((a, b) => b.year - a.year);
    }
    if (sort === 'Most Popular') {
      return base.sort((a, b) => b.popularity - a.popularity);
    }
    return base.sort((a, b) => a.title.localeCompare(b.title));
  }, [activeFilter, query, sort]);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      <AnimatedSection className="py-10">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Work</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Browse the marketplace</h1>
        <p className="mt-3 text-white/60">
          Search, filter, and discover projects ready to inspire your next build.
        </p>
      </AnimatedSection>
      <AnimatedSection className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects, tags, or features"
            className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-accent md:max-w-md"
            aria-label="Search projects"
          />
          <div className="flex items-center gap-3 text-sm">
            <span className="text-white/50">Sort</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as (typeof sorts)[number])}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none focus:border-accent"
            >
              {sorts.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <FilterChips filters={categories} active={activeFilter} onChange={setActiveFilter} />
      </AnimatedSection>
      <AnimatedSection className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </AnimatedSection>
    </div>
  );
}
