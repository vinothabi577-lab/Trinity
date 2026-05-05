import { SlideUp } from "@/components/ui/SlideUp";
import { motion } from "framer-motion";

const cols = [
  { title: "Studio", links: ["About", "Portfolio", "Journal"] },
  { title: "Services", links: ["Residential", "Commercial", "Furnishing"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

const socials = [
  {
    label: "Instagram",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.087-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.425 1.808-2.425.853 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.282a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.222-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.449 2.962.449 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[oklch(0.18_0.03_100)] text-[oklch(0.92_0.01_90)]">
      {/* Decorative gradient line at top */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[oklch(0.45_0.05_100/0.6)] to-transparent" />

      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.45_0.05_100/0.06)] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-60 -left-40 h-[400px] w-[400px] rounded-full bg-[oklch(0.45_0.05_100/0.04)] blur-[100px]" />

      {/* Large brand text */}
      <div className="mx-auto w-full max-w-6xl px-4 pt-20">
        <SlideUp>
          <div className="mb-16">
            <h2 className="font-['Outfit'] text-5xl font-bold tracking-tight text-[oklch(0.95_0.01_90)] md:text-7xl lg:text-8xl">
              Let's Create
              <br />
              <span className="bg-gradient-to-r from-[oklch(0.55_0.06_100)] to-[oklch(0.65_0.08_120)] bg-clip-text text-transparent">
                Something Beautiful.
              </span>
            </h2>
          </div>
        </SlideUp>

        <SlideUp delay={0.15}>
          <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
            <motion.a
              href="mailto:hello@trinity.studio"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.45_0.05_100)] px-7 py-3.5 text-sm font-semibold text-[oklch(0.98_0.01_90)] transition-shadow hover:shadow-[0_20px_40px_-12px_oklch(0.45_0.05_100/0.5)]"
            >
              Start a Project
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </motion.a>
            <a
              href="mailto:hello@trinity.studio"
              className="text-sm font-medium text-[oklch(0.65_0.02_90)] transition-colors hover:text-[oklch(0.85_0.02_90)]"
            >
              hello@trinity.studio
            </a>
          </div>
        </SlideUp>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[oklch(0.4_0.02_90/0.3)] to-transparent" />

        {/* Links grid */}
        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4">
          <SlideUp delay={0.2}>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-[oklch(0.55_0.06_100)]">
                Trinity
              </div>
              <p className="mt-4 max-w-[200px] text-sm leading-relaxed text-[oklch(0.6_0.02_90)]">
                Interior design studio crafting timeless residential and commercial spaces since
                2018.
              </p>
              {/* Social icons */}
              <div className="mt-6 flex items-center gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[oklch(0.25_0.02_90)] text-[oklch(0.65_0.02_90)] transition-colors hover:bg-[oklch(0.45_0.05_100)] hover:text-[oklch(0.98_0.01_90)]"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </SlideUp>
          {cols.map((c, i) => (
            <SlideUp key={c.title} delay={0.25 + i * 0.08}>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[oklch(0.75_0.02_90)]">
                  {c.title}
                </div>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <motion.a
                        href="#"
                        whileHover={{ x: 4 }}
                        className="group inline-flex items-center gap-1.5 text-sm text-[oklch(0.6_0.02_90)] transition-colors hover:text-[oklch(0.9_0.01_90)]"
                      >
                        <span className="inline-block h-[1px] w-0 bg-[oklch(0.55_0.06_100)] transition-all group-hover:w-3" />
                        {l}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideUp>
          ))}
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[oklch(0.4_0.02_90/0.3)] to-transparent" />

        {/* Bottom bar */}
        <SlideUp delay={0.5}>
          <div className="flex flex-col items-start justify-between gap-4 py-8 text-xs text-[oklch(0.45_0.02_90)] md:flex-row md:items-center">
            <div>© {new Date().getFullYear()} Trinity Studio. All rights reserved.</div>
            <div className="flex items-center gap-1.5">
              <span>Crafted with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block text-[oklch(0.55_0.06_100)]"
              >
                ♥
              </motion.span>
              <span>by Trinity Studio</span>
            </div>
          </div>
        </SlideUp>
      </div>
    </footer>
  );
}
