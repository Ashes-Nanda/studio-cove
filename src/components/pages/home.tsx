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

// Floating collage around "Curated work." — pos keeps the centre clear for the heading.
const collage = [
  // top row
  {
    src: "/assets/kirik-street.jpg",
    pos: "top-[3%] left-[3%]",
    size: "w-16 h-20 md:w-32 md:h-40",
    depth: 0.5,
  },
  {
    src: "/assets/collage/raj-laugh.webp",
    pos: "top-[6%] left-[22%]",
    size: "w-16 h-20 md:w-28 md:h-36",
    depth: 1.5,
  },
  {
    src: "/assets/collage/toscano-pizza.webp",
    pos: "top-[1%] left-[42%]",
    size: "w-20 h-24 md:w-40 md:h-48",
    depth: 2,
  },
  {
    src: "/assets/kalpa-birds.jpg",
    pos: "top-[5%] left-[63%]",
    size: "w-16 h-16 md:w-32 md:h-32",
    depth: 1,
  },
  {
    src: "/assets/collage/candles-cocktail.webp",
    pos: "top-[2%] left-[82%]",
    size: "w-14 h-20 md:w-28 md:h-40",
    depth: 2.5,
  },
  // upper middle
  {
    src: "/assets/collage/mollys-friends.webp",
    pos: "top-[24%] left-[12%]",
    size: "w-16 h-20 md:w-28 md:h-36",
    depth: 3,
  },
  {
    src: "/assets/collage/tfb-rider.webp",
    pos: "top-[26%] left-[70%]",
    size: "w-14 h-20 md:w-28 md:h-40",
    depth: 1.5,
  },
  // middle sides
  {
    src: "/assets/dysko-room.jpg",
    pos: "top-[44%] left-[1%]",
    size: "w-20 h-20 md:w-36 md:h-36",
    depth: 1,
  },
  {
    src: "/assets/collage/kirik-yellow.webp",
    pos: "top-[42%] left-[82%]",
    size: "w-16 h-24 md:w-32 md:h-44",
    depth: 2.5,
  },
  // bottom row
  {
    src: "/assets/chinita-chef.jpg",
    pos: "top-[68%] left-[4%]",
    size: "w-20 h-24 md:w-44 md:h-52",
    depth: 3,
  },
  {
    src: "/assets/collage/mollys-pasta.webp",
    pos: "top-[76%] left-[30%]",
    size: "w-16 h-20 md:w-32 md:h-40",
    depth: 1.5,
  },
  {
    src: "/assets/collage/pickwick-picnic.webp",
    pos: "top-[70%] left-[50%]",
    size: "w-20 h-16 md:w-40 md:h-28",
    depth: 2,
  },
  {
    src: "/assets/collage/trysquare-dog.webp",
    pos: "top-[80%] left-[68%]",
    size: "w-16 h-16 md:w-32 md:h-32",
    depth: 1,
  },
  {
    src: "/assets/collage/kirik-hands.webp",
    pos: "top-[66%] left-[84%]",
    size: "w-14 h-20 md:w-28 md:h-40",
    depth: 2.5,
  },
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
      <section className="relative h-[760px] md:h-[900px] bg-paper overflow-hidden">
        <Floating sensitivity={-1}>
          {collage.map((c) => (
            <FloatingElement key={c.src} depth={c.depth} className={c.pos}>
              <img src={c.src} alt="" loading="lazy" className={`${c.size} object-cover`} />
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
