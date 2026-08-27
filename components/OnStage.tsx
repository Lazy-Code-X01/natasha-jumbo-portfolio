"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { Mic, Play } from "lucide-react";
import { speakingHighlights } from "@/lib/content";
import { scrollFadeUpProps, staggerContainer } from "@/lib/motion";

// Alternating tilt gives these a candid, tossed-on-the-desk polaroid feel —
// deliberately different from Work's clean, squared-off grid. Built into the
// motion variant (not a Tailwind rotate-* class) because Framer Motion's `y`
// animation sets its own inline `transform`, which would otherwise silently
// override any CSS-class-based rotation the moment the entrance animates.
const TILT_DEGREES = [-3, 2, -2, 3];

function tiltVariants(rotate: number): Variants {
  return {
    hidden: { opacity: 0, y: 24, rotate },
    visible: {
      opacity: 1,
      y: 0,
      rotate,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

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
          A handful of rooms hosted and panels moderated, not a highlight reel, just a glimpse.
        </p>
      </motion.div>

      <div className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.1)}
          className="flex md:grid md:grid-cols-4 gap-6 md:gap-8 overflow-x-auto md:overflow-visible no-scrollbar scroll-snap-x pt-2 pb-6"
        >
          {speakingHighlights.map((highlight, i) => {
            const Wrapper = highlight.url ? motion.a : motion.figure;
            const linkProps = highlight.url
              ? {
                  href: highlight.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <Wrapper
                key={highlight.title}
                {...linkProps}
                variants={tiltVariants(TILT_DEGREES[i % TILT_DEGREES.length])}
                whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group shrink-0 w-56 md:w-full snap-start bg-canvas p-3 pb-6 shadow-md block"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  {highlight.isPlaceholder ? (
                    <div className="absolute inset-0 border border-dashed border-line flex flex-col items-center justify-center gap-2 text-ink-soft/60 bg-canvas-deep/30">
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
                          className={`object-cover ${highlight.imagePosition ?? ""}`}
                        />
                        {highlight.url && (
                          <div className="absolute inset-0 flex items-center justify-center bg-ink/0 group-hover:bg-ink/20 transition-colors">
                            <span className="w-11 h-11 rounded-full bg-canvas/90 flex items-center justify-center shadow-md scale-90 group-hover:scale-100 transition-transform">
                              <Play className="w-4 h-4 text-ink ml-0.5" fill="currentColor" />
                            </span>
                          </div>
                        )}
                      </>
                    )
                  )}
                </div>

                <div className="font-quote italic text-sm text-ink-soft text-center mt-3">
                  {highlight.isPlaceholder
                    ? highlight.title
                    : highlight.year && highlight.year !== "TODO"
                      ? `${highlight.title} · ${highlight.year}`
                      : highlight.title}
                </div>
              </Wrapper>
            );
          })}
        </motion.div>

        {/* hints that the strip scrolls further — mobile only */}
        <div className="md:hidden pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-canvas to-transparent" />
      </div>
    </section>
  );
}
