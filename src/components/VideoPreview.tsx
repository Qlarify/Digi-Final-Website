"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

interface Props {
  src?: string;            // /videos/xxx.mp4 — optional; falls back to designed reel frame
  label?: string;          // e.g. "Showreel 2025"
  meta?: string;           // e.g. "Brand Film · Real Estate"
  duration?: string;       // e.g. "1:24"
  className?: string;
  rounded?: string;        // tailwind rounding class
  autoplayInView?: boolean;// for hero showreel
  ratio?: string;          // aspect-ratio css value, default 16/9
  cinematic?: boolean;     // slow ken-burns zoom + teal grade (hero)
}

export function VideoPreview({
  src,
  label = "Watch",
  meta,
  duration = "0:30",
  className = "",
  rounded = "rounded-2xl",
  autoplayInView = false,
  ratio = "16 / 9",
  cinematic = false,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const vidRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hover, setHover] = useState(false);

  // Autoplay when scrolled into view (hero reel) — respects reduced-motion
  useEffect(() => {
    if (!autoplayInView || !src) return;
    if (typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        const v = vidRef.current;
        if (!v) return;
        if (entry.isIntersecting) { v.play().then(() => setPlaying(true)).catch(() => {}); }
        else { v.pause(); setPlaying(false); }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [autoplayInView, src]);

  const toggle = () => {
    const v = vidRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  // Hover-to-play for grid items (non-autoplay)
  const onEnter = () => {
    setHover(true);
    if (!autoplayInView && src && vidRef.current) {
      vidRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  };
  const onLeave = () => {
    setHover(false);
    if (!autoplayInView && src && vidRef.current) {
      vidRef.current.pause();
      vidRef.current.currentTime = 0;
      setPlaying(false);
    }
  };

  return (
    <div
      ref={wrapRef}
      role="button"
      tabIndex={0}
      aria-label={`Play video: ${label}`}
      className={`reel-frame group ${rounded} ${className} ${cinematic ? "cine-grade" : ""} focus:outline-none focus-visible:ring-2 focus-visible:ring-[#066766] focus-visible:ring-offset-2 cursor-pointer`}
      style={{ aspectRatio: ratio }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
      }}
    >
      {/* Video — first frame shows as poster so samples always look populated */}
      {src && (
        <video
          ref={vidRef}
          className={`absolute inset-0 w-full h-full object-cover ${cinematic ? "cine-zoom" : ""}`}
          src={`${src}#t=0.1`}
          muted
          loop
          playsInline
          aria-hidden="true"
          preload="metadata"
          style={{ opacity: 1 }}
        />
      )}

      {/* Letterbox bars on hover */}
      <motion.div className="absolute inset-x-0 top-0 letterbox z-20" style={{ height: "8%", transformOrigin: "top" }}
        animate={{ scaleY: hover ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }} />
      <motion.div className="absolute inset-x-0 bottom-0 letterbox z-20" style={{ height: "8%", transformOrigin: "bottom" }}
        animate={{ scaleY: hover ? 1 : 0 }} transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }} />

      {/* Dark vignette for legibility */}
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 45%)" }} />

      {/* Top-left: REC + timecode */}
      <div className="absolute top-4 left-4 z-30 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#ff5c5c] rec-dot" />
        <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">REC</span>
      </div>

      {/* Top-right: duration chip */}
      <div className="absolute top-4 right-4 z-30">
        <span className="text-[10px] font-mono px-2 py-1 rounded-md bg-black/40 backdrop-blur-sm text-white/80 border border-white/10">
          {duration}
        </span>
      </div>

      {/* Center play */}
      <div className="absolute inset-0 z-30 flex items-center justify-center">
        <motion.div
          className="flex items-center justify-center rounded-full"
          style={{ width: 64, height: 64, background: playing ? "rgba(255,255,255,0.12)" : "#066766", backdropFilter: playing ? "blur(8px)" : "none" }}
          animate={{ scale: hover || playing ? 1 : 0.82, opacity: playing && !hover ? 0 : 1 }}
          transition={{ duration: 0.35, ease: [0.16,1,0.3,1] }}
        >
          {playing ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white fill-white ml-0.5" />}
        </motion.div>
      </div>

      {/* Bottom: waveform + label */}
      <div className="absolute bottom-0 inset-x-0 z-30 p-4 flex items-end justify-between gap-3">
        <div>
          {meta && <p className="text-[10px] uppercase tracking-widest text-white/45 mb-1">{meta}</p>}
          <p className="text-[13px] font-semibold text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>{label}</p>
        </div>
        {/* Waveform */}
        <div className="flex items-end gap-[2px] h-5">
          {[0.4,0.7,0.45,0.9,0.6,1,0.5,0.8,0.55,0.7,0.4].map((h, i) => (
            <span
              key={i}
              className={`w-[2px] bg-[#1A8D8B]/70 rounded-full ${hover || playing ? "wave-bar" : ""}`}
              style={{ height: `${h * 100}%`, animationDelay: `${i * 0.08}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
