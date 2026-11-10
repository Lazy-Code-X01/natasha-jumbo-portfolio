"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials as allTestimonials } from "@/lib/content";
import { scrollFadeUpProps } from "@/lib/motion";

const AUTOPLAY_MS = 7000;
const SWIPE_THRESHOLD = 60;

// Draft (sample, not-yet-approved) quotes render locally and on Vercel
// previews for review, never on production — see next.config.mjs and
// Testimonial.draft.
const showDrafts = process.env.SHOW_DRAFT_TESTIMONIALS === "1";
const testimonials = allTestimonials.filter((t) => showDrafts || !t.draft);

export default function Testimonials() {
  // One quote at a time, in the large centered "spotlight" style. Every slide
  // is stacked in the same grid cell (inactive ones faded out), so the
  // section is always as tall as the longest quote — no height jump between
  // slides. Controls/autoplay only appear once there are 2+ testimonials.
  const count = testimonials.length;
  const hasMultiple = count > 1;
  const reduceMotion = useReducedMotion();

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (target: number) => setIndex(((target % count) + count) % count),
    [count],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (!hasMultiple || paused || reduceMotion) return;
    const id = setTimeout(next, AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [hasMultiple, paused, reduceMotion, next]);

  const autoplaying = hasMultiple && !paused && !reduceMotion;

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
          {...scrollFadeUpProps}
          className="max-w-2xl mx-auto"
          role={hasMultiple ? "region" : undefined}
          aria-roledescription={hasMultiple ? "carousel" : undefined}
          aria-label={hasMultiple ? "Client testimonials" : undefined}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <motion.div
            className={`grid ${hasMultiple ? "cursor-grab active:cursor-grabbing touch-pan-y" : ""}`}
            aria-live={autoplaying ? "off" : "polite"}
            drag={hasMultiple ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -SWIPE_THRESHOLD) next();
              else if (info.offset.x > SWIPE_THRESHOLD) prev();
            }}
          >
            {testimonials.map((testimonial, i) => {
              const active = i === index;
              return (
                <motion.figure
                  key={testimonial.attribution}
                  aria-roledescription={hasMultiple ? "slide" : undefined}
                  aria-label={hasMultiple ? `${i + 1} of ${count}` : undefined}
                  aria-hidden={!active}
                  initial={false}
                  animate={{
                    opacity: active ? 1 : 0,
                    y: active || reduceMotion ? 0 : 16,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`[grid-area:1/1] flex flex-col items-center text-center gap-6 select-none ${
                    active ? "" : "pointer-events-none"
                  }`}
                >
                  <Quote
                    className="w-9 h-9 md:w-10 md:h-10 text-clay"
                    aria-hidden="true"
                  />
                  <blockquote className="font-quote italic leading-relaxed text-ink text-balance text-2xl md:text-3xl">
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
              );
            })}
          </motion.div>

          {hasMultiple && (
            <div className="mt-10 md:mt-12 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full border border-line text-ink-soft hover:text-ink hover:border-ink transition-colors flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((testimonial, i) => (
                  <button
                    key={testimonial.attribution}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Show testimonial ${i + 1} of ${count}`}
                    aria-current={i === index ? "true" : undefined}
                    className="p-1.5 group"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-300 ${
                        i === index
                          ? "w-6 bg-ink"
                          : "w-1.5 bg-line group-hover:bg-ink-soft"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full border border-line text-ink-soft hover:text-ink hover:border-ink transition-colors flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
