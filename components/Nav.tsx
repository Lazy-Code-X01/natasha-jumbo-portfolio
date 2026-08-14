"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav } from "@/lib/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Frosted scrim behind the floating pill — without this, page content
          scrolls right up to the pill's edge with no transition. Fades out
          via mask-image so it blends into the page instead of cutting off. */}
      <div
        aria-hidden="true"
        className="fixed top-0 inset-x-0 h-28 md:h-32 z-40 pointer-events-none backdrop-blur-md bg-canvas/40 [mask-image:linear-gradient(to_bottom,black,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]"
      />

      <header className="fixed top-4 md:top-6 inset-x-4 md:inset-x-10 z-50">
        <div className="max-w-content mx-auto flex items-center justify-between gap-4 rounded-full border border-line bg-canvas/90 backdrop-blur-sm shadow-sm px-3 md:px-4 py-2">
          <a href="#top" className="flex items-center gap-2 md:gap-3 shrink-0">
            <span className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-clay text-canvas font-display text-lg">
              N
            </span>
            <span className="font-display text-base md:text-xl tracking-tight text-ink">
              {nav.logo}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-3 text-sm">
            {nav.links.map((link, i) => (
              <span key={link.href} className="flex items-center gap-3">
                <a
                  href={link.href}
                  className="uppercase tracking-widest text-ink-soft hover:text-clay transition-colors"
                >
                  {link.label}
                </a>
                {i < nav.links.length - 1 && (
                  <span className="text-line" aria-hidden="true">
                    /
                  </span>
                )}
              </span>
            ))}
          </nav>

          <a
            href={nav.cta.href}
            className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-clay text-canvas text-sm uppercase tracking-widest px-4 md:px-5 py-2.5 hover:bg-ink transition-colors shrink-0"
          >
            {nav.cta.label}
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="md:hidden flex items-center justify-center w-9 h-9"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-2 overflow-hidden rounded-3xl border border-line bg-canvas shadow-sm"
            >
              <div className="flex flex-col px-6 py-6 gap-5">
                {nav.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm uppercase tracking-widest text-ink-soft hover:text-clay transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={nav.cta.href}
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-1.5 justify-center rounded-full bg-clay text-canvas text-sm uppercase tracking-widest px-5 py-3"
                >
                  {nav.cta.label}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
