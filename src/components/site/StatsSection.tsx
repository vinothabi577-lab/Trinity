import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SlideUp } from "@/components/ui/SlideUp";

const stats = [
  { label: "Projects Completed", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 120, suffix: "+" },
  { label: "Design Awards", value: 25, suffix: "+" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  const rounded = useTransform(springValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  return (
    <div ref={ref} className="mt-2 text-5xl font-semibold tracking-tight text-foreground flex items-center justify-center">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-4">
      <div className="text-center">
        <SlideUp>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Proven Results</h2>
        </SlideUp>
        <SlideUp delay={0.1}>
          <p className="mt-3 text-muted-foreground">Numbers that reflect our commitment to design excellence.</p>
        </SlideUp>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {stats.map((s, i) => (
          <SlideUp key={s.label} delay={0.2 + i * 0.1}>
            <div
              className="card-lift rounded-3xl bg-card p-8 text-center"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                {i + 1}
              </div>
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.label}</div>
              <Counter value={s.value} suffix={s.suffix} />
            </div>
          </SlideUp>
        ))}
      </div>
    </section>
  );
}
