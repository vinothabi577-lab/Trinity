import { useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-4 z-40 mx-auto w-full max-w-6xl px-4">
      <nav
        className="relative flex items-center justify-between rounded-full bg-surface/90 px-6 py-3 backdrop-blur-md"
        style={{ boxShadow: "var(--shadow-nav)" }}
      >
        <Link to="/" className="text-sm font-semibold tracking-[0.25em] text-foreground">
          TRINITY
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-[15px] font-medium text-foreground/80 transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="animate-pill-glow hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Consultation
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" /><path d="M8 7h9v9" />
          </svg>
        </a>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </nav>

      {open && (
        <div className="mt-2 rounded-2xl bg-surface p-4 md:hidden" style={{ boxShadow: "var(--shadow-nav)" }}>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2 text-foreground/80 hover:bg-muted">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-primary px-4 py-2 text-center text-primary-foreground">
                Consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
