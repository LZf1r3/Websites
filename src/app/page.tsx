import { AnimatedSection } from '@/components/animated-section';
import { Hero } from '@/components/hero';
import { ProjectCarousel } from '@/components/project-carousel';
import { Testimonials } from '@/components/testimonials';
import { ProcessSteps } from '@/components/process-steps';
import { featuredProjects } from '@/data/projects';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Featured builds</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Signature projects in motion</h2>
          </div>
          <Link href="/work" className="text-sm text-accent hover:text-accentLight">
            See all work →
          </Link>
        </div>
        <div className="mt-8">
          <ProjectCarousel projects={featuredProjects} />
        </div>
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Testimonials</p>
          <h2 className="text-3xl font-semibold text-white">Founders who shipped with confidence</h2>
        </div>
        <div className="mt-8">
          <Testimonials />
        </div>
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Process</p>
          <h2 className="text-3xl font-semibold text-white">A lean, collaborative, high-impact workflow</h2>
        </div>
        <div className="mt-8">
          <ProcessSteps />
        </div>
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[32px] border border-white/10 bg-white/5 px-8 py-12 text-center shadow-soft">
          <h2 className="text-3xl font-semibold text-white">Ready to launch your next website?</h2>
          <p className="mt-4 text-white/60">
            Let’s build an experience that blends premium aesthetics with measurable results.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black"
          >
            Request a quote
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
