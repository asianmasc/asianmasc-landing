import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AsianMasc - Online Community for Asian Men",
  description:
    "Join 182K+ Asian men leveling up together. Fitness, dating, career, business, and culture. Free to join.",
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
    title: "AsianMasc - Online Community for Asian Men",
    description:
      "Join 182K+ Asian men leveling up together. Fitness, dating, career, business, and culture.",
    type: "website",
    url: "https://asianmasc.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AsianMasc - Online Community for Asian Men",
    description:
      "Join 182K+ Asian men leveling up together. Fitness, dating, career, business, and culture.",
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
          src="https://analytics.wuxiamaxxing.com/js/script.js"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
