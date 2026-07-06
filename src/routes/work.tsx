import { createFileRoute } from "@tanstack/react-router";
import kiranaVideo from "../assets/Kirana_03.mp4";
import { BentoGallery } from "../components/ui/bento-gallery";
import bento1 from "../assets/bento-1.jpg";
import bento2 from "../assets/bento-2.jpg";
import bento3 from "../assets/bento-3.jpg";
import bento4 from "../assets/bento-4.jpg";
import bento6 from "../assets/bento-6.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Studio Cove" },
      {
        name: "description",
        content:
          "Selected work across F&B, FMCG, fashion, art, gaming, and culture.",
      },
      { property: "og:title", content: "Work — Studio Cove" },
      {
        property: "og:description",
        content: "An index of recent commissions and case studies.",
      },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <>
      <section className="min-h-screen bg-paper flex items-center px-6 md:px-16 pt-24 pb-16">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* Left — text */}
          <div className="space-y-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              [ Index / 2023 &mdash; 2026 ]
            </p>
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] leading-[0.85] font-display italic tracking-tighter text-ink">
              The Archive.
            </h1>
            <p className="text-ink/50 max-w-sm text-base leading-relaxed">
              Featured case studies, plus brands we&rsquo;ve shaped along the way.
            </p>
          </div>

          {/* Right — video 16:9 with rounded corners */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.18)]">
            <video
              src={kiranaVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover scale-[1.22]"
            />
          </div>

        </div>
      </section>

      <BentoGallery
        images={[
          { src: bento1, alt: "Studio Cove — production 1", objectPosition: "center top" },
          { src: bento2, alt: "Studio Cove — production 2", objectPosition: "center" },
          { src: bento3, alt: "Studio Cove — production 3", objectPosition: "center" },
          { src: bento4, alt: "Studio Cove — production 4", objectPosition: "center top" },
          { src: bento6, alt: "Studio Cove — production 6", objectPosition: "center 30%" },
        ]}
      />

    </>
  );
}
