import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0E17',
        foreground: '#E6E9F2',
        accent: '#7C5CFF',
        accentLight: '#A894FF',
        accentGlow: 'rgba(124, 92, 255, 0.35)'
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(124, 92, 255, 0.35)',
        soft: '0 20px 60px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(124,92,255,0.28), transparent 55%), radial-gradient(circle at 70% 20%, rgba(68,255,218,0.18), transparent 45%)'
      }
    }
  },
  plugins: []
};

export default config;
