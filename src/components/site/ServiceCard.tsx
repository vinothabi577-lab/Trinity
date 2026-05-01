type Props = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  delay?: number;
};

export function ServiceCard({ number, title, description, image, imageAlt, reverse, delay = 0 }: Props) {
  return (
    <article
      className="card-lift animate-float-in relative grid grid-cols-1 gap-6 rounded-[2rem] bg-card p-6 md:grid-cols-2 md:gap-10 md:p-10"
      style={{
        boxShadow: "var(--shadow-card)",
        animationDelay: `${delay}ms`,
      }}
    >
      <div className={`relative flex flex-col justify-between ${reverse ? "md:order-2" : ""}`}>
        <div
          className="animate-badge-pop flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
          style={{
            boxShadow: "0 8px 20px -8px oklch(0.5 0.13 155 / 0.6)",
            animationDelay: `${delay + 200}ms`,
          }}
        >
          {number}
        </div>

        <div className="mt-16 md:mt-24">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>
      </div>

      <div className={`overflow-hidden rounded-[1.5rem] ${reverse ? "md:order-1" : ""}`}>
        <img
          src={image}
          alt={imageAlt}
          width={1280}
          height={896}
          loading="lazy"
          className="card-image h-72 w-full object-cover md:h-[26rem] lg:h-[30rem]"
        />
      </div>
    </article>
  );
}
