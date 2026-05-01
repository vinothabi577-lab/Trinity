import { ServiceCard } from "./ServiceCard";
import residential from "@/assets/residential-designer.jpg";
import commercial from "@/assets/commercial.jpg";
import furnishing from "@/assets/furnishing.jpg";

export function ExpertiseSection() {
  return (
    <section id="services" className="mx-auto mt-24 w-full max-w-6xl px-4">
      <div className="text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          Comprehensive Design Expertise
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Whatever the brief, we have the team to take it from concept to completion — beautifully.
        </p>
      </div>

      <div className="mt-12 space-y-8">
        <ServiceCard
          number="1"
          title="Residential Interiors"
          description="Refined homes that reflect how you live."
          image={residential}
          imageAlt="Designer with fabric samples"
          delay={0}
        />
        <ServiceCard
          number="2"
          title="Commercial Solutions"
          description="Workspaces engineered for performance and brand."
          image={commercial}
          imageAlt="Modern commercial lobby"
          delay={120}
        />
        <ServiceCard
          number="3"
          title="Custom Furnishing"
          description="Bespoke pieces that make your space truly yours."
          image={furnishing}
          imageAlt="Custom embroidered cushions"
          delay={240}
        />
      </div>
    </section>
  );
}
