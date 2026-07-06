"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="max-w-md text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">Error</p>
        <h1 className="font-display italic text-5xl leading-tight mb-6">A misprint occurred.</h1>
        <p className="text-sm text-ink/60 mb-10">
          Something interrupted the page. Reload or return to the cover.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-8 py-4 bg-ink text-paper text-[11px] uppercase tracking-[0.2em] hover:bg-accent transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-8 py-4 border border-ink/20 text-[11px] uppercase tracking-[0.2em] hover:border-ink transition-colors"
          >
            Cover
          </a>
        </div>
      </div>
    </div>
  );
}
