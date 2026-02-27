"use client";

import { PLAYBOOK_CHAPTERS } from "@/data/playbook-content";

export default function PlaybookTableOfContents() {
  function scrollToChapter(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    // Force the ScrollFadeIn wrapper visible immediately so content
    // isn't opacity-0 when the browser scrolls to it
    const wrapper = el.parentElement;
    if (wrapper) {
      wrapper.style.opacity = "1";
      wrapper.style.transform = "translateY(0)";
    }

    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <section
      id="table-of-contents"
      className="bg-dark-800 py-16 md:py-24"
      aria-labelledby="toc-heading"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="gradient-border p-8 md:p-12">
          <h2
            id="toc-heading"
            className="text-sm tracking-[0.3em] text-accent-gold font-medium uppercase text-center mb-8"
          >
            Chapters
          </h2>
          <nav aria-label="Table of contents">
            <ol className="space-y-3">
              {PLAYBOOK_CHAPTERS.map((chapter) => (
                <li key={chapter.id}>
                  <a
                    href={`#${chapter.id}`}
                    onClick={(e) => scrollToChapter(e, chapter.id)}
                    className="flex items-baseline gap-4 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <span className="text-accent-gold font-medium shrink-0 w-10 text-right">
                      {chapter.number}.
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {chapter.title}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
