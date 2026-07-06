import { createFileRoute, Link } from "@tanstack/react-router";
import kirikStreet from "../assets/kirik-street.jpg";
import dyskoRoom from "../assets/dysko-room.jpg";
import chinitaChef from "../assets/chinita-chef.jpg";
import kalpaPortrait from "../assets/kalpa-portrait.jpg";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Studio — Studio Cove" },
      {
        name: "description",
        content:
          "Studio Cove is a creative practice making your brand grow like a tree in a concrete jungle. A look at how we work.",
      },
      { property: "og:title", content: "Studio — Studio Cove" },
      {
        property: "og:description",
        content: "Philosophy, process, and the work between the work.",
      },
      { property: "og:image", content: dyskoRoom },
    ],
  }),
  component: Studio,
});

function Studio() {
  return (
    <>
      <section className="pt-40 pb-24 px-6 bg-paper">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-8">
            [ The Studio ]
          </p>
          <h1 className="text-[clamp(3rem,10vw,8rem)] leading-[0.9] font-display italic tracking-tighter mb-12 max-w-5xl">
            A creative studio, <br /> making waves since 2023.
          </h1>
          <p className="text-xl md:text-2xl text-ink/70 leading-relaxed max-w-2xl">
            We build brands across F&amp;B, FMCG, fashion, art, and tech — brands that need a point of view, not just a posting schedule.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-ink text-paper">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[10px] uppercase text-accent mb-12">
            [ Manifesto ]
          </p>
          <div className="space-y-10 text-2xl md:text-3xl font-display italic leading-tight text-pretty">
            <p>
              <span className="text-accent">One —</span> Culture is the brief.
              Brands that ignore it disappear.
            </p>
            <p>
              <span className="text-accent">Two —</span> A brand is a world,
              not a logo. We build the whole room.
            </p>
            <p>
              <span className="text-accent">Three —</span> The feed is a
              publication. Treat it like one.
            </p>
            <p>
              <span className="text-accent">Four —</span> Make waves, not noise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-paper">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] uppercase text-accent mb-12">
            [ From the floor ]
          </p>
          <div className="grid grid-cols-12 gap-6">
            <img src={dyskoRoom} alt="" loading="lazy" className="col-span-12 md:col-span-8 w-full aspect-[16/10] object-cover ring-1 ring-black/5" />
            <img src={kirikStreet} alt="" loading="lazy" className="col-span-6 md:col-span-4 md:mt-24 w-full aspect-[3/4] object-cover ring-1 ring-black/5" />
            <img src={chinitaChef} alt="" loading="lazy" className="col-span-6 md:col-span-5 md:col-start-3 w-full aspect-[4/5] object-cover ring-1 ring-black/5 mt-12" />
            <img src={kalpaPortrait} alt="" loading="lazy" className="col-span-12 md:col-span-6 w-full aspect-[4/5] object-cover ring-1 ring-black/5 mt-12" />
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center border-t border-border">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display italic text-5xl md:text-6xl mb-10 leading-tight">
            Let&rsquo;s make waves.
          </h2>
          <Link to="/waitlist" className="inline-block px-10 py-4 bg-ink text-paper text-[11px] uppercase tracking-[0.2em] hover:bg-accent transition-colors">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
