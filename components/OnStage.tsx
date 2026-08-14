"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mic } from "lucide-react";
import { speakingHighlights } from "@/lib/content";
import { scrollFadeUpProps } from "@/lib/motion";

export default function OnStage() {
  return (
    <section
      id="on-stage"
      className="px-6 md:px-10 py-20 md:py-28 max-w-content mx-auto"
    >
      <motion.div {...scrollFadeUpProps} className="mb-10 md:mb-12 max-w-2xl">
        <span className="text-sm uppercase tracking-widest text-ink-soft">
          On stage
        </span>
        <h2 className="font-display text-3xl md:text-4xl mt-3">
          On <span className="italic font-light">Stage</span>
        </h2>
        <p className="font-quote italic text-ink-soft mt-3">
          A handful of rooms hosted and panels moderated — not a highlight reel, just a glimpse.
        </p>
      </motion.div>

      <div className="relative">
        <div className="flex md:grid md:grid-cols-4 gap-5 md:gap-6 overflow-x-auto md:overflow-visible no-scrollbar scroll-snap-x pb-2">
          {speakingHighlights.map((highlight, i) => (
            <motion.figure
              key={highlight.title}
              whileHover={highlight.isPlaceholder ? undefined : { y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`group relative shrink-0 w-64 md:w-full aspect-[4/5] snap-start overflow-hidden rounded-sm ${
                highlight.isPlaceholder
                  ? "border border-dashed border-line"
                  : "border border-line hover:border-clay/50 hover:shadow-lg transition-[border-color,box-shadow]"
              }`}
            >
              {highlight.isPlaceholder ? (
                <div className="absolute inset-2 border border-dashed border-line rounded-sm flex flex-col items-center justify-center gap-2 text-ink-soft/60">
                  <Mic className="w-6 h-6" />
                  <span className="text-xs uppercase tracking-widest">
                    Coming soon
                  </span>
                </div>
              ) : (
                highlight.imageUrl && (
                  <>
                    <Image
                      src={highlight.imageUrl}
                      alt={highlight.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/70 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 px-3 py-2 text-xs text-canvas">
                      {highlight.title} · {highlight.year}
                    </figcaption>
                  </>
                )
              )}

              <span
                className={`absolute top-3 left-3 flex items-center justify-center w-7 h-7 rounded-full font-display text-xs ${
                  highlight.isPlaceholder
                    ? "border border-dashed border-line text-ink-soft/70"
                    : "bg-ink/70 text-canvas"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.figure>
          ))}
        </div>

        {/* hints that the strip scrolls further — mobile only */}
        <div className="md:hidden pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-canvas to-transparent" />
      </div>
    </section>
  );
}
