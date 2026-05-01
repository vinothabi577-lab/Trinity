import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

export function Hero() {
  return (
    <section className="mx-auto mt-16 w-full max-w-4xl px-4 text-center">
      <div className="animate-float-in flex items-center justify-center">
        <div className="flex -space-x-3">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              width={48}
              height={48}
              loading="lazy"
              className="h-12 w-12 rounded-full border-4 border-background object-cover"
            />
          ))}
        </div>
        <span className="ml-4 text-sm text-muted-foreground">Trusted by discerning clients</span>
      </div>

      <h1 className="animate-float-in mt-8 text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl" style={{ animationDelay: "100ms" }}>
        Spaces That Inspire,
        <br /> Designed for You
      </h1>

      <p className="animate-float-in mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg" style={{ animationDelay: "200ms" }}>
        Trinity transforms homes and workspaces into refined, functional environments — crafted with care and built to last.
      </p>

      <div className="animate-float-in mt-8 flex justify-center" style={{ animationDelay: "300ms" }}>
        <a
          href="#contact"
          className="animate-pill-glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Book a Consultation
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" /><path d="M8 7h9v9" />
          </svg>
        </a>
      </div>
    </section>
  );
}
