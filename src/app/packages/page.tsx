import { AnimatedSection } from '@/components/animated-section';
import { PricingCards } from '@/components/pricing-cards';

export default function PackagesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      <AnimatedSection className="py-10">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Packages</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Pick the right build tier</h1>
        <p className="mt-3 text-white/70">
          Choose a template package or a custom build path. All tiers include motion design, premium UI, and launch
          support.
        </p>
      </AnimatedSection>
      <AnimatedSection>
        <PricingCards />
      </AnimatedSection>
      <AnimatedSection className="mt-12 rounded-[32px] border border-white/10 bg-white/5 p-10 text-center">
        <h2 className="text-2xl font-semibold text-white">Need something custom?</h2>
        <p className="mt-3 text-white/60">Let’s build a bespoke experience with integrations and scale in mind.</p>
        <a
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black"
        >
          Request a quote
        </a>
      </AnimatedSection>
    </div>
  );
}
