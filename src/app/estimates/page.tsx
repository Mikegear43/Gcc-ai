export default function EstimatesPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-amber-500/30 bg-zinc-950/80 p-8 shadow-[0_0_40px_rgba(201,162,39,0.1)]">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-400">Estimates</p>
        <h1 className="mt-3 text-3xl font-semibold">Estimate review</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          Capture project details, dimensions, and material choices to generate a tailored estimate for the staircase job.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
            <h2 className="font-semibold">Material takeoff</h2>
            <p className="mt-2 text-sm text-zinc-400">Wood, steel, railing, and finishing selections are summarized automatically.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/60 p-5">
            <h2 className="font-semibold">Labor forecast</h2>
            <p className="mt-2 text-sm text-zinc-400">Expected labor hours and crew requirements are organized for quick review.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
