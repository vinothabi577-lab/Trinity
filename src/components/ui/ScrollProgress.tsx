import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed right-4 top-1/4 z-50 h-1/2 w-1 origin-top rounded-full bg-primary/20"
    >
      <motion.div
        className="h-full w-full origin-top rounded-full bg-primary shadow-[0_0_10px_oklch(0.45_0.05_100/0.5)]"
        style={{ scaleY }}
      />
    </motion.div>
  );
}
