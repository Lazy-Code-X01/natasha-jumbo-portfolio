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
        canvas: "#f2f1ea",
        "canvas-deep": "#e7e5da",
        ink: "#111512",
        "ink-soft": "#4b524c",
        clay: "#1e5c3d",
        accent: "#1e5c3d",
        sage: "#3f7a54",
        gold: "#2a7a4f",
        "accent-2": "#2a7a4f",
        line: "rgba(17,21,18,0.14)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)"],
        quote: ["var(--font-cormorant)"],
        sans: ["var(--font-jost)"],
      },
      maxWidth: {
        content: "1160px",
      },
    },
  },
  plugins: [],
};
export default config;
