const stats = [
  { label: "Projects Completed", value: "150+" },
  { label: "Happy Clients", value: "120+" },
  { label: "Design Awards", value: "25+" },
];

export function StatsSection() {
  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-4">
      <div className="text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Proven Results</h2>
        <p className="mt-3 text-muted-foreground">Numbers that reflect our commitment to design excellence.</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="card-lift animate-float-in rounded-3xl bg-card p-8 text-center"
            style={{ boxShadow: "var(--shadow-card)", animationDelay: `${i * 120}ms` }}
          >
            <div className="mx-auto mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              {i + 1}
            </div>
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.label}</div>
            <div className="mt-2 text-5xl font-semibold tracking-tight text-foreground">{s.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
