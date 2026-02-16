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
  metadataBase: new URL("https://asianmasc.com"),
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AsianMasc, The Online Community for Asian Men",
    description: shortDescription,
    type: "website",
    url: "https://asianmasc.com",
    siteName: "AsianMasc",
    // Image auto-generated from opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "AsianMasc, The Online Community for Asian Men",
    description: shortDescription,
    // Image auto-generated from twitter-image.tsx
  },
  robots: {
    index: true,
    follow: true,
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AsianMasc",
  url: "https://asianmasc.com",
  logo: "https://asianmasc.com/favicon.ico",
  description: "The largest online community for Asian men focused on self-improvement, fitness, dating, career, and cultural identity.",
  sameAs: [
    "https://discord.gg/asianmasc",
    "https://reddit.com/r/asianmasculinity",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
