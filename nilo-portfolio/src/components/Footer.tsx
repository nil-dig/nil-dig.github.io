import { ArrowUpRight } from 'lucide-react';

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-zinc-700/60 bg-zinc-950">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-3">
              <span className="font-serif text-3xl font-semibold text-white">
                Niloo
              </span>
              <span className="h-5 w-px bg-zinc-600" />
              <span className="font-sans text-[11px] uppercase tracking-widest2 text-zinc-300">
                Digital Creator
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-400">
              A studio of one bridging cutting-edge technology and classic
              business design — for restaurants, corporations, and event
              organizers who want to look unmistakably premium.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow mb-5">Navigate</div>

            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-zinc-300 transition-colors hover:text-amber-300"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow mb-5">Start a Project</div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-lg text-zinc-100 transition-colors hover:text-amber-300"
            >
              hello@niloo.studio
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <p className="mt-4 text-sm text-zinc-400">
              Replies within one business day.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-zinc-700/60 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Niloo. All rights reserved.
          </p>

          <p className="text-xs text-zinc-500">
            Crafted with intention. Demo projects shown for portfolio purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}