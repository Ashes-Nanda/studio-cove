import { Link } from "@tanstack/react-router";
import logo from "../assets/cove-logo.png";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 py-16 bg-paper border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
        <div className="md:col-span-5 space-y-6">
          <img src={logo} alt="Studio Cove" className="h-10 w-auto" />
          <p className="font-display italic text-3xl leading-tight max-w-md">
            Ideas wash up at the Cove.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
            Studio Cove / Est. 2023
          </p>
        </div>

        <div className="md:col-span-4 space-y-3 text-sm">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-3">
            Inquiries
          </p>
          <a
            href="mailto:Admin@studiocove.info"
            className="block font-display italic text-2xl hover:text-accent transition-colors break-all"
          >
            Admin@studiocove.info
          </a>
        </div>

        <div className="md:col-span-3 flex md:justify-end gap-8 font-mono text-[10px] uppercase tracking-[0.2em]">
          <a
            href="https://www.instagram.com/studiocove_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            Instagram
          </a>
          <Link to="/waitlist" className="hover:text-accent transition-colors">
            Waitlist
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
        <p>Studio Cove &copy; {new Date().getFullYear()}</p>
        <p>Making waves since 2023.</p>
      </div>
    </footer>
  );
}
