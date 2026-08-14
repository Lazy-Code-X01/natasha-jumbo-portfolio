"use client";

import { motion } from "framer-motion";
import { philosophy } from "@/lib/content";
import { scrollFadeUpProps } from "@/lib/motion";

export default function Philosophy() {
  return (
    <section className="bg-ink text-canvas px-6 md:px-10 py-24 md:py-36">
      <motion.div
        {...scrollFadeUpProps}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="font-quote italic text-2xl md:text-4xl leading-relaxed text-balance">
          &ldquo;{philosophy.quote}&rdquo;
        </p>
        <p className="mt-8 text-sm uppercase tracking-widest text-canvas/60">
          — {philosophy.attribution}
        </p>
      </motion.div>
    </section>
  );
}
