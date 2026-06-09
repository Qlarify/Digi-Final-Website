"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
}

export function TiltCard({ children, className = "", maxTilt = 8, scale = 1.02 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setTransform({
      rotateX: (0.5 - y) * maxTilt * 2,
      rotateY: (x - 0.5) * maxTilt * 2,
    });
  };

  const reset = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
    setHovered(false);
  };

  return (
    <div ref={ref} style={{ perspective: "900px" }} className={className}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={reset}
        animate={{
          rotateX: transform.rotateX,
          rotateY: transform.rotateY,
          scale: hovered ? scale : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
