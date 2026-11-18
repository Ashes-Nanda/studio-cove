import type { Metadata } from "next";
import { LazyVideo } from "@/components/ui/lazy-video";

// Files live in /public/assets/reels/<name>.mp4 with a matching <name>.webp poster.
// Vertical reels run in the hero; landscape films in the Motion section.
const verticalReels = ["dare-to-steal", "kirik-06", "janot-event-reel", "wordcraft-01", "janot-02"];
// First landscape reel is the featured film and spans the full row.
const landscapeReels = [
  "broker-w-subs",
  "kirana",
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
      <section className="md:min-h-screen bg-paper px-6 md:px-16 pt-32 pb-16 md:pb-24 flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h1 className="text-[clamp(3.5rem,10vw,9rem)] leading-[0.85] font-display italic tracking-tighter text-ink">
            The Archive.
          </h1>
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent md:pb-4">
            [ Index / 2023 &mdash; 2026 ]
          </p>
        </div>
        <div className="max-w-7xl mx-auto w-full grid grid-cols-3 md:grid-cols-5 gap-2">
          {verticalReels.map((r, i) => (
            <video
              key={r}
              src={`/assets/reels/${r}.mp4`}
              poster={`/assets/reels/${r}.webp`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className={`w-full aspect-[9/16] object-cover rounded-xl bg-ink/5 ${i > 2 ? "hidden md:block" : ""} ${i % 2 ? "md:translate-y-10" : ""}`}
            />
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-paper">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
            [ Motion ]
          </p>
          <h2 className="text-4xl md:text-6xl font-display italic text-ink mb-12">Films.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
