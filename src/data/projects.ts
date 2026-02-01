export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: string;
  tags: string[];
  techStack: string[];
  thumbnail: string;
  gallery: string[];
  liveUrl: string;
  repoUrl?: string;
  metrics: string[];
  year: number;
  popularity: number;
};

export const categories = ['All', 'Landing Page', 'E-commerce', 'Web App', 'UI Concept'];

export const projects: Project[] = [
  {
    slug: 'lumen-commerce',
    title: 'Lumen Commerce',
    shortDescription: 'A premium storefront with guided product stories and instant cart previews.',
    longDescription:
      'Lumen Commerce is a high-conversion e-commerce experience focused on clarity, speed, and storytelling. I built a modular product narrative system, blended editorial layouts, and introduced predictive search to reduce time-to-checkout.',
    category: 'E-commerce',
    tags: ['E-commerce', 'Luxury', 'Conversion'],
    techStack: ['Next.js', 'Stripe', 'Tailwind', 'Headless CMS'],
    thumbnail: '/images/placeholder-1.svg',
    gallery: ['/images/placeholder-1.svg', '/images/placeholder-2.svg', '/images/placeholder-3.svg'],
    liveUrl: 'https://example.com/lumen',
    repoUrl: 'https://github.com/example/lumen',
    metrics: ['+38% checkout completion', '-22% cart drop-off', '1.4s LCP'],
    year: 2024,
    popularity: 94
  },
  {
    slug: 'nova-landing',
    title: 'Nova Studio Landing',
    shortDescription: 'Motion-first agency landing page with immersive hero transitions.',
    longDescription:
      'Nova Studio required a landing page that felt alive without feeling heavy. I designed a layered gradient system, integrated motion-led service highlights, and kept everything performant across devices.',
    category: 'Landing Page',
    tags: ['Landing Page', 'Agency', 'Motion'],
    techStack: ['Next.js', 'Framer Motion', 'Tailwind'],
    thumbnail: '/images/placeholder-2.svg',
    gallery: ['/images/placeholder-2.svg', '/images/placeholder-4.svg'],
    liveUrl: 'https://example.com/nova',
    metrics: ['+52% lead captures', '3.2x scroll depth'],
    year: 2024,
    popularity: 88
  },
  {
    slug: 'halo-saas',
    title: 'Halo SaaS Dashboard',
    shortDescription: 'A dense analytics dashboard with adaptive layouts and real-time cues.',
    longDescription:
      'Halo is a SaaS analytics product. I reimagined the information architecture, built modular visualization cards, and delivered a clean dark theme that scales from mobile to large displays.',
    category: 'Web App',
    tags: ['Web App', 'Analytics', 'Dashboard'],
    techStack: ['Next.js', 'TypeScript', 'Recharts'],
    thumbnail: '/images/placeholder-3.svg',
    gallery: ['/images/placeholder-3.svg', '/images/placeholder-1.svg'],
    liveUrl: 'https://example.com/halo',
    metrics: ['-34% onboarding time', 'NPS +22'],
    year: 2023,
    popularity: 91
  },
  {
    slug: 'aurora-portfolio',
    title: 'Aurora Portfolio',
    shortDescription: 'A cinematic personal site with layered photography reveals.',
    longDescription:
      'Aurora is a portfolio for a creative director. I created a modular storytelling system, balanced bold typography with negative space, and used subtle parallax to emphasize craft.',
    category: 'UI Concept',
    tags: ['UI Concept', 'Photography', 'Storytelling'],
    techStack: ['Next.js', 'GSAP', 'Tailwind'],
    thumbnail: '/images/placeholder-4.svg',
    gallery: ['/images/placeholder-4.svg', '/images/placeholder-2.svg'],
    liveUrl: 'https://example.com/aurora',
    metrics: ['+44% inquiries', '98 Lighthouse score'],
    year: 2023,
    popularity: 79
  },
  {
    slug: 'flux-fintech',
    title: 'Flux Fintech',
    shortDescription: 'Banking app concept with trust-focused micro-interactions.',
    longDescription:
      'Flux required a financial product concept that felt premium and secure. I led the UX strategy, crafted a responsive onboarding flow, and delivered a clean UI kit for future product teams.',
    category: 'Web App',
    tags: ['Web App', 'Fintech', 'UI'],
    techStack: ['Next.js', 'Framer Motion', 'Tailwind'],
    thumbnail: '/images/placeholder-5.svg',
    gallery: ['/images/placeholder-5.svg', '/images/placeholder-3.svg'],
    liveUrl: 'https://example.com/flux',
    metrics: ['+31% onboarding completion', 'SOC2 ready'],
    year: 2024,
    popularity: 86
  },
  {
    slug: 'ember-market',
    title: 'Ember Market',
    shortDescription: 'A marketplace experience focused on curated collections.',
    longDescription:
      'Ember Market connects independent sellers with modern consumers. I introduced a card-based storytelling layout, seasonal trend highlights, and a flexible filtering system.',
    category: 'E-commerce',
    tags: ['E-commerce', 'Marketplace', 'Editorial'],
    techStack: ['Next.js', 'Shopify', 'Tailwind'],
    thumbnail: '/images/placeholder-6.svg',
    gallery: ['/images/placeholder-6.svg', '/images/placeholder-1.svg'],
    liveUrl: 'https://example.com/ember',
    metrics: ['+27% product discovery', '2.1x session duration'],
    year: 2022,
    popularity: 73
  },
  {
    slug: 'synth-labs',
    title: 'Synth Labs',
    shortDescription: 'A research lab site with interactive timelines and case studies.',
    longDescription:
      'Synth Labs needed a new digital presence for its research output. I built a storytelling framework with interactive timelines, article highlights, and adaptive layout templates.',
    category: 'Landing Page',
    tags: ['Landing Page', 'Research', 'Interactive'],
    techStack: ['Next.js', 'TypeScript', 'MDX'],
    thumbnail: '/images/placeholder-7.svg',
    gallery: ['/images/placeholder-7.svg', '/images/placeholder-4.svg'],
    liveUrl: 'https://example.com/synth',
    metrics: ['+48% newsletter signups', '4.5x time on page'],
    year: 2022,
    popularity: 68
  },
  {
    slug: 'atlas-ventures',
    title: 'Atlas Ventures',
    shortDescription: 'VC fund platform with data-driven portfolio highlights.',
    longDescription:
      'Atlas Ventures wanted a confident and clear investment story. I delivered a high-trust visual system, animated portfolio insights, and dynamic market coverage panels.',
    category: 'UI Concept',
    tags: ['UI Concept', 'Finance', 'Data'],
    techStack: ['Next.js', 'D3.js', 'Tailwind'],
    thumbnail: '/images/placeholder-8.svg',
    gallery: ['/images/placeholder-8.svg', '/images/placeholder-2.svg'],
    liveUrl: 'https://example.com/atlas',
    metrics: ['+25% LP inquiries', '3x press mentions'],
    year: 2023,
    popularity: 81
  },
  {
    slug: 'pulse-health',
    title: 'Pulse Health',
    shortDescription: 'Health-tech portal with accessible UX and calm visuals.',
    longDescription:
      'Pulse Health serves clinicians and patients. I built an inclusive UI system, added gentle motion to highlight care pathways, and optimized the site for accessibility.',
    category: 'Web App',
    tags: ['Web App', 'Health', 'Accessibility'],
    techStack: ['Next.js', 'TypeScript', 'Tailwind'],
    thumbnail: '/images/placeholder-9.svg',
    gallery: ['/images/placeholder-9.svg', '/images/placeholder-6.svg'],
    liveUrl: 'https://example.com/pulse',
    metrics: ['WCAG AA compliant', '+19% portal adoption'],
    year: 2022,
    popularity: 76
  }
];

export const featuredProjects = projects.slice(0, 5);
