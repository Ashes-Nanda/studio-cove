import { createFileRoute, Link } from "@tanstack/react-router";

const services = [
  {
    n: "01",
    t: "Branding",
    d: "Brand name, logo, identity, packaging. We build visual systems that hold across every surface a brand lives on — from the bottle to the building.",
  },
  {
    n: "02",
    t: "Social Media",
    d: "Strategy, management, content, design, community. Channels treated like publications — with pace, voice, and visual rhythm built to compound.",
  },
  {
    n: "03",
    t: "Production",
    d: "Photography, film, studio, portfolio, outdoor. Shot in-house with our regular collaborators — stylists, set designers, retouchers. The same hands, every time.",
  },
  {
    n: "04",
    t: "Campaigns",
    d: "We turn cultural moments into brand moments — fast enough to be relevant, sharp enough to be remembered.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Studio Cove" },
      {
        name: "description",
        content:
          "Branding, social media, production, and campaigns — four pillars, one studio.",
      },
      { property: "og:title", content: "Services — Studio Cove" },
      {
        property: "og:description",
        content:
          "Branding, social media, production, and campaigns built in-house.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="pt-40 pb-24 px-6 bg-paper">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8">
            [ What we do ]
          </p>
          <h1 className="text-[clamp(2rem,5vw,4rem)] leading-[1.05] font-display italic tracking-tighter mb-12 max-w-5xl">
            Four pillars. <br /> One studio.
          </h1>
          <p className="text-xl md:text-2xl text-ink/70 leading-relaxed max-w-2xl">
            We organise the studio around what a brand actually needs in any given season. Every engagement is shaped from scratch and never templated.
          </p>
        </div>
      </section>

      <section className="pb-24 px-6 bg-paper">
        <div className="max-w-7xl mx-auto border-t border-border">
          {services.map((s) => (
            <div
              key={s.n}
              className="grid grid-cols-12 gap-6 py-12 md:py-16 border-b border-border group"
            >
              <p className="col-span-2 font-mono text-[10px] text-accent pt-2">
                {s.n}.
              </p>
              <h2 className="col-span-10 md:col-span-5 font-display italic text-3xl md:text-5xl leading-tight">
                {s.t}
              </h2>
              <p className="col-span-12 md:col-span-5 text-base text-ink/60 leading-relaxed md:pt-3">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 md:py-40 px-6 bg-paper flex flex-col items-center text-center border-t border-border">
        <div className="max-w-2xl">
          <span className="font-mono text-[10px] text-accent mb-8 block uppercase tracking-[0.3em]">
            [ Let&rsquo;s talk ]
          </span>
          <h2 className="text-5xl md:text-6xl font-display italic mb-12 leading-tight">
            Tell us about your brand.
          </h2>
          <Link
            to="/waitlist"
            className="inline-block px-10 py-4 bg-ink text-paper text-[11px] uppercase tracking-[0.2em] hover:bg-accent transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
