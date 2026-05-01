import { useState } from "react";
import commercial from "@/assets/commercial.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar5 from "@/assets/avatar-5.jpg";

const testimonials = [
  {
    image: commercial,
    role: "CEO",
    quote: "My office space has been transformed by Trinity. The team listened carefully and delivered something beyond what we imagined — clients comment on it constantly.",
    name: "Julia Adams",
    title: "JA Group",
    avatar: avatar1,
  },
  {
    image: commercial,
    role: "Founder",
    quote: "From the first sketches to the final styling, every detail felt considered. The space is calmer, brighter and finally feels like ours.",
    name: "Maya Chen",
    title: "Studio North",
    avatar: avatar3,
  },
  {
    image: commercial,
    role: "Director",
    quote: "Trinity navigated a complex renovation with grace. On time, on budget, and the craftsmanship is genuinely exceptional.",
    name: "Sophie Laurent",
    title: "Laurent & Co.",
    avatar: avatar5,
  },
];

export function TestimonialsSection() {
  const [i, setI] = useState(0);
  const t = testimonials[i];

  return (
    <section className="mt-24 bg-[oklch(0.22_0.04_160)] py-20 text-[oklch(0.95_0.01_150)]">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Client Experiences</h2>
          <p className="mt-3 text-[oklch(0.78_0.01_150)]">Hear from the people who chose to work with Trinity.</p>
        </div>

        <div
          key={i}
          className="animate-float-in mt-12 grid grid-cols-1 gap-0 overflow-hidden rounded-3xl bg-surface text-foreground md:grid-cols-2"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <img
            src={t.image}
            alt=""
            width={1280}
            height={896}
            loading="lazy"
            className="h-64 w-full object-cover md:h-full"
          />
          <div className="flex flex-col justify-between p-8 md:p-10">
            <div>
              <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{t.role}</div>
              <p className="mt-4 text-lg leading-relaxed text-foreground">"{t.quote}"</p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              <img src={t.avatar} alt={t.name} width={40} height={40} loading="lazy" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.title}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Show testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-[oklch(0.45_0.02_150)]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
