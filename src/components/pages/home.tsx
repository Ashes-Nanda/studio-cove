"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import InteractiveSelector from "@/components/ui/interactive-selector";
import { FaPen, FaShareAlt, FaCamera, FaBullhorn } from "react-icons/fa";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { motion } from "motion/react";

const heroPoster = "/assets/hero-poster.jpg";
const mollysVideo = "/assets/mollys.mp4";
const brandingImg = "/assets/branding.webp";
const campaignsImg = "/assets/campaigns.webp";
const socialMediaImg = "/assets/socialmedia.webp";
const productionImg = "/assets/production.webp";

// Collage shapes, sized for phones / tablets+ / wide screens.
const P = "w-14 h-[72px] md:w-28 md:h-36 xl:w-36 xl:h-48";
const S = "w-14 h-14 md:w-28 md:h-28 xl:w-36 xl:h-36";
const L = "w-16 h-12 md:w-36 md:h-28 xl:w-48 xl:h-36";

// [image, top %, left %, shape, parallax depth, hide on phones]
// Rows leave the centre clear for the "Curated work." heading.
const collage: [string, number, number, string, number, boolean?][] = [
  ["kirik-street.jpg", 2, 2, P, 0.5],
  ["collage/raj-laugh.webp", 4, 15, P, 1.5, true],
  ["collage/toscano-pizza.webp", 1, 28, L, 2],
  ["work/cgs-drink.webp", 5, 42, P, 1, true],
  ["work/house-of-kalpa-1.webp", 2, 56, S, 2.5],
  ["collage/candles-cocktail.webp", 6, 70, P, 3, true],
  ["work/mollys-interior.webp", 2, 86, L, 1],
  ["work/chinita-tostadas.webp", 22, 8, L, 2],
  ["work/tfb-beer.webp", 20, 21, P, 1, true],
  ["collage/mollys-friends.webp", 23, 35, P, 3],
  ["work/kovedaa-1.webp", 21, 61, P, 1.5],
  ["collage/tfb-rider.webp", 24, 74, P, 2.5, true],
  ["work/cocktail-pour.webp", 21, 88, S, 0.5],
  ["dysko-room.jpg", 41, 2, S, 1],
  ["work/lavender-burger.webp", 52, 13, S, 2.5, true],
  ["collage/kirik-yellow.webp", 40, 80, P, 2, true],
  ["work/fnb-friends.webp", 54, 90, P, 1.5],
  ["chinita-chef.jpg", 66, 4, P, 3],
  ["work/raj-diamonds-2.webp", 68, 18, P, 1, true],
  ["work/cgs-sandwich.webp", 65, 32, L, 2],
  ["work/svashudhi-1.webp", 69, 50, S, 1.5, true],
  ["work/toscano-cocktails.webp", 66, 66, P, 0.5],
  ["work/pickwick-2.webp", 68, 84, P, 2.5],
  ["collage/mollys-pasta.webp", 84, 9, S, 1.5],
  ["work/chinita-sign.webp", 82, 23, P, 2.5, true],
  ["collage/pickwick-picnic.webp", 85, 37, L, 1],
  ["work/kirik-shop.webp", 82, 51, P, 3, true],
  ["collage/trysquare-dog.webp", 85, 65, L, 2],
  ["work/mollys-apron.webp", 83, 79, P, 0.5, true],
  ["collage/kirik-hands.webp", 82, 90, P, 1.5],
];

export function HomeContent() {
  const router = useRouter();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end px-6 pb-20 pt-32 overflow-hidden">
        <video
          src={mollysVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/30" />

        <div className="relative z-10 max-w-7xl mx-auto w-full animate-reveal">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper/70 mb-8">
            [ Studio Cove — Est. 2023 ]
          </p>
          <h1 className="text-[clamp(3.5rem,12vw,10rem)] leading-[0.85] font-display italic tracking-tighter text-balance mb-12 text-paper">
            Making
            <br />
            Waves.
          </h1>
          <div className="flex flex-wrap gap-6 items-center">
            <LiquidButton
              size="xl"
              onDark
              className="text-[11px] uppercase tracking-[0.2em] text-paper"
              onClick={() => router.push("/waitlist")}
            >
              Start a Project
            </LiquidButton>
          </div>
        </div>
      </section>

      {/* Definition */}
      <section className="py-32 md:py-40 bg-ink text-paper px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-12">
            [ Who we are ]
          </p>
          <p className="text-[clamp(1.5rem,4vw,3.25rem)] font-display italic leading-[1.15] text-pretty">
            <span className="text-accent">Studio Cove</span>{" "}
            <span className="not-italic font-mono text-base text-paper/50 align-middle">
              (noun)
            </span>{" "}
            — A boutique creative agency that grows the brands we believe in. Exclusive
            partnerships. Singular focus.
          </p>
        </div>
      </section>

      {/* Featured Work — Parallax */}
      <section className="relative h-[760px] md:h-[900px] xl:h-[1000px] bg-paper overflow-hidden">
        <Floating sensitivity={-1}>
          {collage.map(([src, top, left, size, depth, desktopOnly]) => (
            <FloatingElement
              key={src}
              depth={depth}
              className={desktopOnly ? "hidden md:block" : undefined}
              style={{ top: `${top}%`, left: `${left}%` }}
            >
              <img
                src={`/assets/${src}`}
                alt=""
                loading="lazy"
                className={`${size} object-cover`}
              />
            </FloatingElement>
          ))}
        </Floating>

        {/* Centre text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
          <motion.div
            className="text-center space-y-4 pointer-events-auto"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block">
              [ Featured Work ]
            </span>
            <h2 className="text-4xl md:text-6xl font-display italic text-ink">Curated work.</h2>
            <Link
              href="/work"
              className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-accent border-b border-accent/40 pb-1 hover:text-ink hover:border-ink transition-colors mt-2"
            >
              View Full Index →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <InteractiveSelector
        heading="Four pillars. One studio."
        options={[
          {
            title: "Branding",
            description: "Name, identity, logo, packaging — the foundation of everything.",
            image: brandingImg,
            icon: <FaPen size={16} className="text-white" />,
          },
          {
            title: "Social Media",
            description: "Strategy, content, design, and the community that grows around it.",
            image: socialMediaImg,
            icon: <FaShareAlt size={16} className="text-white" />,
            activeBackgroundSize: "cover",
            activeBackgroundPosition: "center 20%",
          },
          {
            title: "Production",
            description: "Photography, film, studio, and stories told in the real world.",
            image: productionImg,
            icon: <FaCamera size={16} className="text-white" />,
          },
          {
            title: "Campaigns",
            description: "Bold ideas, cultural moments, and marketing that actually moves people.",
            image: campaignsImg,
            icon: <FaBullhorn size={16} className="text-white" />,
          },
        ]}
      />

      {/* Waitlist CTA */}
      <section className="py-32 md:py-40 px-6 bg-paper flex flex-col items-center text-center border-t border-border">
        <div className="max-w-2xl">
          <span className="font-mono text-[10px] text-accent mb-8 block uppercase tracking-[0.3em]">
            [ Let&rsquo;s talk ]
          </span>
          <h2 className="text-5xl md:text-6xl font-display italic mb-12 leading-tight">
            Tell us about your brand.
          </h2>
          <Link
            href="/waitlist"
            className="inline-block px-10 py-4 bg-ink text-paper text-[11px] uppercase tracking-[0.2em] hover:bg-accent transition-colors"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
