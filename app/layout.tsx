import type { Metadata } from "next";
import { Fraunces, Cormorant_Garamond, Jost } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${cormorant.variable} ${jost.variable} bg-canvas text-ink antialiased`}
      >
        <GrainOverlay />
        {children}
      </body>
    </html>
  );
}
