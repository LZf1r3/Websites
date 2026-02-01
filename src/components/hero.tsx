'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './magnetic-button';
import Link from 'next/link';

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.4]);

  return (
    <section className="relative overflow-hidden">
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0 bg-hero-gradient"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">Portfolio marketplace</p>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
            Premium websites with cinematic motion and conversion-first storytelling.
          </h1>
          <p className="mt-6 text-lg text-white/70">
            Browse and purchase my best-performing website builds, or request a custom experience built for your brand.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <MagneticButton
              href="/work"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:shadow-glow"
            >
              View Work
              <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent"
            >
              Request a Website
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-white/60">
            <div>
              <p className="text-2xl font-semibold text-white">32+</p>
              <p>Sites launched</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">98</p>
              <p>Lighthouse avg</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">4.9★</p>
              <p>Client rating</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-soft"
          >
            <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-white/40">Live build preview</p>
              <div className="mt-6 space-y-4">
                {['Immersive hero', 'Interactive story blocks', 'Lead capture flow'].map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 6 }}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/70"
                  >
                    {item}
                    <span className="text-xs text-accent">Active</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-accent/30 blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
