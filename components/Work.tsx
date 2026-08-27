"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus, ArrowUpRight } from "lucide-react";
import { workProjects, stats } from "@/lib/content";
import { scrollFadeUpProps, staggerContainer, fadeUp } from "@/lib/motion";

// Double-stroke emphasis mark — Work's own decorative signature, distinct
// from Hero's single wavy brushstroke underline.
function EmphasisMark() {
  return (
    <svg
      viewBox="0 0 140 24"
      className="w-28 md:w-36 text-clay mt-4"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 10C30 4 70 4 138 8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M2 18C30 14 70 15 138 17"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export default function Work() {
  return (
    <section id="work" className="bg-canvas-deep px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-content mx-auto">
      <motion.div {...scrollFadeUpProps} className="mb-12 md:mb-16 max-w-2xl">
        <span className="text-sm uppercase tracking-widest text-ink-soft">
          Selected work
        </span>
        <h2 className="font-display text-3xl md:text-5xl mt-3">
          Building brands with <span className="italic font-light">intent</span>
        </h2>
        <EmphasisMark />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.12)}
        className="grid md:grid-cols-2 gap-6 md:gap-8"
      >
        {workProjects.map((project, i) => {
          const Wrapper = project.url ? motion.a : motion.article;
          const linkProps = project.url
            ? {
                href: project.url,
                target: "_blank",
                rel: "noopener noreferrer",
              }
            : {};

          const isDanglingLast =
            workProjects.length % 2 !== 0 && i === workProjects.length - 1;

          return (
          <Wrapper
            key={project.title}
            {...linkProps}
            variants={fadeUp}
            whileHover={project.isPlaceholder ? undefined : { y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`group overflow-hidden rounded-sm flex flex-col ${
              isDanglingLast ? "md:col-span-2" : ""
            } ${
              project.isPlaceholder
                ? "border border-dashed border-line bg-transparent"
                : "border border-line bg-canvas hover:border-clay/50 hover:shadow-lg transition-[border-color,box-shadow]"
            }`}
          >
            <div
              className={`relative aspect-[4/3] w-full overflow-hidden ${
                !project.isPlaceholder && project.imageFit === "contain"
                  ? "bg-canvas-deep/20"
                  : ""
              }`}
            >
              {project.isPlaceholder ? (
                <div className="absolute inset-2 border border-dashed border-line rounded-sm flex flex-col items-center justify-center gap-2 text-ink-soft/60">
                  <Plus className="w-6 h-6" />
                  <span className="text-xs uppercase tracking-widest">
                    Open slot
                  </span>
                </div>
              ) : (
                project.imageUrl &&
                (project.imageFit === "contain" ? (
                  <div className="absolute inset-6 md:inset-8 transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ))
              )}

              <span
                className={`absolute top-4 left-4 flex items-center justify-center w-9 h-9 rounded-full font-display text-sm ${
                  project.isPlaceholder
                    ? "border border-dashed border-line text-ink-soft/70"
                    : "bg-ink/70 text-canvas"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {!project.isPlaceholder && (
                <span className="absolute top-4 right-4 text-xs uppercase tracking-widest text-ink bg-canvas/90 border border-line rounded-full px-3 py-1">
                  {project.tag}
                </span>
              )}
            </div>

            <div className="p-6 md:p-8 flex flex-col gap-3">
              <div className="flex items-start justify-between gap-3">
                <h3
                  className={`font-display text-2xl md:text-3xl flex items-center gap-1.5 ${
                    project.isPlaceholder ? "text-ink-soft" : "text-ink"
                  }`}
                >
                  {project.title}
                  {project.url && (
                    <ArrowUpRight className="w-4 h-4 text-ink-soft group-hover:text-clay transition-colors shrink-0" />
                  )}
                </h3>
                {!project.isPlaceholder && project.year && (
                  <span className="text-xs uppercase tracking-widest text-ink-soft shrink-0 mt-1.5">
                    {project.year}
                  </span>
                )}
              </div>
              <p
                className={`leading-relaxed ${
                  project.isPlaceholder ? "text-ink-soft/70 italic" : "text-ink-soft"
                }`}
              >
                {project.description}
              </p>
            </div>
          </Wrapper>
          );
        })}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.1)}
        className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-line pt-10"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={fadeUp}>
            <p className="font-display text-3xl md:text-4xl text-clay">
              {stat.number}
            </p>
            <p className="text-sm text-ink-soft mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
