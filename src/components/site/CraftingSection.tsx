import { useRef } from "react";
import teamMeeting from "@/assets/team-meeting.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { SlideUp } from "@/components/ui/SlideUp";

const pillars = [
  { title: "Bespoke Design", body: "Tailored solutions for every project, every time." },
  { title: "Expert Team", body: "Award-winning designers, architects and craftspeople." },
  { title: "Sustainable Focus", body: "Materials and methods chosen with the planet in mind." },
];

export function CraftingSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="mt-24 bg-[oklch(0.22_0.04_160)] py-20 text-[oklch(0.95_0.01_150)]"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-2 md:gap-16">
        <div>
          <SlideUp>
            <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Crafting Timeless
              <br />
              Environments
            </h2>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[oklch(0.85_0.01_150)] md:text-lg">
              Trinity blends thoughtful design with masterful execution. Every project is led by
              senior designers and built by trusted craftspeople — a process that consistently turns
              ambitious briefs into spaces that feel inevitable.
            </p>
          </SlideUp>

          <div className="mt-8 space-y-4">
            {pillars.map((p, i) => (
              <SlideUp key={p.title} delay={0.2 + i * 0.1}>
                <div
                  className="rounded-2xl bg-surface p-5 text-foreground"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="text-sm font-semibold tracking-tight">{p.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.body}</div>
                </div>
              </SlideUp>
            ))}
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-3xl"
          style={{ boxShadow: "var(--shadow-card)", height: "100%", maxHeight: "28rem" }}
        >
          <motion.img
            style={{ y, scale: 1.2 }}
            src={teamMeeting}
            alt="Designers reviewing blueprints"
            width={1280}
            height={896}
            loading="lazy"
            className="h-full w-full object-cover origin-center"
          />
        </div>
      </div>
    </section>
  );
}
