import type { Metadata } from "next";
import {
  Fraunces,
  Cormorant_Garamond,
  Jost,
  JetBrains_Mono,
} from "next/font/google";
import GrainOverlay from "@/components/GrainOverlay";
import { getBaseUrl } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: "variable",
  style: ["normal"],
  variable: "--font-jost",
  display: "swap",
});

// Techy accent (2026-09-06) — used only for small uppercase "eyebrow"
// labels, tags, and nav links, never body copy or headings, so the
// editorial serif/display voice stays intact.
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const title = "Natasha Jumbo | Brand Strategist & Conference Host";
const description =
  "Portfolio of Natasha Jumbo, Brand Strategist and Conference Host, founder of NJ Creative Firm. Brand work paired with hosting, moderating, and stage presence.";

// f_auto: serves WebP/AVIF to browsers that support it, falls back to the
// source format otherwise. q_auto: automatic quality/size optimization.
// w_1200,h_630,c_fill: locks to the standard OG image size regardless of
// the source file's exact aspect ratio.
const ogImageUrl =
  "https://res.cloudinary.com/dioiyb833/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1787834066/nat-og_wbhse3.png";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImageUrl],
  },
};

// Runs before paint (blocking, in <head>) so the page never flashes the
// wrong theme while React hydrates. Storage key must match THEME_STORAGE_KEY
// in lib/theme.ts and ThemeToggle.tsx. suppressHydrationWarning on <html> is
// required since this script sets an attribute the server-rendered markup
// doesn't have — otherwise React logs a (harmless but noisy) mismatch.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("natasha-portfolio-theme");
    if (stored === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${fraunces.variable} ${cormorant.variable} ${jost.variable} ${jetbrainsMono.variable} bg-canvas text-ink antialiased`}
      >
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
