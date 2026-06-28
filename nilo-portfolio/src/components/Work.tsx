import { useMemo, useState } from 'react';
import { ArrowUpRight, X, Play, PenTool, Code2 } from 'lucide-react';
import {
  projects,
  filters,
  type ProjectFilter,
  type DemoProject,
  type ServiceCategory,
} from '../data';

const categoryIcon: Record<ServiceCategory, typeof Play> = {
  video: Play,
  print: PenTool,
  web: Code2,
};

export function Work() {
  const [active, setActive] = useState<ProjectFilter>('all');
  const [selected, setSelected] = useState<DemoProject | null>(null);

  const visible = useMemo(
    () =>
      active === 'all'
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  return (
    <section id="work" className="relative py-28 md:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-500/5 blur-[120px]" />
      </div>

      <div className="container-x">
        <div className="reveal flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold-500" />
              <span className="eyebrow">Demo Projects</span>
            </div>
            <h2 className="section-title mt-6">
              Concept work, built to look real.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-300">
              A curated set of case studies showing how I approach each brief —
              the concept, the solution, and the craft. Filter by what matters
              to you.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="reveal mt-12 flex flex-wrap items-center gap-3">
          {filters.map((f) => {
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={`relative rounded-full border px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'border-gold-500 bg-gold-500 text-ink-950'
                    : 'border-ink-700 text-ink-200 hover:border-gold-500/50 hover:text-gold-300'
                }`}
              >
                {f.label}
              </button>
            );
          })}
          <span className="ml-auto text-xs uppercase tracking-widest text-ink-500">
            {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          </span>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => {
            const Icon = categoryIcon[p.category];
            return (
              <article
                key={p.id}
                className="reveal group cursor-pointer overflow-hidden rounded-2xl border border-ink-700/70 bg-ink-900/60 transition-all duration-500 hover:border-gold-500/50 hover:bg-ink-900"
                style={{ transitionDelay: `${(i % 3) * 0.06}s` }}
                onClick={() => setSelected(p)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent" />

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-ink-700/70 bg-ink-950/70 px-3 py-1.5 backdrop-blur-sm">
                    <Icon size={13} className="text-gold-300" />
                    <span className="text-[11px] uppercase tracking-widest text-ink-200">
                      {p.filterLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-gold-500 text-ink-950 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-ink-400">
                    {p.client}
                  </div>
                  <h3 className="mt-2 font-serif text-xl font-medium leading-snug text-ink-50 transition-colors group-hover:text-gold-200">
                    {p.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-300">
                    {p.concept}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-ink-700 px-3 py-1 text-[11px] tracking-wide text-ink-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: DemoProject;
  onClose: () => void;
}) {
  const Icon = categoryIcon[project.category];
  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-ink-950/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl animate-scale-in overflow-y-auto rounded-t-3xl border border-ink-700 bg-ink-900 sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 bg-ink-950/60 text-ink-200 backdrop-blur-sm transition-colors hover:border-gold-500 hover:text-gold-300"
        >
          <X size={18} />
        </button>

        <div className="relative aspect-[16/10] overflow-hidden sm:rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />
        </div>

        <div className="p-7 sm:p-9">
          <div className="flex items-center gap-2">
            <Icon size={14} className="text-gold-300" />
            <span className="text-[11px] uppercase tracking-widest text-gold-300">
              {project.filterLabel}
            </span>
          </div>
          <h3 className="mt-3 font-serif text-3xl font-medium text-ink-50">
            {project.title}
          </h3>
          <div className="mt-1 text-sm text-ink-400">Client · {project.client}</div>

          <div className="mt-7 grid gap-7 sm:grid-cols-2">
            <div>
              <div className="eyebrow">Concept</div>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">
                {project.concept}
              </p>
            </div>
            <div>
              <div className="eyebrow">Solution</div>
              <p className="mt-2 text-sm leading-relaxed text-ink-200">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink-700 px-3 py-1 text-[11px] tracking-wide text-ink-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 border-t border-ink-700/60 pt-6">
            <a href="#contact" onClick={onClose} className="btn-gold">
              Start a project like this
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
