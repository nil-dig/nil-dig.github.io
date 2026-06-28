import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-zinc-700/60 bg-zinc-950/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="group flex items-center gap-3">
          <span className="font-serif text-2xl font-semibold tracking-wide text-white">
            Niloo
          </span>

          <span className="hidden h-4 w-px bg-zinc-600 sm:block" />

          <span className="hidden font-sans text-[11px] uppercase tracking-widest2 text-zinc-300 sm:block">
            Digital Creator
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-sans text-sm text-zinc-200 transition-colors hover:text-amber-300"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <a href="#contact" className="btn-gold !px-6 !py-2.5 !text-xs">
            Start a Project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-100 transition-colors hover:border-amber-500 hover:text-amber-300 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } transition-opacity duration-300`}
      >
        <div className="container-x flex flex-col gap-1 border-t border-zinc-700/60 bg-zinc-950/95 pb-8 pt-4 backdrop-blur-md">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 font-serif text-2xl text-zinc-100 transition-colors hover:bg-zinc-800/60 hover:text-amber-300"
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-gold mt-3 w-full"
          >
            Start a Project
          </a>
        </div>
      </div>
    </header>
  );
}