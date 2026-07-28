import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-md rounded-[2rem] border border-amber-500/30 bg-zinc-950/80 p-8 text-center shadow-[0_0_50px_rgba(201,162,39,0.15)]">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-400">404</p>
        <h1 className="mt-4 text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-sm leading-7 text-zinc-400">
          The route you requested is unavailable. Return to the homepage to continue exploring GCC AI.
        </p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-amber-500 px-6 py-3 font-semibold text-black transition hover:bg-amber-400">
          Go home
        </Link>
      </div>
    </main>
  );
}
