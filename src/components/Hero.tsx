"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Preload hero image for fastest LCP
if (typeof window !== "undefined") {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = "/images/hero_v3.png";
  document.head.appendChild(link);
}

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const vh = typeof window !== "undefined" ? window.innerHeight : 1;
  const progress = Math.min(scrollY / vh, 1);
  const y = progress * 200;
  const opacity = Math.max(1 - progress / 0.6, 0);
  const scale = 1 + progress * 0.08;

  return (
    <section id="hero" ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${y}px) scale(${scale})`,
          willChange: "transform",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(/images/hero_v3.png)`,
            transform: "translateZ(0)",
          }}
        />
        {/* Overlay gradient — soft fade into oat at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/10 to-oat/95" />
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-oat to-transparent" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-[13px] tracking-widest text-oat/80 uppercase">
            Autumn Wear — High Fashion
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-ultra text-oat font-medium mt-4"
        >
          ENTONO
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-base sm:text-lg text-oat/70 max-w-md leading-relaxed font-light"
        >
          The depth of hue. The rhythm of form.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[11px] tracking-widest text-oat/50 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-10 bg-oat/30"
          />
        </motion.div>
      </div>
    </section>
  );
}
