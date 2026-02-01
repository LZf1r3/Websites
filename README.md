# Studio Drift Portfolio Marketplace

A production-ready portfolio marketplace showcasing premium web builds with motion-first interactions, built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Features
- Motion-led hero, project grid, and case study pages.
- Search, filter, and sort projects.
- Command palette (Ctrl/Cmd + K) for project discovery.
- Detail pages with scroll progress and reveal animations.
- Contact form with validation and success feedback.
- Optional packages page with pricing tiers.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build & Deploy

```bash
npm run build
npm start
```

## Customize Content

### Add or edit projects
Update `src/data/projects.ts` with new project entries. Each project includes:
- `slug`, `title`, `shortDescription`, `longDescription`
- `category`, `tags`, `techStack`
- `thumbnail`, `gallery` (placeholders live in `public/images`)
- `liveUrl`, optional `repoUrl`
- `metrics`, `year`, `popularity`

### Change theme colors
Edit `tailwind.config.ts` under `theme.extend.colors` to adjust the accent and background palette.

### Replace images
Swap placeholder SVGs in `public/images` with real screenshots. Keep the same filenames or update the data entries.

### Contact form handling
The contact form is a local placeholder. Replace the submit handler in `src/app/contact/page.tsx` with your API endpoint or service (e.g., Formspree, Resend, or a Next.js route handler).

### Update text and CTA copy
Page sections live in the `src/app` routes and shared components in `src/components`.

## Accessibility & Motion
- Focus states and keyboard navigation are supported.
- Motion toggle in the navbar respects `prefers-reduced-motion`.

## Recommended Next Steps
- Connect a CMS for project data.
- Replace placeholder images with real case study assets.
- Add analytics and SEO metadata.
