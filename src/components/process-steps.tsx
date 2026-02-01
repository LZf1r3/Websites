'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discovery & direction',
    description: 'We align on goals, audiences, and the signature story your site should tell.'
  },
  {
    title: 'Design & motion system',
    description: 'Premium UI with interaction hooks, prototypes, and motion choreography.'
  },
  {
    title: 'Build & launch',
    description: 'High-performance Next.js builds, QA, and launch-ready assets.'
  }
];

export function ProcessSteps() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((step, index) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.1 }}
          className="glass-panel rounded-[28px] p-6"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Step {index + 1}</span>
          <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
          <p className="mt-3 text-sm text-white/60">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
