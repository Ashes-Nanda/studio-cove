import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Case Study — Studio Cove" };
  return {
    title: `${p.title} — Studio Cove`,
    description: p.brief.slice(0, 155),
    openGraph: {
      title: `${p.title} — Studio Cove`,
      description: p.brief.slice(0, 155),
      images: [p.cover],
    },
    twitter: {
      images: [p.cover],
    },
  };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const nextIndex = (projects.findIndex((p) => p.slug === project.slug) + 1) % projects.length;
  const next = projects[nextIndex];

  return (
    <article className="bg-paper">
      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/work"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent hover:text-ink transition-colors"
          >
            ← Index
          </Link>
          <div className="mt-12 grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <p className="font-mono text-[10px] uppercase mb-6 text-ink/60">
                {project.index} / {project.category}
              </p>
              <h1 className="text-[clamp(3rem,9vw,8rem)] leading-[0.9] font-display italic tracking-tighter">
                {project.title}
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <span className="font-mono text-[10px] text-accent">{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      <div className="px-6">
        <img
          src={project.cover}
          alt={project.title}
          className={`w-full max-w-7xl mx-auto ${project.aspect} object-cover ring-1 ring-black/5`}
        />
      </div>

      {/* Brief */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <p className="font-mono text-[10px] uppercase text-accent md:col-span-3">[ Brief ]</p>
          <p className="md:col-span-9 text-2xl md:text-3xl font-display italic leading-tight text-pretty">
            {project.brief}
          </p>
        </div>
      </section>

      {/* Direction */}
      <section className="py-24 px-6 bg-ink text-paper">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <p className="font-mono text-[10px] uppercase text-accent md:col-span-3">
            [ Creative Direction ]
          </p>
          <p className="md:col-span-9 text-xl md:text-2xl leading-relaxed text-paper/85">
            {project.direction}
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
          <img
            src={project.gallery[0].src}
            alt={project.gallery[0].alt}
            loading="lazy"
            className="col-span-12 md:col-span-8 w-full aspect-[16/10] object-cover ring-1 ring-black/5"
          />
          <img
            src={project.gallery[1].src}
            alt={project.gallery[1].alt}
            loading="lazy"
            className="col-span-12 md:col-span-4 md:mt-24 w-full aspect-[3/4] object-cover ring-1 ring-black/5"
          />
          <img
            src={project.gallery[2].src}
            alt={project.gallery[2].alt}
            loading="lazy"
            className="col-span-12 md:col-span-7 md:col-start-3 w-full aspect-[4/3] object-cover ring-1 ring-black/5 mt-12"
          />
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <p className="font-mono text-[10px] uppercase text-accent md:col-span-3">
            [ Process &amp; Execution ]
          </p>
          <p className="md:col-span-9 text-xl md:text-2xl leading-relaxed text-ink/80">
            {project.process}
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] uppercase text-accent mb-12">[ Selected Results ]</p>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
            {project.results.map((r) => (
              <div
                key={r.label}
                className="py-10 px-2 border-b border-border md:border-b-0 md:[&:not(:last-child)]:border-r"
              >
                <p className="font-display italic text-5xl md:text-6xl mb-4">{r.value}</p>
                <p className="text-sm text-ink/60">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-32 px-6 bg-ink text-paper text-center">
        <div className="max-w-3xl mx-auto">
          <p className="font-mono text-[10px] uppercase text-accent mb-10">[ Closing ]</p>
          <p className="text-3xl md:text-4xl font-display italic leading-tight text-pretty">
            “{project.reflection}”
          </p>
        </div>
      </section>

      {/* Next */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <div>
            <p className="font-mono text-[10px] uppercase text-accent mb-4">[ Next ]</p>
            <Link
              href={`/work/${next.slug}`}
              className="font-display italic text-4xl md:text-6xl hover:text-accent transition-colors"
            >
              {next.title} →
            </Link>
          </div>
          <Link
            href="/work"
            className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60 hover:text-ink transition-colors"
          >
            Return to index
          </Link>
        </div>
      </section>
    </article>
  );
}
