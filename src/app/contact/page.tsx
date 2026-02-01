'use client';

import { useState } from 'react';
import { AnimatedSection } from '@/components/animated-section';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validate = () => {
    const nextErrors: typeof errors = {};
    if (!form.name.trim()) nextErrors.name = 'Name is required.';
    if (!form.email.trim() || !form.email.includes('@')) nextErrors.email = 'Valid email is required.';
    if (!form.message.trim()) nextErrors.message = 'Tell me about your project.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus('success');
  };

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20">
      <AnimatedSection className="py-10">
        <p className="text-xs uppercase tracking-[0.3em] text-white/40">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Request a quote or consultation</h1>
        <p className="mt-4 text-white/70">
          Share a few details and I’ll send back a tailored roadmap within 48 hours.
        </p>
      </AnimatedSection>
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <AnimatedSection className="rounded-[32px] border border-white/10 bg-white/5 p-8">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold text-white">Message sent!</h2>
              <p className="mt-3 text-white/60">I’ll reach out shortly with next steps.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/40">Name</label>
                <input
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-accent"
                  aria-label="Name"
                />
                {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/40">Email</label>
                <input
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-accent"
                  aria-label="Email"
                />
                {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-white/40">Project details</label>
                <textarea
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-accent"
                  aria-label="Project details"
                />
                {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:shadow-glow"
              >
                Send request
              </button>
            </form>
          )}
        </AnimatedSection>
        <AnimatedSection className="space-y-6">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Calendar</h3>
            <p className="mt-3 text-sm text-white/60">Book a 30-min intro call (placeholder).</p>
            <button className="mt-4 w-full rounded-full border border-white/10 px-4 py-2 text-sm text-white/70 transition hover:border-accent">
              Open calendar
            </button>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold text-white">Response time</h3>
            <p className="mt-3 text-sm text-white/60">Typically within 24–48 hours.</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
