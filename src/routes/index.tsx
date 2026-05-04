// Triggering redeploy for Vercel configuration updates
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { LogoStrip } from "@/components/site/LogoStrip";
import { CraftingSection } from "@/components/site/CraftingSection";
import { ExpertiseSection } from "@/components/site/ExpertiseSection";
import { ProjectsSection } from "@/components/site/ProjectsSection";
import { StatsSection } from "@/components/site/StatsSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { FaqSection } from "@/components/site/FaqSection";
import { CtaSection } from "@/components/site/CtaSection";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trinity — Spaces That Inspire, Designed for You" },
      { name: "description", content: "Trinity is an interior design studio crafting timeless residential, commercial and bespoke furnishing experiences." },
      { property: "og:title", content: "Trinity — Interior Design Studio" },
      { property: "og:description", content: "Residential, commercial and bespoke furnishing solutions, designed and built to last." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <LogoStrip />
      <CraftingSection />
      <ExpertiseSection />
      <ProjectsSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
