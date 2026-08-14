import type { Metadata } from "next";
import { Fraunces, Cormorant_Garamond, Jost } from "next/font/google";
import GrainOverlay from "@/components/GrainOverlay";
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

export const metadata: Metadata = {
  title: "Natasha Jumbo — Brand Strategist & Conference Host",
  description:
    "Portfolio of Natasha Jumbo, Brand Strategist and Conference Host, founder of NJ Creative Firm — brand work paired with hosting, moderating, and stage presence.",
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
