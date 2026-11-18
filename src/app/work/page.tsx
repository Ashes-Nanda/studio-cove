import type { Metadata } from "next";
import { BentoGallery } from "@/components/ui/bento-gallery";
import { LazyVideo } from "@/components/ui/lazy-video";

const kiranaVideo = "/assets/kirana-hero.mp4";
const kiranaPoster = "/assets/kirana-hero.webp";

// Files live in /public/assets/reels/<name>.mp4 with a matching <name>.webp poster.
const verticalReels = ["dare-to-steal", "kirik-06", "janot-event-reel", "wordcraft-01", "janot-02"];
// First landscape reel is the featured film and spans the full row.
const landscapeReels = [
  "broker-w-subs",
  "mollys-04",
  "janot-nov-reel-10",
  "mollys-1",
  "janot-reel-1",
  "mollys-3-revised",
  "fnb-teaser",
];

// Files live in /public/assets/work/<name>.webp; order is a deliberate brand mix.
const stills = [
  "kirik-hands",
  "mollys-pasta",
  "becoming-pablo-stickers",
  "raj-diamonds-1",
  "chinita-sign",
  "kirik-king",
  "toscano-pizza",
  "house-of-kalpa-1",
  "dabelly-illustration",
  "candles-cocktail",
  "kirik-auto",
  "mollys-friends",
  "fika-logo",
  "raj-diamonds-2",
  "cgs-drink",
  "dysko-y2k",
  "tfb-rider",
  "fnb-palappam",
  "kirik-yellow",
  "kovedaa-1",
  "kari-coffee",
  "lavender-burger",
  "becoming-pablo-poster",
  "svashudhi-1",
  "fnb-chatti-manki",
  "pickwick-picnic",
  "oney",
  "mollys-apron",
  "house-of-kalpa-2",
  "tfb-beer",
  "mollys-toast",
  "kirik-extra-masala",
  "kovedaa-2",
  "toscano-cocktails",
  "farm-sourced",
  "kirik-tee",
  "fnb-layers",
  "trysquare-dog",
  "candles-brewhouse",
  "muru-muru-1",
  "chinita-tostadas",
  "svashudhi-2",
  "mollys-menu",
  "dragon-draws",
  "fnb-friends",
  "cocktail-pour",
  "lavender-cake",
  "kirik-street-reel",
  "fnb-shashlik",
  "pickwick-2",
  "tfb-3",
  "mollys-interior",
  "muru-muru-2",
  "fnb-prawns",
  "mezze-platter",
  "cgs-sandwich",
  "dabelly-1",
  "worqfit",
  "fnb-drink",
  "fnb-picks",
  "kirik-shop",
  "fnb-interior",
  "fika-1",
];

const label = (name: string) => name.replace(/-\d+$/, "").replace(/-/g, " ");

export const metadata: Metadata = {
  title: "Work — Studio Cove",
  description: "Selected work across F&B, FMCG, fashion, art, gaming, and culture.",
  openGraph: {
    title: "Work — Studio Cove",
    description: "Selected work across F&B, FMCG, fashion, art, gaming, and culture.",
  },
};

export default function WorkIndex() {
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
          </div>

          {/* Right — video 16:9 with rounded corners */}
          <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.18)]">
            <video
              src={kiranaVideo}
              poster={kiranaPoster}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <BentoGallery
        images={[
          {
            src: "/assets/bento-1.jpg",
            alt: "Studio Cove — production 1",
            objectPosition: "center top",
          },
          {
            src: "/assets/bento-2.jpg",
            alt: "Studio Cove — production 2",
            objectPosition: "center",
          },
          {
            src: "/assets/bento-3.jpg",
            alt: "Studio Cove — production 3",
            objectPosition: "center",
          },
          {
            src: "/assets/bento-4.jpg",
            alt: "Studio Cove — production 4",
            objectPosition: "center top",
          },
          {
            src: "/assets/bento-6.jpg",
            alt: "Studio Cove — production 6",
            objectPosition: "center 30%",
          },
        ]}
      />

      {/* Motion */}
      <section className="py-24 px-6 bg-paper">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
            [ Motion ]
          </p>
          <h2 className="text-4xl md:text-6xl font-display italic text-ink mb-12">
            Reels &amp; films.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {verticalReels.map((r) => (
              <div key={r} className="aspect-[9/16] overflow-hidden rounded-xl bg-ink/5">
                <LazyVideo
                  src={`/assets/reels/${r}.mp4`}
                  poster={`/assets/reels/${r}.webp`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            {landscapeReels.map((r, i) => (
              <div
                key={r}
                className={`aspect-video overflow-hidden rounded-xl bg-ink/5 ${i === 0 ? "md:col-span-2" : ""}`}
              >
                <LazyVideo
                  src={`/assets/reels/${r}.mp4`}
                  poster={`/assets/reels/${r}.webp`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stills */}
      <section className="py-24 px-6 bg-ink">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
            [ Stills ]
          </p>
          <h2 className="text-4xl md:text-6xl font-display italic text-paper mb-12">
            Photography &amp; design.
          </h2>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2">
            {stills.map((s) => (
              <img
                key={s}
                src={`/assets/work/${s}.webp`}
                alt={`Studio Cove — ${label(s)}`}
                loading="lazy"
                className="w-full mb-2 break-inside-avoid"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
