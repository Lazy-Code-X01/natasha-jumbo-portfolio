import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme (2026-09-03, pure black per her request 2026-09-07) —
        // same green family Natasha liked, just re-tuned for contrast on a
        // dark ground: ink is the old canvas cream, now used as text on
        // near-black. clay/sage are brightened off the old deep-forest
        // values (which fail WCAG text contrast against black), but kept as
        // dark as contrast allows (~4.6:1+) per her request for a deeper
        // green than the first pass.
        canvas: "#000000",
        "canvas-deep": "#0d0d0d",
        ink: "#f2f1ea",
        "ink-soft": "#9ea79b",
        clay: "#379764",
        accent: "#379764",
        sage: "#4fae7a",
        gold: "#379764",
        "accent-2": "#379764",
        line: "rgba(242,241,234,0.14)",
        // Fixed light chip, independent of the theme — several client logo
        // marks (NJ Creative Firm, Sytiamo) are dark artwork designed for a
        // white background and would vanish on the dark canvas. Used only
        // behind those logo tiles, not part of the page's own light/dark
        // language.
        chip: "#f2f1ea",
      },
      fontFamily: {
        display: ["var(--font-fraunces)"],
        quote: ["var(--font-cormorant)"],
        sans: ["var(--font-jost)"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      maxWidth: {
        content: "1160px",
      },
    },
  },
  plugins: [],
};
export default config;
