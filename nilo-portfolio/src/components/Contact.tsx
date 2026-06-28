import { useState } from 'react';
import { ArrowRight, Check, Mail, MapPin, Phone } from 'lucide-react';
import {services} from '../data';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-amber-500/10 blur-[120px]" />
      </div>

      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: pitch + details */}
          <div className="reveal lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-amber-500" />
              <span className="eyebrow">Start a Project</span>
            </div>
            <h2 className="section-title mt-6">
              Let's make your brand look
              <span className="italic text-amber-300"> unmistakable.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-zinc-300">
              Tell me about your business and what you need. I'll reply within
              one business day with a clear next step — no sales calls, no
              pressure.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'hello@niloo.studio' },
                { icon: Phone, label: 'Phone', value: 'xxxxxxxxxxx' },
                { icon: MapPin, label: 'Based in', value: 'Remote · Worldwide' },
              ].map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.label} className="flex items-center gap-4">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/60 text-amber-300">
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-zinc-400">
                        {d.label}
                      </div>
                      <div className="text-zinc-100">{d.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal lg:col-span-7">
            <div className="card-surface p-7 sm:p-9">
              {submitted ? (
                <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/15 text-amber-300">
                    <Check size={30} strokeWidth={2} />
                  </span>
                  <h3 className="mt-6 font-serif text-3xl font-medium text-white">
                    Thank you, {form.name.split(' ')[0] || 'there'}.
                  </h3>
                  <p className="mt-3 max-w-sm text-zinc-300">
                    Your brief is on its way to me. I'll reply within one
                    business day with the next step.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-ghost mt-8"
                  >
                    Send another brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field
                      label="Full name"
                      required
                      value={form.name}
                      onChange={(v) => update('name', v)}
                      placeholder="Jane Doe"
                    />
                    <Field
                      label="Email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(v) => update('email', v)}
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field
                      label="Company / Business"
                      value={form.company}
                      onChange={(v) => update('company', v)}
                      placeholder="Gourmet Bistro"
                    />
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-widest text-zinc-300">
                        Service of interest
                      </label>
                      <select
                        value={form.service}
                        onChange={(e) => update('service', e.target.value)}
                        className="w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 transition-colors focus:border-amber-500 focus:outline-none"
                      >
                        <option value="">Select a service…</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Multiple services">Multiple services</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-zinc-300">
                      Estimated budget
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {[
                       
                        "Let's discuss",
                      ].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => update('budget', b)}
                          className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                            form.budget === b
                              ? 'border-amber-500 bg-amber-500/10 text-amber-200'
                              : 'border-zinc-700 text-zinc-300 hover:border-amber-500/50'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs uppercase tracking-widest text-zinc-300">
                      Project details
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      rows={4}
                      placeholder="Tell me about your business, timeline, and what you're hoping to achieve…"
                      className="w-full resize-none rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder:text-white0 transition-colors focus:border-amber-500 focus:outline-none"
                    />
                  </div>

                  <button type="submit" className="btn-gold w-full sm:w-auto">
                    Send brief
                    <ArrowRight size={16} />
                  </button>
                  <p className="text-xs text-white0">
                    By sending, you agree to be contacted about your project.
                    No newsletter, no spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-zinc-300">
        {label}
        {required && <span className="ml-1 text-amber-400">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-zinc-700 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder:text-white0 transition-colors focus:border-amber-500 focus:outline-none"
      />
    </div>
  );
}
