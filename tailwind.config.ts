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
        // Theme switcher (2026-09-10) — these read live CSS variables (see
        // globals.css) instead of fixed hex, so a single className works in
        // both themes. rgb(var(...) / <alpha-value>) is Tailwind's
        // documented pattern for CSS-var colors that still support opacity
        // modifiers (bg-canvas/90, border-clay/30, etc.) — plain hex/rgba
        // strings don't. Dark is the default theme; light is the original
        // pre-dark-mode palette (2026-09-03).
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
        "canvas-deep": "rgb(var(--color-canvas-deep) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        "ink-soft": "rgb(var(--color-ink-soft) / <alpha-value>)",
        clay: "rgb(var(--color-clay) / <alpha-value>)",
        accent: "rgb(var(--color-clay) / <alpha-value>)",
        sage: "rgb(var(--color-sage) / <alpha-value>)",
        gold: "rgb(var(--color-clay) / <alpha-value>)",
        "accent-2": "rgb(var(--color-clay) / <alpha-value>)",
        line: "rgb(var(--color-line) / 0.14)",
        // Fixed light chip, independent of the theme — several client logo
        // marks (NJ Creative Firm, Sytiamo) are dark artwork designed for a
        // white background and would vanish on a dark canvas. Used only
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
