import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { ServiceCard } from "@/components/site/ServiceCard";
import residential from "@/assets/residential.jpg";
import commercial from "@/assets/commercial.jpg";
import furnishing from "@/assets/furnishing.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trinity — Interior Design & Custom Furnishing" },
      { name: "description", content: "Trinity crafts residential, commercial, and bespoke interior experiences with timeless design and meticulous detail." },
      { property: "og:title", content: "Trinity — Interior Design & Custom Furnishing" },
      { property: "og:description", content: "Residential, commercial and custom furnishing solutions designed to last." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="pt-6">
        <Navbar />
      </div>

      <main className="mx-auto mt-16 w-full max-w-6xl space-y-10 px-4">
        <ServiceCard
          number="1"
          title="Residential Design"
          description="Calm, considered homes shaped around how you live — natural materials, restrained palettes, and details that age beautifully."
          image={residential}
          imageAlt="Modern residential living room"
          delay={0}
        />
        <ServiceCard
          number="2"
          title="Commercial Solutions"
          description="Workspaces, lobbies, and hospitality interiors engineered for performance, brand, and lasting first impressions."
          image={commercial}
          imageAlt="Modern commercial lobby with curved ceiling"
          delay={120}
        />
        <ServiceCard
          number="3"
          title="Custom Furnishing"
          description="Bespoke pieces that make your space truly yours — sourced, tailored, and finished to exacting standards."
          image={furnishing}
          imageAlt="Custom embroidered cushions and furnishings"
          delay={240}
        />
      </main>
    </div>
  );
}
