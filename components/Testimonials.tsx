"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/content";
import { scrollFadeUpProps, staggerContainer, fadeUp } from "@/lib/motion";

export default function Testimonials() {
  // Single-testimonial spotlight: fully centered, no leftover card border —
  // a lone bordered box read like an orphaned Work tile rather than an
  // intentional layout. Falls back to a bordered card grid once there are
  // 2+ (a centered single column of cards would look accidental instead).
  const isSingle = testimonials.length === 1;

  return (
    <section className="bg-canvas-deep px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-content mx-auto">
        <motion.div
          {...scrollFadeUpProps}
          className="text-center max-w-xl mx-auto mb-12 md:mb-16"
        >
          <span className="text-sm uppercase tracking-widest font-mono text-ink-soft">
            What clients say
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-3">
            Trusted <span className="italic font-light">voices</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.12)}
          className={
            isSingle
              ? "max-w-2xl mx-auto"
              : "grid md:grid-cols-2 gap-6 md:gap-8"
          }
        >
          {testimonials.map((testimonial) => (
            <motion.figure
              key={testimonial.attribution}
              variants={fadeUp}
              className={
                isSingle
                  ? "flex flex-col items-center text-center gap-6"
                  : "border border-line rounded-sm bg-canvas p-8 md:p-10 flex flex-col gap-6"
              }
            >
              <Quote
                className="w-9 h-9 md:w-10 md:h-10 text-clay"
                aria-hidden="true"
              />
              <blockquote
                className={`font-quote italic leading-relaxed text-ink text-balance ${
                  isSingle ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                }`}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <span className="w-8 h-px bg-line" aria-hidden="true" />
                <figcaption className="text-sm uppercase tracking-widest font-mono text-ink-soft whitespace-nowrap">
                  {testimonial.attribution}
                </figcaption>
                <span className="w-8 h-px bg-line" aria-hidden="true" />
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
