import type { Metadata } from "next";
import { PLAYBOOK_CHAPTERS } from "@/data/playbook-content";
import PlaybookHero from "@/components/playbook/PlaybookHero";
import PlaybookTableOfContents from "@/components/playbook/PlaybookTableOfContents";
import PlaybookChapter from "@/components/playbook/PlaybookChapter";
import PlaybookPrinciples from "@/components/playbook/PlaybookPrinciples";
import { SoftCTA, MediumCTA } from "@/components/playbook/PlaybookCTA";
import PlaybookFinalCTA from "@/components/playbook/PlaybookFinalCTA";
import PlaybookProgressBar from "@/components/playbook/PlaybookProgressBar";
import BackToTopButton from "@/components/playbook/BackToTopButton";
import ScrollFadeIn from "@/components/playbook/ScrollFadeIn";
import PlaybookAnalytics from "@/components/playbook/PlaybookAnalytics";

export const metadata: Metadata = {
  title: "The BenjaminFCC Dating Playbook | AsianMasc",
  description:
    "My raw, field-tested dating advice -- straight to you. 10 chapters covering looks, mindset, cold approach, dates, and more.",
  alternates: {
    canonical: "/playbook",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "The BenjaminFCC Dating Playbook",
    description:
      "My raw, field-tested dating advice -- straight to you. 10 chapters of real, actionable advice.",
    type: "article",
    url: "https://asianmasc.com/playbook",
    siteName: "AsianMasc",
  },
  twitter: {
    card: "summary_large_image",
    title: "The BenjaminFCC Dating Playbook",
    description:
      "My raw, field-tested dating advice -- straight to you. 10 chapters of real, actionable advice.",
  },
};

// Chapters I-IV (before soft CTA)
const firstGroup = PLAYBOOK_CHAPTERS.slice(0, 4);
// Chapters V-VII (before medium CTA)
const secondGroup = PLAYBOOK_CHAPTERS.slice(4, 7);
// Chapters VIII-X (before principles + final CTA)
const thirdGroup = PLAYBOOK_CHAPTERS.slice(7, 10);

export default function PlaybookPage() {
  return (
    <>
      <PlaybookProgressBar />
      <PlaybookAnalytics />

      <main id="main-content">
        <PlaybookHero />
        <PlaybookTableOfContents />

        {firstGroup.map((chapter, i) => (
          <ScrollFadeIn key={chapter.id}>
            <PlaybookChapter
              chapter={chapter}
              variant={i % 2 === 0 ? "dark-900" : "dark-800"}
            />
          </ScrollFadeIn>
        ))}

        <ScrollFadeIn>
          <SoftCTA />
        </ScrollFadeIn>

        {secondGroup.map((chapter, i) => (
          <ScrollFadeIn key={chapter.id}>
            <PlaybookChapter
              chapter={chapter}
              variant={i % 2 === 0 ? "dark-900" : "dark-800"}
            />
          </ScrollFadeIn>
        ))}

        <ScrollFadeIn>
          <MediumCTA />
        </ScrollFadeIn>

        {thirdGroup.map((chapter, i) => (
          <ScrollFadeIn key={chapter.id}>
            <PlaybookChapter
              chapter={chapter}
              variant={i % 2 === 0 ? "dark-900" : "dark-800"}
            />
          </ScrollFadeIn>
        ))}

        <ScrollFadeIn>
          <PlaybookPrinciples />
        </ScrollFadeIn>

        <PlaybookFinalCTA />

        <footer className="bg-dark-900 py-8 text-center">
          <p className="text-gray-500 text-sm">
            AsianMasc &bull; BenjaminFCC &bull; #dating channel
          </p>
        </footer>
      </main>

      <BackToTopButton />
    </>
  );
}
