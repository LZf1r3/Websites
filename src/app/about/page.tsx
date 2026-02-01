import { AnimatedSection } from '@/components/animated-section';

const skills = ['UX Strategy', 'Interaction Design', 'Motion Direction', 'Front-end Build', 'Design Systems'];
const tools = ['Next.js', 'Framer Motion', 'Tailwind', 'Figma', 'Notion'];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-20">
      <AnimatedSection className="py-10">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">About</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Designing premium web experiences</h1>
        <p className="mt-4 text-white/70">
          I’m a full-stack designer and engineer crafting cinematic websites that convert. From concept to code, every
          experience is crafted to feel premium, fast, and human.
        </p>
      </AnimatedSection>
      <AnimatedSection className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Story-driven outcomes</h2>
          <p className="mt-3 text-sm text-white/60">
            My work blends narrative, motion, and conversion-driven layouts. I collaborate with founders and marketing
            teams to build sites that feel alive and deliver measurable results.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-white/70 md:grid-cols-2">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-semibold text-white">Tools of the trade</h2>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {tools.map((tool) => (
              <li key={tool} className="flex items-center justify-between">
                <span>{tool}</span>
                <span className="text-xs text-white/40">daily</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>
      <AnimatedSection className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-8">
        <h2 className="text-2xl font-semibold text-white">Timeline</h2>
        <ul className="mt-6 space-y-4 text-sm text-white/70">
          <li>
            <strong className="text-white">2024:</strong> Delivered 12 high-conversion portfolio builds and launched
            premium template marketplace.
          </li>
          <li>
            <strong className="text-white">2023:</strong> Led motion systems for SaaS and fintech brands, improving
            activation metrics.
          </li>
          <li>
            <strong className="text-white">2022:</strong> Built design systems for fast-scaling teams, focusing on
            accessibility and speed.
          </li>
        </ul>
      </AnimatedSection>
    </div>
  );
}
