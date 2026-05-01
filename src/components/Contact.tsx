"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding py-32 md:py-44 bg-oat">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left: Info */}
        <AnimatedSection>
          <span className="text-[11px] tracking-widest text-warm-gray-light uppercase">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-ultra text-charcoal mt-3 font-medium leading-tight">
            Let's<br />connect
          </h2>

          <div className="mt-12 space-y-8">
            <div>
              <span className="text-[11px] tracking-widest text-warm-gray-light uppercase">
                Email
              </span>
              <a
                href="mailto:hello@entono.com"
                className="block text-base text-charcoal hover:text-warm-gray-dark transition-colors mt-1"
              >
                hello@entono.com
              </a>
            </div>
            <div>
              <span className="text-[11px] tracking-widest text-warm-gray-light uppercase">
                Atelier
              </span>
              <p className="text-base text-charcoal mt-1 leading-relaxed">
                42 Rue du Faubourg Saint-Honoré<br />
                75008 Paris, France
              </p>
            </div>
            <div>
              <span className="text-[11px] tracking-widest text-warm-gray-light uppercase">
                Press
              </span>
              <a
                href="mailto:press@entono.com"
                className="block text-base text-charcoal hover:text-warm-gray-dark transition-colors mt-1"
              >
                press@entono.com
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Right: Form */}
        <AnimatedSection delay={0.2}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center h-full text-center"
            >
              <span className="font-display text-2xl text-charcoal tracking-ultra">Thank you</span>
              <p className="text-sm text-warm-gray mt-3 max-w-xs">
                We'll be in touch shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <AnimatedSection delay={0.1}>
                <div>
                  <label htmlFor="name" className="text-[11px] tracking-widest text-warm-gray-light uppercase block mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-warm-gray-light/30 py-3 text-charcoal placeholder-warm-gray-light/50 focus:outline-none focus:border-charcoal transition-colors text-base font-light"
                    placeholder="Your name"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div>
                  <label htmlFor="email" className="text-[11px] tracking-widest text-warm-gray-light uppercase block mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-warm-gray-light/30 py-3 text-charcoal placeholder-warm-gray-light/50 focus:outline-none focus:border-charcoal transition-colors text-base font-light"
                    placeholder="your@email.com"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div>
                  <label htmlFor="message" className="text-[11px] tracking-widest text-warm-gray-light uppercase block mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-warm-gray-light/30 py-3 text-charcoal placeholder-warm-gray-light/50 focus:outline-none focus:border-charcoal transition-colors text-base font-light resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-10 py-4 bg-charcoal text-oat text-[12px] tracking-widest uppercase overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-warm-gray-dark translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
                </motion.button>
              </AnimatedSection>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
