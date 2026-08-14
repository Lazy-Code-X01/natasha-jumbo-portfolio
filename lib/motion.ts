import type { Variants } from "framer-motion";

// Shared Framer Motion variants — kept centralized so section reveals stay
// consistent without every component redefining the same easing/timing.

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const staggerContainer = (staggerDelay = 0.12): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: staggerDelay },
  },
});

export const scrollFadeUpProps = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, amount: 0.3 },
  variants: fadeUp,
};
