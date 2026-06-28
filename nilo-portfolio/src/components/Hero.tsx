import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="absolute -top-40 right-0 h-[36rem] w-[36rem] rounded-full bg-amber-500/10 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-[28rem] w-[28rem] rounded-full bg-emerald-700/10 blur-[120px]" />
      </div>

      <div className="container-x grid items-center gap-14 py-20 lg:grid-cols-12 lg:gap-10">
        {/* Copy */}
        <div className="lg:col-span-7">
          <div
            className="reveal flex items-center gap-3 opacity-0"
            style={{ animationDelay: '0.05s' }}
          >
            <span className="h-px w-10 bg-amber-500" />
            <span className="eyebrow">Full-Service Digital Creator</span>
          </div>

          <h1
            className="reveal mt-7 font-serif text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl opacity-0"
            style={{ animationDelay: '0.12s' }}
          >
            Where cutting-edge
            <br className="hidden sm:block" /> technology meets{' '}
            <span className="relative inline-block">
              <span className="italic text-amber-300">classic</span>
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left animate-line-grow bg-amber-500/60" />
            </span>{' '}
            business design.
          </h1>

          <p
            className="reveal mt-8 max-w-xl text-lg leading-relaxed text-zinc-300 opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            I'm Niloo — a freelance digital creator helping restaurants,
            corporations, and event organizers look unmistakably premium. From
            AI-generated promo films to print collateral and custom software,
            one partner for everything your brand touches.
          </p>

          <div
            className="reveal mt-10 flex flex-wrap items-center gap-4 opacity-0"
            style={{ animationDelay: '0.28s' }}
          >
            <a href="#contact" className="btn-gold">
              Start a Project
              <ArrowRight size={16} />
            </a>

            <a href="#work" className="btn-ghost">
              <Play size={15} />
              View Demo Projects
            </a>
          </div>

          {/* Trust strip */}
          <div
            className="reveal mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-zinc-700/60 pt-8 opacity-0"
            style={{ animationDelay: '0.36s' }}
          >
            {[
              { n: '3', l: 'Service Pillars' },
              { n: '9+', l: 'Concept Projects' },
              { n: '1', l: 'Dedicated Partner' },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl font-semibold text-amber-300">
                  {s.n}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-zinc-400">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-5">
          <div
            className="reveal relative mx-auto max-w-sm opacity-0 lg:max-w-none"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-700/70 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Niloo — digital creator at work"
                className="h-full w-full object-cover"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="eyebrow mb-2">Studio of One</div>
                <p className="font-serif text-xl text-white">
                  Multimedia · Design · Technology
                </p>
              </div>
            </div>

            {/* Floating accent card */}
            <div className="absolute -left-6 top-10 hidden rounded-xl border border-zinc-700/70 bg-zinc-900/80 px-5 py-4 backdrop-blur-md sm:block">
              <div className="font-serif text-2xl text-amber-300">AI</div>
              <div className="text-[11px] uppercase tracking-widest text-zinc-400">
                Video Ready
              </div>
            </div>

            <div className="absolute -right-5 bottom-16 hidden rounded-xl border border-zinc-700/70 bg-zinc-900/80 px-5 py-4 backdrop-blur-md sm:block">
              <div className="font-serif text-2xl text-amber-300">Print</div>
              <div className="text-[11px] uppercase tracking-widest text-zinc-400">
                & Web
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[10px] uppercase tracking-widest2 text-zinc-500">
          Scroll
        </span>

        <span className="h-12 w-px bg-gradient-to-b from-amber-500/60 to-transparent" />
      </div>
    </section>
  );
}