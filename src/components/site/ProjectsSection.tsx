import bedroom from "@/assets/project-bedroom.jpg";
import kitchen from "@/assets/project-kitchen.jpg";
import dining from "@/assets/project-dining.jpg";
import suite from "@/assets/project-suite.jpg";
import lounge from "@/assets/project-lounge.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "@/components/ui/SlideUp";

const projects = [
  { title: "Hayes Master Bedroom", tag: "Residential", image: bedroom },
  { title: "Luxury City Kitchen", tag: "Residential", image: kitchen },
  { title: "Highgate Dining", tag: "Residential", image: dining },
  { title: "Marylebone Suite", tag: "Residential", image: suite },
  { title: "Riverside Lounge", tag: "Residential", image: lounge },
];

export function ProjectsSection() {
  return (
    <section id="portfolio" className="mt-24 bg-foreground py-24 text-background">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <SlideUp>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Selected Projects</h2>
          </SlideUp>
          <SlideUp delay={0.1}>
            <p className="mt-4 font-medium text-background/80 md:text-lg">A curated selection of recent work from our portfolio.</p>
          </SlideUp>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group overflow-hidden rounded-2xl bg-surface text-foreground"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="card-image h-44 w-full object-cover md:h-52 transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="flex items-start justify-between gap-2 p-4">
                <div>
                  <SlideUp delay={i * 0.1 + 0.1}>
                    <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{p.tag}</div>
                  </SlideUp>
                  <SlideUp delay={i * 0.1 + 0.2}>
                    <div className="mt-1 text-sm font-semibold leading-tight">{p.title}</div>
                  </SlideUp>
                </div>
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                  {i + 1}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
