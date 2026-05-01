import teamMeeting from "@/assets/team-meeting.jpg";

const pillars = [
  { title: "Bespoke Design", body: "Tailored solutions for every project, every time." },
  { title: "Expert Team", body: "Award-winning designers, architects and craftspeople." },
  { title: "Sustainable Focus", body: "Materials and methods chosen with the planet in mind." },
];

export function CraftingSection() {
  return (
    <section id="about" className="mt-24 bg-[oklch(0.22_0.04_160)] py-20 text-[oklch(0.95_0.01_150)]">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-4 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Crafting Timeless<br />Environments
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[oklch(0.85_0.01_150)] md:text-lg">
            Trinity blends thoughtful design with masterful execution. Every project is led by senior designers and built by trusted craftspeople — a process that consistently turns ambitious briefs into spaces that feel inevitable.
          </p>

          <div className="mt-8 space-y-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="animate-float-in rounded-2xl bg-surface p-5 text-foreground"
                style={{ boxShadow: "var(--shadow-card)", animationDelay: `${i * 120}ms` }}
              >
                <div className="text-sm font-semibold tracking-tight">{p.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src={teamMeeting}
            alt="Designers reviewing blueprints"
            width={1280}
            height={896}
            loading="lazy"
            className="h-full max-h-[28rem] w-full rounded-3xl object-cover"
            style={{ boxShadow: "var(--shadow-card)" }}
          />
        </div>
      </div>
    </section>
  );
}
