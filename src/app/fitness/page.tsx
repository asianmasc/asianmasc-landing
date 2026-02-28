import type { Metadata } from "next";
import { FITNESS_CHAPTERS } from "@/data/fitness-content";
import FitnessHero from "@/components/fitness/FitnessHero";
import FitnessTransformation from "@/components/fitness/FitnessTransformation";
import FitnessTableOfContents from "@/components/fitness/FitnessTableOfContents";
import FitnessPrinciples from "@/components/fitness/FitnessPrinciples";
import FitnessFinalCTA from "@/components/fitness/FitnessFinalCTA";
import PlaybookChapter from "@/components/playbook/PlaybookChapter";
import { SoftCTA, MediumCTA } from "@/components/playbook/PlaybookCTA";
import PlaybookProgressBar from "@/components/playbook/PlaybookProgressBar";
import BackToTopButton from "@/components/playbook/BackToTopButton";
import ScrollFadeIn from "@/components/playbook/ScrollFadeIn";
import PlaybookAnalytics from "@/components/playbook/PlaybookAnalytics";
import RelatedPlaybooks from "@/components/shared/RelatedPlaybooks";

export const metadata: Metadata = {
  title: "Tri's Fitness Playbook | AsianMasc",
  description:
    "Field-tested training, nutrition & mindset from Coach Tri's AM Fitness Program. 9 chapters. No BS. Free.",
  alternates: {
    canonical: "/fitness",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tri's Fitness Playbook",
    description:
      "Field-tested training, nutrition & mindset from Coach Tri's AM Fitness Program. 9 chapters. No BS. Free.",
    type: "article",
    url: "https://asianmasc.com/fitness",
    siteName: "AsianMasc",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tri's Fitness Playbook",
    description:
      "Field-tested training, nutrition & mindset from Coach Tri's AM Fitness Program. 9 chapters. No BS. Free.",
  },
};

// Chapters I-III
const firstGroup = FITNESS_CHAPTERS.slice(0, 3);
// Chapters IV-VI
const secondGroup = FITNESS_CHAPTERS.slice(3, 6);
// Chapters VII-IX
const thirdGroup = FITNESS_CHAPTERS.slice(6, 9);

const fitnessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tri's Fitness Playbook",
  description:
    "Field-tested training, nutrition & mindset from Coach Tri's AM Fitness Program. 9 chapters. No BS. Free.",
  url: "https://asianmasc.com/fitness",
  author: { "@type": "Person", name: "Coach Tri" },
  publisher: {
    "@type": "Organization",
    name: "AsianMasc",
    url: "https://asianmasc.com",
  },
  mainEntityOfPage: "https://asianmasc.com/fitness",
  about: [
    { "@type": "Thing", name: "Strength Training" },
    { "@type": "Thing", name: "Nutrition" },
    { "@type": "Thing", name: "Fitness Mindset" },
  ],
};

export default function FitnessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fitnessJsonLd) }}
      />
      <PlaybookProgressBar />
      <PlaybookAnalytics />

      <main id="main-content">
        <FitnessHero />
        <FitnessTransformation />
        <FitnessTableOfContents />

        {firstGroup.map((chapter, i) => (
          <ScrollFadeIn key={chapter.id}>
            <PlaybookChapter
              chapter={chapter}
              variant={i % 2 === 0 ? "dark-900" : "dark-800"}
            />
          </ScrollFadeIn>
        ))}

        <ScrollFadeIn>
          <SoftCTA coachName="Tri" />
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
          <FitnessPrinciples />
        </ScrollFadeIn>

        <RelatedPlaybooks currentPage="fitness" />

        <FitnessFinalCTA />

        <footer className="bg-dark-900 py-8 text-center">
          <p className="text-gray-400 text-sm">
            AsianMasc &bull; Coach Tri &bull; AM Fitness Program
          </p>
        </footer>
      </main>

      <BackToTopButton />
    </>
  );
}
