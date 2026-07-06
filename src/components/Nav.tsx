"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const logo = "/assets/cove-guidelines-10.png";

export function Nav() {
  const pathname = usePathname();
  const isDark = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 py-3 flex justify-between items-center ${isDark ? "text-paper" : "text-ink"}`}
    >
      <Link href="/" className="flex items-center" aria-label="Studio Cove home">
        <img
          src={logo}
          alt="Studio Cove"
          className={`h-6 md:h-7 w-auto ${isDark ? "" : "invert"}`}
        />
      </Link>
      <div className="flex gap-6 md:gap-12 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium">
        <Link href="/work" className="hover:opacity-60 transition-opacity">
          Work
        </Link>
        <Link href="/studio" className="hover:opacity-60 transition-opacity">
          Studio
        </Link>
        <Link href="/services" className="hover:opacity-60 transition-opacity">
          Services
        </Link>
        <Link href="/waitlist" className="hover:opacity-60 transition-opacity">
          Waitlist
        </Link>
      </div>
    </nav>
  );
}
