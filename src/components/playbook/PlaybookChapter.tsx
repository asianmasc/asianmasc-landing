import Image from "next/image";
import type { PlaybookChapter as ChapterData } from "@/data/playbook-content";
import PlaybookBlockquote from "./PlaybookBlockquote";

interface Props {
  chapter: ChapterData;
  variant?: "dark-900" | "dark-800";
}

export default function PlaybookChapter({ chapter, variant = "dark-900" }: Props) {
  const bg = variant === "dark-900" ? "bg-dark-900" : "bg-dark-800";

  return (
    <section id={chapter.id} className={`${bg} py-16 md:py-24`} aria-labelledby={`heading-${chapter.id}`}>
      <div className="max-w-3xl mx-auto px-6">
        <h2
          id={`heading-${chapter.id}`}
          className="text-2xl md:text-3xl font-bold mb-2"
        >
          <span className="gradient-text">
            Chapter {chapter.number}
          </span>
          <span className="text-white"> . {chapter.title}</span>
        </h2>
        <div className="h-0.5 w-24 bg-gradient-to-r from-accent-gold to-accent-gold/0 mb-10" aria-hidden="true" />

        {chapter.sections.map((section, i) => (
          <div key={i} className="mb-8 last:mb-0">
            {section.heading && (
              <h3 className="text-lg font-semibold text-white mt-10 mb-4">
                {section.heading}
              </h3>
            )}
            {section.paragraphs.map((p, j) => (
              <p key={j} className="text-gray-300 leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {section.quotes.map((quote, k) => (
              <PlaybookBlockquote key={k} {...quote} />
            ))}
            {section.images && section.images.length > 0 && (
              <div
                className={`mt-8 mb-2 grid gap-5 ${
                  section.images.length === 1
                    ? "grid-cols-1 max-w-md mx-auto"
                    : section.images.length === 2
                      ? "grid-cols-1 sm:grid-cols-2"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                }`}
              >
                {section.images.map((img, m) => (
                  <figure key={m} className="group">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-dark-500 hover:border-accent-gold/30 transition-colors duration-300">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="mt-2.5 text-xs text-gray-400 text-center leading-relaxed">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
