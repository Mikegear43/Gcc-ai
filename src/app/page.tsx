import Link from 'next/link';

const highlights = [
  'Instant staircase estimates',
  'Proposal-ready deliverables',
  'AI-powered material guidance',
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(201,162,39,0.18),_transparent_35%)] px-6 py-12 text-white sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <header className="flex flex-wrap items-center justify-between rounded-full border border-amber-500/30 bg-black/70 px-5 py-4 shadow-[0_0_40px_rgba(201,162,39,0.15)]">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-400">GCC AI</p>
            <h1 className="text-xl font-semibold">Staircase intelligence</h1>
          </div>
          <nav className="flex gap-3 text-sm">
            <Link href="/" className="rounded-full px-4 py-2 hover:bg-white/10">Home</Link>
            <Link href="/estimates" className="rounded-full px-4 py-2 hover:bg-white/10">Estimates</Link>
            <Link href="/dashboard" className="rounded-full px-4 py-2 hover:bg-white/10">Dashboard</Link>
            <Link href="/proposals" className="rounded-full px-4 py-2 hover:bg-white/10">Proposals</Link>
          </nav>
        </header>

        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-300">
              Precision-built for staircase projects
            </div>
            <h2 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              Turn a staircase photo into a polished estimate and proposal in minutes.
            </h2>
            <p className="max-w-xl text-lg text-zinc-300">
              GCC AI helps contractors, estimators, and designers move from a rough jobsite photo to a professional proposal with clear scope and pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/estimates" className="rounded-full bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400">
                Get an estimate
              </Link>
              <Link href="/dashboard" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Upload staircase photo
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-amber-500/30 bg-black/70 p-7 shadow-[0_0_60px_rgba(201,162,39,0.2)]">
            <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">Workflow</p>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
