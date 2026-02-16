import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MEMBER_COUNT_DISPLAY } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const description = `Join ${MEMBER_COUNT_DISPLAY} Asian men leveling up together. Fitness, dating, career, business, and culture. Free to join.`;
const shortDescription = `Join ${MEMBER_COUNT_DISPLAY} Asian men leveling up together. Fitness, dating, career, business, and culture.`;

export const metadata: Metadata = {
  title: "AsianMasc, The Online Community for Asian Men",
  description,
  keywords: [
    "asian men",
    "self improvement",
    "community",
    "fitness",
    "dating",
    "career",
    "business",
    "discord",
  ],
  openGraph: {
    title: "AsianMasc, The Online Community for Asian Men",
    description: shortDescription,
    type: "website",
    url: "https://asianmasc.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AsianMasc, The Online Community for Asian Men",
    description: shortDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Plausible Analytics (self-hosted) */}
        <script
          defer
          data-domain="asianmasc.com"
          src="https://analytics.wuxiamaxxing.com/js/script.file-downloads.hash.outbound-links.pageview-props.tagged-events.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
