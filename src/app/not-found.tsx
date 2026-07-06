import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
          404 / Not Found
        </p>
        <h1 className="font-display italic text-6xl md:text-7xl leading-none mb-6">
          Lost in the archive.
        </h1>
        <p className="text-sm text-ink/60 mb-10">This page is not part of the current edition.</p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-ink text-paper text-[11px] uppercase tracking-[0.2em] hover:bg-accent transition-colors"
        >
          Return to Cover
        </Link>
      </div>
    </div>
  );
}
