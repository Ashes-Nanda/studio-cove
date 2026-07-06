import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Studio Cove — Making Waves",
  description:
    "Studio Cove is a creative practice in branding, social media, production, and campaigns — making your brand grow like a tree in a concrete jungle.",
  authors: [{ name: "Studio Cove" }],
  openGraph: {
    title: "Studio Cove — Making Waves",
    description: "A creative studio for F&B, FMCG, fashion, art, and culture-led brands.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Cove — Making Waves",
    description: "Branding, social media, production, and campaigns. Est. 2023.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,500;1,700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap"
        />
      </head>
      <body>
        <div className="bg-paper text-ink min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
