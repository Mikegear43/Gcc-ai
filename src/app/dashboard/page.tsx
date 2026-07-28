export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-amber-500/30 bg-zinc-950/80 p-8 shadow-[0_0_40px_rgba(201,162,39,0.1)]">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-400">Dashboard</p>
        <h1 className="mt-3 text-3xl font-semibold">Job intake dashboard</h1>
        <p className="mt-4 max-w-2xl text-zinc-300">
          Review uploaded staircase photos, notes, and estimate progress from a single workspace.
        </p>
        <div className="mt-8 rounded-2xl border border-dashed border-amber-400/40 bg-black/50 p-10 text-center">
          <p className="text-lg font-semibold">Upload staircase photo</p>
          <p className="mt-2 text-sm text-zinc-400">Drag and drop a reference image or browse from your device.</p>
        </div>
      </div>
    </main>
  );
}
