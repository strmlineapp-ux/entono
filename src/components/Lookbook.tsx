"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const lookbookImages = [
  {
    src: "/images/lb1_v2.png",
    caption: "Look 01 — Heavy wool drape",
    isLandscape: false,
  },
  {
    src: "/images/lb2_v2.png",
    caption: "Look 02 — Architectural form",
    isLandscape: false,
  },
  {
    src: "/images/lb3_v2.png",
    caption: "Look 03 — Textured knit",
    isLandscape: false,
  },
  {
    src: "/images/lb4_v2.png",
    caption: "Look 04 — Earth tone palette",
    isLandscape: true,
  },
  {
    src: "/images/lb5_v2.png",
    caption: "Look 05 — Layered silhouette",
    isLandscape: false,
  },
];

export default function Lookbook() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="lookbook" className="section-padding py-32 md:py-44 bg-oat">
      <AnimatedSection>
        <div className="mb-20 md:mb-28 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[11px] tracking-widest text-warm-gray-light uppercase">
              Lookbook
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-ultra text-charcoal mt-3 font-medium">
              FW25 Editorial
            </h2>
          </div>
          <p className="text-sm text-warm-gray max-w-sm leading-relaxed">
            A visual study in autumn's muted luxury — where form meets the season's rhythm.
          </p>
        </div>
      </AnimatedSection>

      {/* Masonry grid — CSS columns for true masonry without gaps */}
      <motion.div
        className="columns-2 md:columns-3 gap-3 md:gap-4"
        layout
      >
        {lookbookImages.map((image, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <motion.div
              className="group relative overflow-hidden cursor-pointer break-inside-avoid mb-3 md:mb-4"
              onClick={() => setSelectedImage(i)}
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`relative ${image.isLandscape ? "aspect-[4/3]" : "aspect-[3/4]"}`}>
                <Image
                  src={image.src}
                  alt={image.caption}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-500" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
              >
                <span className="text-[11px] tracking-widest text-oat uppercase">
                  {image.caption}
                </span>
              </motion.div>
            </motion.div>
          </AnimatedSection>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lookbookImages[selectedImage].src}
                alt={lookbookImages[selectedImage].caption}
                width={1200}
                height={1536}
                className="max-w-full max-h-[85vh] object-contain"
                priority
              />
              <p className="text-center text-[12px] tracking-widest text-oat/70 uppercase mt-4">
                {lookbookImages[selectedImage].caption}
              </p>
            </motion.div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-oat/70 hover:text-oat transition-colors text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
