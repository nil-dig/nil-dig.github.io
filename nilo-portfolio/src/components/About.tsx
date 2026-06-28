import { processSteps } from '../data';

export function About() {
  return (
    <>
      {/* About */}
      <section id="about" className="relative py-28 md:py-36">
        <div className="container-x">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="reveal lg:col-span-5">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-700/70">
                  <img
                    src="https://images.pexels.com/photos/5905954/pexels-photo-5905954.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt="Niloo, digital creator"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-zinc-700/70 bg-zinc-900/90 px-6 py-5 backdrop-blur-md sm:block">
                  <div className="font-serif text-3xl text-amber-300">Est.</div>
                  <div className="font-serif text-3xl text-white">2026</div>
                  <div className="mt-1 text-[11px] uppercase tracking-widest text-zinc-400">
                    Studio of One
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-amber-500" />
                <span className="eyebrow">About Niloo</span>
              </div>

              <h2 className="section-title mt-6">
                A designer&apos;s eye and an engineer&apos;s discipline.
              </h2>

              <div className="mt-7 space-y-5 text-lg leading-relaxed text-zinc-300">
                <p>
                  I built my career at the intersection of two worlds that
                  rarely meet: the craft of classic design and the leverage of
                  modern technology. The result is work that looks timeless and
                  performs like a system.
                </p>

                <p>
                  For a restaurant owner, that means a promo film, a menu, and a
                  booking site that clearly came from the same hand. For a
                  corporate client, it means a CV suite, an exhibition poster,
                  and an internal tool that share one visual language. For an
                  event organizer, it means a launch campaign that holds
                  together from the hero film to the printed signage.
                </p>

                <p>
                  You work with one person — not an agency account manager, not
                  a rotating roster of freelancers. That means faster decisions,
                  consistent quality, and a partner who actually remembers what
                  your brand stands for.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  'Restaurants & Hospitality',
                  'Corporate & B2B',
                  'Events & Exhibitions',
                  'Local Businesses',
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-xl border border-zinc-700/60 bg-zinc-900/40 px-4 py-4 text-sm text-zinc-200"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative py-28 md:py-36">
        <div className="absolute inset-0 -z-10 border-y border-zinc-700/40 bg-zinc-900/30" />

        <div className="container-x">
          <div className="reveal max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-amber-500" />
              <span className="eyebrow">How We Work</span>
            </div>

            <h2 className="section-title mt-6">
              A calm, clear process — no surprises, no scope creep.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-zinc-700/60 bg-zinc-700/40 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="reveal group relative bg-zinc-900/80 p-8 transition-colors duration-500 hover:bg-zinc-900"
              >
                <div className="font-serif text-5xl font-medium text-zinc-700 transition-colors duration-500 group-hover:text-amber-500/40">
                  {step.number}
                </div>

                <h3 className="mt-5 font-serif text-2xl font-medium text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                  {step.description}
                </p>

                <span className="mt-6 block h-px w-8 origin-left scale-x-100 bg-amber-500 transition-all duration-500 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}