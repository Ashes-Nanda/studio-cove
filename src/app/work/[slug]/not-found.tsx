import Link from "next/link";

export default function CaseStudyNotFound() {
  return (
    <div className="pt-40 px-6 text-center max-w-md mx-auto">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
        [ Not in archive ]
      </p>
      <h1 className="font-display italic text-5xl mb-6">This case study could not be located.</h1>
      <Link
        href="/work"
        className="inline-block px-8 py-4 bg-ink text-paper text-[11px] uppercase tracking-[0.2em] hover:bg-accent transition-colors"
      >
        View the index
      </Link>
    </div>
  );
}
