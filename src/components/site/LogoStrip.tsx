const tags = [
  "Residential", "Commercial", "Hospitality", "Furnishing", "Lighting Design", "Renovation", "Styling",
];

export function LogoStrip() {
  return (
    <div className="mx-auto mt-16 w-full max-w-5xl overflow-hidden px-4">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
