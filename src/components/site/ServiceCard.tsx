import { motion, useTransform, MotionValue } from "framer-motion";
import { SlideUp } from "@/components/ui/SlideUp";

type Props = {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  delay?: number;
  index: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
};

export function ServiceCard({
  number,
  title,
  description,
  image,
  imageAlt,
  reverse,
  delay = 0,
  index,
  progress,
  range,
  targetScale,
}: Props) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32" style={{ top: `calc(6rem + ${index * 1.5}rem)` }}>
      <motion.article
        className="card-lift grid grid-cols-1 gap-6 rounded-[2rem] bg-card p-6 md:grid-cols-2 md:gap-10 md:p-10 origin-top relative"
        style={{
          scale,
          boxShadow: "var(--shadow-card)",
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
            <SlideUp>
              <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                {title}
              </h2>
            </SlideUp>
            <SlideUp delay={0.1}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                {description}
              </p>
            </SlideUp>
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
      </motion.article>
    </div>
  );
}
