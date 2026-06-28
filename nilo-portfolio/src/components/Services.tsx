import { ArrowUpRight } from 'lucide-react';
import { services } from '../data';

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="reveal max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-amber-500" />
            <span className="eyebrow">What I Do</span>
          </div>

          <h2 className="section-title mt-6">
            Three pillars, one partner for every brand touchpoint.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300">
            Most businesses juggle a video editor, a designer, and a developer
            who never speak to each other. I bring all three under one roof — so
            your films, your print, and your software feel like they came from
            the same studio. Because they did.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <article
                key={s.id}
                className="reveal card-surface group relative flex flex-col p-8 hover:border-amber-500/50 hover:bg-zinc-900"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-800/60 text-amber-300 transition-colors duration-500 group-hover:border-amber-500/50 group-hover:bg-amber-500/10">
                    <Icon size={24} strokeWidth={1.5} />
                  </span>

                  <span className="font-serif text-5xl font-medium text-zinc-700 transition-colors duration-500 group-hover:text-zinc-600">
                    0{i + 1}
                  </span>
                </div>

                <div className="mt-7">
                  <div className="eyebrow">{s.pillar}</div>

                  <h3 className="mt-2 font-serif text-2xl font-medium text-white">
                    {s.title}
                  </h3>

                  <p className="mt-3 font-serif text-lg italic text-amber-300/90">
                    {s.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                    {s.description}
                  </p>
                </div>

                <ul className="mt-7 space-y-3 border-t border-zinc-700/60 pt-6">
                  {s.offerings.map((o) => (
                    <li
                      key={o}
                      className="flex items-start gap-3 text-sm text-zinc-200"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-amber-500" />
                      {o}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-amber-300 transition-colors hover:text-amber-200"
                >
                  Discuss this service
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}