"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-charcoal text-oat">
      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-sienna blur-[200px] opacity-5" />

      <div className="section-padding py-32 md:py-48 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Image */}
          <AnimatedSection>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/images/about_v2.png"
                alt="Entono atelier"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/20" />
            </div>
          </AnimatedSection>

          {/* Right: Text */}
          <div className="flex flex-col justify-center">
            <AnimatedSection delay={0.2}>
              <span className="text-[11px] tracking-widest text-oat/40 uppercase">
                Our Philosophy
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-ultra text-oat mt-3 font-medium leading-tight">
                The depth<br />of hue
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="mt-10 space-y-6">
                <p className="text-base text-oat/70 leading-relaxed font-light">
                  Entono was born from a singular idea: that autumn is not merely a season, but a
                  colour — one with depth, rhythm, and intention.
                </p>
                <p className="text-base text-oat/70 leading-relaxed font-light">
                  Every garment we create carries the pulse of the season — the way light falls at
                  4pm in October, the weight of a well-cut wool coat, the quiet confidence of
                  muted tones layered with precision.
                </p>
                <p className="text-base text-oat/70 leading-relaxed font-light">
                  We design for those who understand that what you wear is not just fabric, but
                  feeling. That form follows rhythm. That colour is emotion rendered tangible.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="mt-12 pt-12 border-t border-oat/10 grid grid-cols-3 gap-8">
                <div>
                  <span className="font-display text-3xl text-oat font-medium">2019</span>
                  <p className="text-[11px] tracking-widest text-oat/40 uppercase mt-1">Founded</p>
                </div>
                <div>
                  <span className="font-display text-3xl text-oat font-medium">12</span>
                  <p className="text-[11px] tracking-widest text-oat/40 uppercase mt-1">Collections</p>
                </div>
                <div>
                  <span className="font-display text-3xl text-oat font-medium">1</span>
                  <p className="text-[11px] tracking-widest text-oat/40 uppercase mt-1">Season</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
