"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

interface Props {
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfter({
  beforeLabel = "Before Edit",
  afterLabel = "After Edit",
  className = "",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const { left, width } = el.getBoundingClientRect();
    const pct = Math.min(100, Math.max(0, ((clientX - left) / width) * 100));
    setPosition(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl select-none cursor-ew-resize ${className}`}
      style={{ aspectRatio: "16/9" }}
      onMouseMove={(e) => dragging && updatePosition(e.clientX)}
      onMouseDown={() => setDragging(true)}
      onMouseUp={() => setDragging(false)}
      onMouseLeave={() => setDragging(false)}
      onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
    >
      {/* AFTER layer — full width coloured bg */}
      <div className="absolute inset-0 flex items-center justify-center"
        style={{ background: "linear-gradient(135deg, #eefaf9 0%, #d9f3f2 100%)" }}
      >
        <div className="text-center">
          <div className="text-6xl font-black font-[family-name:var(--font-montserrat)] text-[#066766] mb-2">AFTER</div>
          <div className="text-sm text-[#066766]/60">Professionally Color Graded · Motion Graphics · Sound Design</div>
        </div>
      </div>

      {/* BEFORE layer — clipped */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)`, background: "#f0eeeb" }}
      >
        <div className="text-center">
          <div className="text-6xl font-black font-[family-name:var(--font-montserrat)] text-[#999] mb-2">BEFORE</div>
          <div className="text-sm text-[#999]/70">Raw Unedited Footage</div>
        </div>
      </div>

      {/* Divider */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white shadow-lg z-20 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-[#066766]/20">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 4l-3 4 3 4M11 4l3 4-3 4" stroke="#066766" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <span className="text-xs font-semibold bg-black/40 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
          {beforeLabel}
        </span>
      </div>
      <div className="absolute top-4 right-4 z-10 pointer-events-none">
        <span className="text-xs font-semibold bg-[#066766] text-white px-3 py-1.5 rounded-full">
          {afterLabel}
        </span>
      </div>

      {/* Instruction */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: dragging ? 0 : 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
      >
        <span className="text-xs font-medium bg-black/30 text-white px-3 py-1.5 rounded-full backdrop-blur-sm whitespace-nowrap">
          ← Drag to compare →
        </span>
      </motion.div>
    </div>
  );
}
