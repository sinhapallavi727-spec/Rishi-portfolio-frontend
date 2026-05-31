import type { Metadata } from "next";
import { Newsreader, Space_Grotesk, Space_Mono } from "next/font/google";
import Interactions from "@/components/Interactions";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"], style: ["normal", "italic"], weight: ["400","500","600","700"],
  variable: "--font-newsreader", display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"], weight: ["300","400","500","600","700"],
  variable: "--font-space-grotesk", display: "swap",
});
const spaceMono = Space_Mono({
  subsets: ["latin"], style: ["normal","italic"], weight: ["400","700"],
  variable: "--font-space-mono", display: "swap",
});

export const metadata: Metadata = {
  title: "Rishi Sinha — Head of Marketing · AI Strategist · Consultant",
  description: "I help businesses grow revenue through SEO, performance marketing, CRM & AI automation — turning fragmented channels into one connected, data-driven growth engine.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}>
      <body>
        {children}
        <Interactions />
      </body>
    </html>
  );
}
