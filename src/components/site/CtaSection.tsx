import { SlideUp } from "@/components/ui/SlideUp";
import { Magnetic } from "@/components/ui/Magnetic";

export function CtaSection() {
  return (
    <section id="contact" className="mt-24 bg-[oklch(0.22_0.04_160)] py-20">
      <div className="mx-auto w-full max-w-5xl px-4">
        <SlideUp>
          <div
            className="rounded-3xl bg-surface p-10 text-center md:p-16"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <SlideUp delay={0.1}>
              <div className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Let&apos;s talk</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Ready to Transform Your Space?
              </h2>
            </SlideUp>
            <SlideUp delay={0.2}>
              <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                Schedule a complimentary consultation and let&apos;s shape what comes next together.
              </p>
            </SlideUp>
            <SlideUp delay={0.3}>
              <Magnetic>
                <a
                  href="mailto:hello@trinity.studio"
                  className="animate-pill-glow mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  Book a Consultation
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" /><path d="M8 7h9v9" />
                  </svg>
                </a>
              </Magnetic>
            </SlideUp>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
