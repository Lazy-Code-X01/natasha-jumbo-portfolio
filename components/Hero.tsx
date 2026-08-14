"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ComponentType } from "react";
import { Mail, Quote } from "lucide-react";
import { FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";
import { hero, heroTestimonial, stats, contact } from "@/lib/content";
import { fadeUp, staggerContainer } from "@/lib/motion";

// lucide-react dropped brand/logo icons — brand marks come from react-icons,
// Email keeps the generic lucide mail glyph.
const socialIcons: Record<string, ComponentType<{ className?: string }>> = {
  Instagram: FaInstagram,
  LinkedIn: FaLinkedin,
  Substack: SiSubstack,
  Behance: FaBehance,
  Email: Mail,
};

function Brushstroke() {
  return (
    <svg
      viewBox="0 0 220 40"
      className="w-32 md:w-40 text-clay mx-auto"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 28C36 6 78 4 118 16C150 25 178 8 216 12"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SwirlMark() {
  return (
    <svg
      viewBox="0 0 60 40"
      className="w-10 h-7 text-clay"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 34C14 34 14 6 26 6"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M12 38C24 38 24 10 36 10"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

function SquiggleArrow() {
  return (
    <svg
      viewBox="0 0 100 90"
      className="w-14 text-clay"
      fill="none"
      aria-hidden="true"
    >
      {/* short entry tick */}
      <path d="M32,8 L24,26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* single crossing loop */}
      <path
        d="M24,26 C8,34 14,58 34,56 C50,54 52,34 34,32 C20,30 18,44 30,48"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* tail sweeping out to the arrowhead */}
      <path d="M30,48 C44,60 65,58 78,66" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* solid filled arrowhead */}
      <path d="M91,71 L75,74 L81,58 Z" fill="currentColor" />
    </svg>
  );
}

function DiamondMark() {
  return (
    <div className="w-11 h-11 rotate-45 rounded-lg bg-canvas border border-line shadow-sm flex items-center justify-center">
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 text-clay -rotate-45"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        aria-hidden="true"
      >
        <rect x="9" y="2" width="6" height="12" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0" strokeLinecap="round" />
        <path d="M12 18v3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function StatBlobBadge() {
  const stat = stats[0];
  return (
    <div className="relative w-32 h-28 md:w-36 md:h-32">
      <svg
        viewBox="0 0 200 160"
        className="absolute inset-0 w-full h-full text-clay"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M42,18 C74,2 132,4 162,26 C192,48 194,88 172,118 C150,148 96,158 62,144 C28,130 4,98 8,68 C12,40 22,32 42,18 Z"
          fill="#f2f1ea"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
        <span className="text-[10px] uppercase tracking-widest text-ink-soft">
          {stat.label}
        </span>
        <span className="font-display text-2xl md:text-3xl text-clay mt-1">
          {stat.number}
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const firstName = hero.name.split(" ")[0];

  return (
    <section
      id="top"
      className="relative overflow-x-hidden pt-24 md:pt-28 pb-12 md:pb-16 px-6"
    >
      {/* decorative dots — desktop only */}
      <span className="hidden md:block absolute top-32 left-[10%] w-2.5 h-2.5 rounded-full bg-clay/40" />
      <span className="hidden md:block absolute bottom-16 right-[12%] w-2 h-2 rounded-full bg-sage/50" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.15)}
        className="max-w-xl mx-auto text-center relative z-10"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm text-ink-soft"
        >
          {hero.greeting} <span aria-hidden="true">👋</span>
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="font-display leading-tight text-3xl md:text-5xl mt-4"
        >
          I&rsquo;m <span className="italic font-bold text-clay">{firstName}</span>,
          <span className="block mt-1">{hero.role}</span>
        </motion.h1>

        <motion.div variants={fadeUp} className="mt-4">
          <Brushstroke />
        </motion.div>

        <motion.div variants={fadeUp} className="mt-6">
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-ink border-b border-ink pb-1 hover:text-clay hover:border-clay transition-colors"
          >
            View the work
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.12)}
        className="relative mt-8 md:mt-12 mx-auto max-w-3xl flex flex-col items-center gap-6 md:gap-0 md:h-[400px]"
      >
        {/* testimonial callout */}
        <motion.div
          variants={fadeUp}
          className="md:absolute md:-left-2 md:top-10 md:w-44 text-left"
        >
          <SwirlMark />
          <div className="mt-2 flex items-start gap-2">
            <Quote className="w-4 h-4 text-clay shrink-0 mt-1" />
            <p className="font-quote italic text-ink-soft text-sm leading-relaxed">
              {heroTestimonial.quote}
            </p>
          </div>
          <p className="mt-2 text-xs uppercase tracking-widest text-ink-soft">
            {heroTestimonial.attribution}
          </p>
        </motion.div>

        {/* portrait */}
        <motion.div
          variants={fadeUp}
          className="relative z-10 w-64 h-64 md:w-[360px] md:h-[360px]"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-clay to-sage" />
          <div className="absolute inset-4 md:inset-7 rounded-full overflow-hidden">
            <Image
              src={hero.imageUrl}
              alt={hero.name}
              fill
              className="object-cover"
              style={{ objectPosition: "50% 20%" }}
              priority
            />
          </div>

          {/* social follow bar — glass pill, centered on the portrait's bottom edge.
              Positioning lives on this plain wrapper (not the motion.div below) because
              Framer Motion drives its own inline `transform` for the fade-up animation,
              which would otherwise clobber the Tailwind `-translate-x-1/2` centering. */}
          <div className="absolute -bottom-4 md:-bottom-5 left-1/2 -translate-x-1/2">
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap w-max max-w-[95vw] items-center justify-center gap-2 bg-ink/40 backdrop-blur-md border border-white/20 rounded-full pl-2 pr-2.5 py-2 shadow-lg"
            >
              <span className="bg-canvas text-ink text-xs font-medium px-5 py-2.5 rounded-full whitespace-nowrap shrink-0">
                Follow me
              </span>
              {contact.socials.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-full bg-clay/90 flex items-center justify-center hover:bg-sage transition-colors"
                  >
                    {Icon ? (
                      <Icon className="w-4 h-4 text-canvas" />
                    ) : (
                      <span className="text-canvas text-xs font-medium">
                        {social.label.charAt(0)}
                      </span>
                    )}
                  </a>
                );
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* diamond decorative mark */}
        <motion.div
          variants={fadeUp}
          className="hidden md:block md:absolute md:right-10 md:-top-4"
        >
          <DiamondMark />
        </motion.div>

        {/* squiggle arrow + stat badge */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center md:items-start md:absolute md:right-0 md:top-28 md:w-40"
        >
          <div className="hidden md:block md:-ml-3 md:-mb-1">
            <SquiggleArrow />
          </div>
          <StatBlobBadge />
        </motion.div>
      </motion.div>
    </section>
  );
}
