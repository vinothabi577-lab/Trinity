const cols = [
  { title: "Studio", links: ["About", "Portfolio", "Journal"] },
  { title: "Services", links: ["Residential", "Commercial", "Furnishing"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

export function Footer() {
  return (
    <footer className="bg-primary py-16 text-primary-foreground">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <div className="text-sm font-semibold tracking-[0.25em]">TRINITY</div>
            <p className="mt-3 max-w-xs text-sm text-primary-foreground/80">
              Interior design studio crafting timeless residential and commercial spaces.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-semibold">{c.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="transition-colors hover:text-primary-foreground">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/70 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Trinity Studio</div>
          <div>Crafted with care</div>
        </div>
      </div>
    </footer>
  );
}
