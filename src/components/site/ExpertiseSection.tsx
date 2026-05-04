import { useRef } from "react";
import { useScroll } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { SlideUp } from "@/components/ui/SlideUp";
import residential from "@/assets/residential-designer.jpg";
import commercial from "@/assets/commercial.jpg";
import furnishing from "@/assets/furnishing.jpg";

export function ExpertiseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  return (
    <section id="services" className="mx-auto mt-24 w-full max-w-6xl px-4">
      <div className="text-center">
        <SlideUp>
          <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Comprehensive Design Expertise
          </h2>
        </SlideUp>
        <SlideUp delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Whatever the brief, we have the team to take it from concept to completion — beautifully.
          </p>
        </SlideUp>
      </div>

      <div ref={containerRef} className="mt-16 flex flex-col gap-12 pb-24 md:gap-[15vh]">
        <ServiceCard
          number="1"
          title="Residential Interiors"
          description="Refined homes that reflect how you live."
          image={residential}
          imageAlt="Designer with fabric samples"
          delay={0}
          index={0}
          progress={scrollYProgress}
          range={[0, 1]}
          targetScale={0.9}
        />
        <ServiceCard
          number="2"
          title="Commercial Solutions"
          description="Workspaces engineered for performance and brand."
          image={commercial}
          imageAlt="Modern commercial lobby"
          delay={120}
          index={1}
          progress={scrollYProgress}
          range={[0.33, 1]}
          targetScale={0.95}
        />
        <ServiceCard
          number="3"
          title="Custom Furnishing"
          description="Bespoke pieces that make your space truly yours."
          image={furnishing}
          imageAlt="Custom embroidered cushions"
          delay={240}
          index={2}
          progress={scrollYProgress}
          range={[0.66, 1]}
          targetScale={1}
        />
      </div>
    </section>
  );
}
