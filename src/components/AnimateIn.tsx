"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode, CSSProperties } from "react";

type Effect =
  | "fade-up"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "scale-in"
  | "blur-in"
  | "blur-up";

const variants: Record<Effect, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    show:   { opacity: 1, y: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    show:   { opacity: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 60 },
    show:   { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: -60 },
    show:   { opacity: 1, x: 0 },
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.88 },
    show:   { opacity: 1, scale: 1 },
  },
  "blur-in": {
    hidden: { opacity: 0, filter: "blur(16px)" },
    show:   { opacity: 1, filter: "blur(0px)" },
  },
  "blur-up": {
    hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
    show:   { opacity: 1, y: 0,  filter: "blur(0px)" },
  },
};

interface AnimateInProps {
  children: ReactNode;
  effect?: Effect;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  margin?: string;
}

export function AnimateIn({
  children,
  effect = "fade-up",
  delay = 0,
  duration = 0.75,
  className = "",
  once = true,
  margin = "-60px",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: margin as `${number}px` });

  return (
    <motion.div
      ref={ref}
      variants={variants[effect]}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Staggered container — children get auto delay */
interface StaggerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  staggerDelay?: number;
  containerEffect?: Effect;
  once?: boolean;
  margin?: string;
}

export function StaggerIn({
  children,
  className = "",
  style,
  staggerDelay = 0.08,
  once = true,
  margin = "-40px",
}: StaggerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, margin: margin as `${number}px` });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        show: { transition: { staggerChildren: staggerDelay } },
        hidden: {},
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* Single stagger child — use inside StaggerIn */
export function StaggerChild({
  children,
  effect = "fade-up",
  className = "",
}: {
  children: ReactNode;
  effect?: Effect;
  className?: string;
}) {
  return (
    <motion.div variants={variants[effect]} className={className}>
      {children}
    </motion.div>
  );
}
