import type { Metadata } from "next";
import { WaitlistForm } from "@/components/pages/waitlist-form";

export const metadata: Metadata = {
  title: "Start a Project — Studio Cove",
  description:
    "Tell us about your brand. We respond personally to every project we're the right studio for.",
  openGraph: {
    title: "Start a Project — Studio Cove",
    description: "Let's make waves. Start a project with Studio Cove.",
  },
};

export default function WaitlistPage() {
  return <WaitlistForm />;
}
