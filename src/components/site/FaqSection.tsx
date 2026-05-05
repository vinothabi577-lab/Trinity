import { useState } from "react";
import { SlideUp } from "@/components/ui/SlideUp";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most residential projects run 3–6 months from concept to completion. Commercial fit-outs typically range 4–9 months depending on scope.",
  },
  {
    q: "Do you offer initial consultations?",
    a: "Yes — we offer a complimentary 30-minute discovery call to understand your goals before recommending the right engagement.",
  },
  {
    q: "Do you work on commercial projects?",
    a: "Absolutely. We design offices, hospitality venues and retail spaces alongside our residential portfolio.",
  },
  {
    q: "Can you work with my existing furniture?",
    a: "Of course. We often blend treasured pieces with new commissions to create spaces that feel layered and personal.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-4">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <SlideUp>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              Frequently Asked
              <br />
              Questions
            </h2>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Quick answers to the things clients ask us most often.
            </p>
          </SlideUp>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <SlideUp key={f.q} delay={0.2 + i * 0.1}>
                <div
                  className="overflow-hidden rounded-2xl bg-card"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <button
                    onClick={() => setOpen(active ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-medium text-foreground">{f.q}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform ${active ? "rotate-45" : ""}`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </SlideUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
