"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const collections = [
  {
    id: "ss26",
    name: "SS26",
    title: "Gilded Afternoon",
    description: "Warm light, heavier fabrics. A collection born from the last golden hours of summer bleeding into autumn.",
    image: "/images/coll1_v2.png",
  },
  {
    id: "fw25",
    name: "FW25",
    title: "Amber & Stone",
    description: "Earth tones meet architectural tailoring. The season's palette rendered in precise, intentional form.",
    image: "/images/coll2_v2.png",
  },
  {
    id: "res25",
    name: "RES25",
    title: "Last Light",
    description: "Transitional pieces for the in-between moments. Where summer's lightness meets autumn's depth.",
    image: "/images/coll3_v2.png",
  },
];

export default function Collections() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="collections" className="section-padding py-32 md:py-44 bg-oat">
      <AnimatedSection>
        <div className="mb-20 md:mb-28">
          <span className="text-[11px] tracking-widest text-warm-gray-light uppercase">
            Collections
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-ultra text-charcoal mt-3 font-medium">
            The Archive
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {collections.map((collection, i) => (
          <AnimatedSection key={collection.id} delay={i * 0.15}>
            <motion.div
              className="group cursor-pointer relative overflow-hidden"
              onMouseEnter={() => setHoveredId(collection.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden bg-warm-gray-light/20">
                <motion.img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: hoveredId === collection.id ? 1.08 : 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-700" />
              </div>

              {/* Info */}
              <div className="pt-6 pb-2">
                <span className="text-[11px] tracking-widest text-warm-gray-light uppercase">
                  {collection.name}
                </span>
                <h3 className="font-display text-xl tracking-ultra text-charcoal mt-1 font-medium group-hover:text-warm-gray-dark transition-colors duration-300">
                  {collection.title}
                </h3>
              </div>

              <AnimatePresence>
                {hoveredId === collection.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-warm-gray leading-relaxed pb-4 max-w-xs">
                      {collection.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
