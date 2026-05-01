import bedroom from "@/assets/project-bedroom.jpg";
import kitchen from "@/assets/project-kitchen.jpg";
import dining from "@/assets/project-dining.jpg";
import suite from "@/assets/project-suite.jpg";
import lounge from "@/assets/project-lounge.jpg";

const projects = [
  { title: "Hayes Master Bedroom", tag: "Residential", image: bedroom },
  { title: "Luxury City Kitchen", tag: "Residential", image: kitchen },
  { title: "Highgate Dining", tag: "Residential", image: dining },
  { title: "Marylebone Suite", tag: "Residential", image: suite },
  { title: "Riverside Lounge", tag: "Residential", image: lounge },
];

export function ProjectsSection() {
  return (
    <section id="portfolio" className="mt-24 bg-[oklch(0.22_0.04_160)] py-20 text-[oklch(0.95_0.01_150)]">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Selected Projects</h2>
          <p className="mt-3 text-[oklch(0.78_0.01_150)]">A curated selection of recent work from our portfolio.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="card-lift animate-float-in group overflow-hidden rounded-2xl bg-surface text-foreground"
              style={{ boxShadow: "var(--shadow-card)", animationDelay: `${i * 80}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="card-image h-44 w-full object-cover md:h-52"
                />
              </div>
              <div className="flex items-start justify-between gap-2 p-4">
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{p.tag}</div>
                  <div className="mt-1 text-sm font-semibold leading-tight">{p.title}</div>
                </div>
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
                  {i + 1}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
