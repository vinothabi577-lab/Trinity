import { useState, useEffect } from "react";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";
import avatar5 from "@/assets/avatar-5.jpg";
import { motion, Variants } from "framer-motion";
import { Magnetic } from "@/components/ui/Magnetic";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative mx-auto mt-16 w-full max-w-4xl px-4 text-center">
      {/* Decorative subtle background glows */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
          x: mousePos.x,
          y: mousePos.y,
        }}
        transition={{
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          x: { type: "spring", stiffness: 50, damping: 20 },
          y: { type: "spring", stiffness: 50, damping: 20 },
        }}
        className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none"
        style={{ translateX: "-50%", translateY: "-50%" }}
      />

      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="flex items-center justify-center">
          <div className="flex -space-x-3">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                width={48}
                height={48}
                loading="lazy"
                className="h-12 w-12 rounded-full border-4 border-background object-cover transition-transform hover:scale-110 hover:z-10"
              />
            ))}
          </div>
          <span className="ml-4 text-sm font-medium text-muted-foreground">
            Trusted by discerning clients
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">Spaces That Inspire,</span>
          <br /> <span className="text-foreground">Designed for You</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg font-medium"
        >
          Trinity transforms homes and workspaces into refined, functional environments — crafted
          with care and built to last.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8 flex justify-center">
          <Magnetic>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="animate-pill-glow inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Book a Consultation
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="M7 17L17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </motion.a>
          </Magnetic>
        </motion.div>
      </motion.div>
    </section>
  );
}
