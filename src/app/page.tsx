import Link from 'next/link';

const features = [
  {
    title: 'AI photo analysis',
    description: 'Identify stair geometry, dimensions, and finish requirements from a single reference image.',
  },
  {
    title: 'Material calculator',
    description: 'Create precise material lists for wood, steel, hardware, glass, and trim packages.',
  },
  {
    title: 'Proposal builder',
    description: 'Turn estimates into polished client-ready proposals with scope, notes, and pricing.',
  },
  {
    title: 'Contractor workflow',
    description: 'Keep your estimating team aligned with shared project stages and review checkpoints.',
  },
  {
    title: 'Contractor dashboard',
    description: 'Track active jobs, approvals, and follow-up tasks from one executive dashboard.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.2),_transparent_35%)] text-white">
      <div className="mx-auto flex max-w-7xl flex-col px-6 py-6 sm:px-10 lg:px-16 lg:py-8">
        <header className="sticky top-4 z-20 rounded-full border border-amber-500/30 bg-black/80 px-5 py-4 shadow-[0_0_50px_rgba(201,162,39,0.15)] backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-400">GCC AI</p>
              <h1 className="text-lg font-semibold text-white">Gearhart custom carpentry</h1>
            </div>
            <nav className="flex flex-wrap items-center gap-2 text-sm">
              <Link href="/" className="rounded-full px-4 py-2 hover:bg-white/10">Home</Link>
              <Link href="/estimates" className="rounded-full px-4 py-2 hover:bg-white/10">Estimate</Link>
              <Link href="/dashboard" className="rounded-full px-4 py-2 hover:bg-white/10">Dashboard</Link>
              <Link href="/proposals" className="rounded-full px-4 py-2 hover:bg-white/10">Proposals</Link>
              <a href="#pricing" className="rounded-full px-4 py-2 hover:bg-white/10">Pricing</a>
              <Link href="/dashboard" className="rounded-full border border-amber-400/40 bg-amber-500 px-4 py-2 font-semibold text-black transition hover:bg-amber-400">Login</Link>
            </nav>
          </div>
        </header>

        <section className="grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="space-y-7">
            <div className="inline-flex rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-300">
              Luxury estimating for modern staircases
            </div>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
              the AI powered staircase estimator for contractors
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-zinc-300">
              Deliver premium staircase estimates faster with intelligent photo review, material planning, and polished proposals tailored for custom carpentry teams.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/dashboard" className="rounded-full bg-amber-500 px-7 py-3 text-base font-semibold text-black transition hover:bg-amber-400">
                Upload staircase photo
              </Link>
              <Link href="/estimates" className="rounded-full border border-white/20 bg-white/10 px-7 py-3 text-base font-semibold text-white transition hover:bg-white/20">
                Get instant estimate
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-amber-500/30 bg-black/80 p-7 shadow-[0_0_80px_rgba(201,162,39,0.2)]">
            <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">Estimated workflow</p>
              <div className="mt-6 space-y-4">
                {['Instant photo intake', 'Material and labor breakdown', 'Professional proposal delivery'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-zinc-300">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-8 shadow-[0_0_40px_rgba(0,0,0,0.25)] sm:px-8 lg:px-10">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">Capabilities</p>
              <h3 className="mt-2 text-3xl font-semibold text-white">Everything your team needs to quote premium staircases</h3>
            </div>
            <p className="max-w-xl text-sm text-zinc-300">From first photo to final proposal, GCC AI supports fast, accurate, and branded project communication.</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <article key={feature.title} className="rounded-[1.5rem] border border-amber-500/20 bg-black/60 p-6">
                <h4 className="text-lg font-semibold text-white">{feature.title}</h4>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <footer className="border-t border-white/10 bg-black/90 px-6 py-10 text-sm text-zinc-400 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xl font-semibold text-white">Gearhart</p>
            <p className="mt-1">Custom carpentry • stair craftsmanship • premium estimates</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <span>Luxury project quoting</span>
            <span>•</span>
            <span>Built for contractors</span>
            <span>•</span>
            <span>GCC AI</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
