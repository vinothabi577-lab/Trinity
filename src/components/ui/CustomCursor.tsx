import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "drag">("default");

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-cursor="drag"]')) {
        setCursorType("drag");
      } else if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setCursorType("pointer");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Return null on touch devices where cursor is not needed
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const variants = {
    default: { x: mousePosition.x - 8, y: mousePosition.y - 8, scale: 1, opacity: 1 },
    pointer: { x: mousePosition.x - 8, y: mousePosition.y - 8, scale: 3, opacity: 1 },
    drag: { x: mousePosition.x - 24, y: mousePosition.y - 24, scale: 1, opacity: 1 },
  };

  return (
    <motion.div
      className={`pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full ${
        cursorType === "drag"
          ? "h-12 w-12 bg-primary text-[10px] font-semibold tracking-widest text-primary-foreground"
          : "h-4 w-4 bg-primary mix-blend-difference"
      }`}
      animate={variants[cursorType]}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
        mass: 0.2,
      }}
    >
      {cursorType === "drag" && <span>DRAG</span>}
    </motion.div>
  );
}
