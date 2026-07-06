import type { Metadata } from "next";
import { HomeContent } from "@/components/pages/home";

export const metadata: Metadata = {
  title: "Studio Cove — Making Waves",
  description:
    "Studio Cove is a creative practice in branding, social media, production, and campaigns — making your brand grow like a tree in a concrete jungle.",
  openGraph: {
    title: "Studio Cove — Making Waves",
    description: "A creative studio building brands across F&B, FMCG, fashion, and culture.",
    images: ["/assets/hero.jpg"],
  },
  twitter: {
    images: ["/assets/hero.jpg"],
  },
};

export default function Home() {
  return <HomeContent />;
}
