'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$2,400',
    description: 'For lean launches and high-end landing pages.',
    features: ['1 primary page', 'Custom animations', 'Launch in 2 weeks', 'Email support'],
    highlight: false
  },
  {
    name: 'Pro',
    price: '$6,800',
    description: 'Full multi-page experience with conversion strategy.',
    features: ['Up to 6 pages', 'Case study storytelling', 'SEO setup', 'Priority support'],
    highlight: true
  },
  {
    name: 'Custom',
    price: 'Let’s talk',
    description: 'Complex builds, portals, and bespoke integrations.',
    features: ['Unlimited scope', 'Design systems', 'Team workshops', 'Ongoing optimization'],
    highlight: false
  }
];

export function PricingCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tiers.map((tier) => (
        <motion.div
          key={tier.name}
          whileHover={{ y: -6 }}
          className={`relative rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-soft ${
            tier.highlight ? 'glow-ring' : ''
          }`}
        >
          {tier.highlight && (
            <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-black">
              Most popular
            </span>
          )}
          <p className="text-lg font-semibold text-white">{tier.name}</p>
          <p className="mt-2 text-3xl font-semibold text-white">{tier.price}</p>
          <p className="mt-3 text-sm text-white/60">{tier.description}</p>
          <ul className="mt-6 space-y-2 text-sm text-white/70">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-accent" />
                {feature}
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full rounded-full bg-white/10 py-2 text-sm font-semibold text-white transition hover:bg-accent hover:text-black">
            Request build
          </button>
        </motion.div>
      ))}
    </div>
  );
}
