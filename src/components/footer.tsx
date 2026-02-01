import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold">Studio Drift</p>
          <p className="mt-3 text-sm text-white/60">
            High-impact portfolio websites, animated product stories, and conversion-first digital experiences.
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-accent">
            Ready for a build?
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Explore</p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-white/70">
            <Link href="/work" className="transition hover:text-white">
              Work
            </Link>
            <Link href="/packages" className="transition hover:text-white">
              Packages
            </Link>
            <Link href="/about" className="transition hover:text-white">
              About
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">Contact</p>
          <div className="mt-4 space-y-2 text-sm text-white/70">
            <p>hello@studiodrift.co</p>
            <p>Based in New York & remote-ready.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/40">
        © 2024 Studio Drift. Crafted with motion and intention.
      </div>
    </footer>
  );
}
