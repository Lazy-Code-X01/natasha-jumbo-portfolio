"use client";

import { motion } from "framer-motion";
import { intro } from "@/lib/content";
import { scrollFadeUpProps, staggerContainer, fadeUp } from "@/lib/motion";

export default function Intro() {
  return (
    <section className="bg-canvas-deep px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-content mx-auto">
        <motion.div
          {...scrollFadeUpProps}
          className="mb-12 md:mb-16 max-w-2xl"
        >
          <span className="text-sm uppercase tracking-widest text-ink-soft">
            Identity
          </span>
          <h2 className="font-display text-3xl md:text-5xl mt-3">
            Two disciplines,{" "}
            <span className="italic font-light">one instinct</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.15)}
          className="grid md:grid-cols-2 gap-10 md:gap-16"
        >
          <motion.div
            variants={fadeUp}
            className="border-t border-line pt-6"
          >
            <h3 className="font-display italic text-2xl mb-4 text-clay">
              Professional
            </h3>
            <p className="text-ink-soft leading-relaxed">{intro.professional}</p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="border-t border-line pt-6"
          >
            <h3 className="font-display italic text-2xl mb-4 text-clay">
              Public Speaking
            </h3>
            <p className="text-ink-soft leading-relaxed">{intro.speaking}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
