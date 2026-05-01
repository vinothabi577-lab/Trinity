import { Link } from "@tanstack/react-router";

const links = [
  { label: "About", to: "/" },
  { label: "Services", to: "/" },
  { label: "Portfolio", to: "/" },
  { label: "Contact", to: "/" },
];

export function Navbar() {
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
              <a
                href="#"
                className="text-[15px] font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="animate-pill-glow inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Consultation
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" />
            <path d="M8 7h9v9" />
          </svg>
        </a>
      </nav>
    </header>
  );
}
