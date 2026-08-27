"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ventures } from "@/lib/content";
import { scrollFadeUpProps, staggerContainer, fadeUp } from "@/lib/motion";

// Explicit column placement per venture index — kept as full literal class
// names (not template-string-built) so Tailwind's content scanner actually
// picks them up. Desktop only: mobile falls back to normal document flow
// (no col/row classes applied), so each venture just stacks as one block.
const COL_START = [
  "md:col-start-1",
  "md:col-start-2",
  "md:col-start-3",
  "md:col-start-4",
];

export default function Ventures() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-20 max-w-content mx-auto">
      <motion.div {...scrollFadeUpProps} className="mb-10 md:mb-14 max-w-2xl">
        <span className="text-sm uppercase tracking-widest text-ink-soft">
          Ventures
        </span>
        <h2 className="font-display text-2xl md:text-3xl mt-3">
          Also <span className="italic font-light">building</span>
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.06)}
        className="relative grid grid-cols-1 md:grid-cols-4 gap-x-6 md:gap-y-3"
      >
        {/* connecting line — a "network" motif threading the marks together,
            deliberately distinct from Work's bordered case-study cards */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-14 inset-x-0 h-px bg-line"
        />

        {ventures.map((venture, i) => (
          <Fragment key={venture.name}>
            {/* row 1: circle mark */}
            <motion.div
              variants={fadeUp}
              className={`group relative flex justify-center md:row-start-1 ${COL_START[i]}`}
            >
              <div className="relative z-10 bg-canvas p-1.5 rounded-full">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-clay/30 group-hover:border-clay transition-colors bg-canvas-deep/40"
                >
                  {venture.imageUrl &&
                    (venture.imageFit === "cover" ? (
                      <Image
                        src={venture.imageUrl}
                        alt={venture.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-3">
                        <Image
                          src={venture.imageUrl}
                          alt={`${venture.name} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                </motion.div>
              </div>
            </motion.div>

            {/* row 2: name */}
            <motion.h3
              variants={fadeUp}
              className={`font-display text-lg md:text-xl text-center mt-3 md:mt-4 md:row-start-2 ${COL_START[i]}`}
            >
              {venture.name}
            </motion.h3>

            {/* row 3: role */}
            <motion.span
              variants={fadeUp}
              className={`text-xs uppercase tracking-widest text-sage text-center mt-1.5 md:row-start-3 ${COL_START[i]}`}
            >
              {venture.role}
            </motion.span>

            {/* row 4: description — starts on the same line across every
                column regardless of how many lines it wraps to. mb-10 on
                mobile only when there's no link — whichever element ends up
                last needs the gap to the next venture, since the grid's own
                row-gap is 0 on mobile (it was double-stacking with these
                margins) and md:gap-y-3 handles spacing between shared rows
                at desktop instead. */}
            <motion.p
              variants={fadeUp}
              className={`text-sm text-ink-soft leading-relaxed text-center mt-1.5 max-w-[200px] mx-auto md:row-start-4 md:mb-0 ${COL_START[i]} ${venture.url ? "" : "mb-10"}`}
            >
              {venture.description}
            </motion.p>

            {/* row 5: optional link */}
            {venture.url && (
              <motion.a
                variants={fadeUp}
                href={venture.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs uppercase tracking-widest text-clay hover:text-ink transition-colors text-center mt-1.5 mb-10 md:mb-0 md:row-start-5 ${COL_START[i]}`}
              >
                Visit ↗
              </motion.a>
            )}
          </Fragment>
        ))}
      </motion.div>
    </section>
  );
}
