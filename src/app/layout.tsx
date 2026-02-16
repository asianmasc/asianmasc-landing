import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AsianMasc - Brotherhood for Asian Men",
  description:
    "Join 182K+ Asian men building stronger lives together. Fitness, dating, career, business, and cultural connection. Your brotherhood awaits.",
  keywords: [
    "asian men",
    "self improvement",
    "brotherhood",
    "fitness",
    "dating",
    "career",
    "business",
    "community",
  ],
  openGraph: {
    title: "AsianMasc - Brotherhood for Asian Men",
    description:
      "Join 182K+ Asian men building stronger lives together. Fitness, dating, career, business, and cultural connection.",
    type: "website",
    url: "https://asianmasc.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "AsianMasc - Brotherhood for Asian Men",
    description:
      "Join 182K+ Asian men building stronger lives together. Fitness, dating, career, business, and cultural connection.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
