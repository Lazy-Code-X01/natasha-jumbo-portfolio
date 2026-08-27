"use client";

import { motion } from "framer-motion";
import { contact } from "@/lib/content";
import { staggerContainer, fadeUp } from "@/lib/motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-canvas-deep px-6 md:px-10 py-24 md:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer(0.12)}
        className="max-w-content mx-auto text-center"
      >
        <motion.span
          variants={fadeUp}
          className="text-sm uppercase tracking-widest text-ink-soft"
        >
          Get in touch
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="font-display text-4xl md:text-6xl mt-4"
        >
          Let&rsquo;s build <span className="italic font-light">something</span>
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-10">
          <a
            href={contact.ctaHref}
            className="inline-flex items-center justify-center px-8 py-4 bg-clay text-canvas text-sm uppercase tracking-widest rounded-sm hover:bg-ink transition-colors"
          >
            {contact.ctaLabel}
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {contact.socials.map((social) => {
            const isExternal = !social.href.startsWith("mailto:");
            return (
              <a
                key={social.label}
                href={social.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-sm uppercase tracking-widest text-ink-soft hover:text-clay transition-colors"
              >
                {social.label}
              </a>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
