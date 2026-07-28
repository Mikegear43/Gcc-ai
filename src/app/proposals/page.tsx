export default function ProposalsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-amber-500/30 bg-zinc-950/80 p-8 shadow-[0_0_40px_rgba(201,162,39,0.1)]">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-400">Proposals</p>
        <h1 className="mt-3 text-3xl font-semibold">Proposal generator</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          Turn approved estimates into a polished client-facing proposal with scope, materials, and next steps.
        </p>
        <div className="mt-8 rounded-2xl border border-white/10 bg-black/60 p-6">
          <h2 className="font-semibold">Proposal preview</h2>
          <p className="mt-2 text-sm text-zinc-400">Ready to send to clients with pricing, terms, and project timeline.</p>
        </div>
      </div>
    </main>
  );
}
