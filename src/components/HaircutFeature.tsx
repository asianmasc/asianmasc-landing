"use client";

import Image from "next/image";
import { useState } from "react";

const styles = [
  {
    src: "/community-1.webp",
    label: "Clean & Structured",
    desc: "Slicked-back undercut — sharp, professional, minimal maintenance",
  },
  {
    src: "/community-2.webp",
    label: "Soft & Natural",
    desc: "Textured fringe — relaxed, approachable, works with natural flow",
  },
  {
    src: "/community-3.webp",
    label: "Bold & Expressive",
    desc: "Highlighted texture crop — standout look with movement and contrast",
  },
];

export default function HaircutFeature() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="haircut-ai"
      aria-labelledby="haircut-feature-heading"
      className="py-24 bg-dark-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-sm font-medium mb-6">
            AI Grooming
          </div>
          <h2
            id="haircut-feature-heading"
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Find your best haircut with{" "}
            <span className="gradient-text">AI face analysis</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Not generic face-shape advice. Real corrective analysis based on
            your facial structure, matched to styles that actually work.
          </p>
        </div>

        {/* ── Visual showcase: 3 styles ────────────────────────────── */}
        <div className="mb-20">
          {/* Large active image */}
          <div className="relative max-w-md mx-auto mb-6">
            <div className="gradient-border overflow-hidden">
              <div className="relative aspect-[4/5] bg-dark-700">
                <Image
                  src={styles[activeIndex].src}
                  alt={styles[activeIndex].label}
                  fill
                  className="object-cover object-top transition-opacity duration-500"
                  sizes="(max-width: 768px) 90vw, 448px"
                  priority
                />
              </div>
            </div>
            {/* Style label overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl pointer-events-none">
              <div className="text-accent-gold text-sm font-semibold tracking-wide uppercase">
                {styles[activeIndex].label}
              </div>
              <div className="text-white/80 text-sm mt-1">
                {styles[activeIndex].desc}
              </div>
            </div>
          </div>

          {/* Thumbnail selector */}
          <div className="flex justify-center gap-4">
            {styles.map((style, i) => (
              <button
                key={style.label}
                onClick={() => setActiveIndex(i)}
                aria-label={`View ${style.label} style`}
                className={`relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  i === activeIndex
                    ? "border-accent-gold shadow-lg shadow-accent-gold/20 scale-105"
                    : "border-dark-500 opacity-60 hover:opacity-90 hover:border-dark-400"
                }`}
              >
                <Image
                  src={style.src}
                  alt={style.label}
                  fill
                  className="object-cover object-top"
                  sizes="96px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* How it works — 3 steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="gradient-border p-6">
            <div className="text-3xl mb-4">📸</div>
            <div className="text-sm text-accent-gold font-semibold mb-2">
              Step 1
            </div>
            <h3 className="text-lg font-semibold mb-2">Post your photo</h3>
            <p className="text-gray-400 text-sm">
              Drop a photo in Discord and react with ✂️. The AI analyzes your
              facial thirds, symmetry, vertical length, and jaw structure.
            </p>
          </div>

          <div className="gradient-border p-6">
            <div className="text-3xl mb-4">🪞</div>
            <div className="text-sm text-accent-gold font-semibold mb-2">
              Step 2
            </div>
            <h3 className="text-lg font-semibold mb-2">Pick your vibe</h3>
            <p className="text-gray-400 text-sm">
              Get 3 options tailored to your face — Clean &amp; Put-Together,
              Trendy &amp; Expressive, or Bold &amp; Structured. Each matched to
              real celebrity references.
            </p>
          </div>

          <div className="gradient-border p-6">
            <div className="text-3xl mb-4">💈</div>
            <div className="text-sm text-accent-gold font-semibold mb-2">
              Step 3
            </div>
            <h3 className="text-lg font-semibold mb-2">
              Walk into the barbershop ready
            </h3>
            <p className="text-gray-400 text-sm">
              Get exact barber instructions — layers, taper, top length, styling
              products — plus an AI-generated reference image of you with the
              new cut.
            </p>
          </div>
        </div>

        {/* Two-column detail */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: what the AI analyzes */}
          <div className="gradient-border p-8">
            <h3 className="text-lg font-semibold mb-5 text-white">
              What the AI actually looks at
            </h3>
            <div className="space-y-4">
              {[
                {
                  feature: "Facial Thirds",
                  rule: "Small upper third → expose forehead, don't compress it with heavy bangs",
                  color: "from-violet-500 to-indigo-500",
                },
                {
                  feature: "Symmetry",
                  rule: "Asymmetrical → textured, messy styles break up visual reference points",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  feature: "Vertical Length",
                  rule: "Long face → horizontal emphasis with volume on sides, avoid adding height",
                  color: "from-emerald-500 to-teal-500",
                },
                {
                  feature: "Jaw Structure",
                  rule: "Soft jaw → needs framing and length, buzz cuts will work against you",
                  color: "from-amber-500 to-orange-500",
                },
              ].map((item) => (
                <div key={item.feature} className="flex gap-3">
                  <div
                    className={`w-1 rounded-full bg-gradient-to-b ${item.color} shrink-0`}
                  />
                  <div>
                    <div className="text-white font-medium text-sm">
                      {item.feature}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">
                      {item.rule}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: key selling points */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Better than any{" "}
              <span className="text-gray-500">
                &ldquo;what haircut suits me&rdquo;
              </span>{" "}
              quiz
            </h3>
            <ul className="space-y-4">
              {[
                [
                  "AI-generated preview",
                  "See yourself with the new haircut before you commit — photorealistic image generation shows the exact style on your face.",
                ],
                [
                  "Celebrity matches",
                  "Matched to 20+ Asian actors and public figures with similar facial features — Park Seo-joon, Simu Liu, Dev Patel, and more.",
                ],
                [
                  "Barber-ready instructions",
                  "Exact layer count, taper level, top and side lengths, product recommendations. Show your barber the reference image and the spec sheet.",
                ],
                [
                  "Community-curated",
                  "Members vote on trending styles weekly. Top-voted references get added to the database. The recommendations get better over time.",
                ],
              ].map(([title, desc]) => (
                <li key={title} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent-gold flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div>
                    <div className="font-medium text-white">{title}</div>
                    <div className="text-sm text-gray-400 mt-0.5">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-6">
              5 free analyses per member. Earn more by voting on weekly style
              picks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
