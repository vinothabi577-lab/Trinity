const tags = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Furnishing",
  "Lighting Design",
  "Renovation",
  "Styling",
];

export function LogoStrip() {
  const duplicatedTags = [...tags, ...tags, ...tags, ...tags];

  return (
    <div className="mx-auto mt-24 w-full max-w-5xl overflow-hidden px-4">
      <div className="relative flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="flex animate-marquee items-center gap-4 whitespace-nowrap py-4 hover:[animation-play-state:paused]">
          {duplicatedTags.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="rounded-full border border-border bg-surface px-6 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary/30 hover:bg-surface-soft hover:text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
