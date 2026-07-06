"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import InteractiveSelector from "@/components/ui/interactive-selector";
import { FaPen, FaShareAlt, FaCamera, FaBullhorn } from "react-icons/fa";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { motion } from "motion/react";

const hero = "/assets/hero.jpg";
const mollysVideo = "/assets/mollys.mp4";
const kirikStreet = "/assets/kirik-street.jpg";
const kirikPoster = "/assets/kirik-poster.jpg";
const dyskoRoom = "/assets/dysko-room.jpg";
const dyskoImmersive = "/assets/dysko-immersive.jpg";
const chinitaChef = "/assets/chinita-chef.jpg";
const chinitaBurrito = "/assets/chinita-burrito.jpg";
const kalpaPortrait = "/assets/kalpa-portrait.jpg";
const kalpaBirds = "/assets/kalpa-birds.jpg";
const brandingImg = "/assets/branding.jpg";
const campaignsImg = "/assets/Campaigns.jpg";
const socialMediaImg = "/assets/socialmedia.jpg";
const productionImg = "/assets/production.jpg";

export function HomeContent() {
  const router = useRouter();

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end px-6 pb-20 pt-32 overflow-hidden">
        <video
          src={mollysVideo}
          poster={hero}
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
      <section className="relative h-[700px] md:h-[800px] bg-paper overflow-hidden">
        <Floating sensitivity={-1}>
          {/* Top row */}
          <FloatingElement depth={0.5} className="top-[6%] left-[8%]">
            <img src={kirikStreet} className="w-24 h-28 md:w-32 md:h-40 object-cover" />
          </FloatingElement>
          <FloatingElement depth={1.5} className="top-[4%] left-[30%]">
            <img src={dyskoImmersive} className="w-20 h-24 md:w-28 md:h-36 object-cover" />
          </FloatingElement>
          <FloatingElement depth={2} className="top-[2%] left-[55%]">
            <img src={chinitaBurrito} className="w-32 h-44 md:w-44 md:h-56 object-cover" />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[5%] left-[82%]">
            <img src={kalpaBirds} className="w-24 h-24 md:w-32 md:h-32 object-cover" />
          </FloatingElement>

          {/* Middle sides */}
          <FloatingElement depth={1} className="top-[38%] left-[1%]">
            <img src={dyskoRoom} className="w-28 h-28 md:w-36 md:h-36 object-cover" />
          </FloatingElement>
          <FloatingElement depth={2.5} className="top-[35%] left-[86%]">
            <img src={kirikPoster} className="w-24 h-32 md:w-32 md:h-44 object-cover" />
          </FloatingElement>

          {/* Bottom row */}
          <FloatingElement depth={3} className="top-[68%] left-[12%]">
            <img src={chinitaChef} className="w-36 h-44 md:w-48 md:h-56 object-cover" />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[72%] left-[55%]">
            <img src={kalpaPortrait} className="w-24 h-24 md:w-32 md:h-32 object-cover" />
          </FloatingElement>
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
