import type { PlaybookQuote } from "@/data/playbook-content";

export default function PlaybookBlockquote({ text, attribution }: PlaybookQuote) {
  return (
    <blockquote className="border-l-4 border-accent-gold bg-dark-700/50 rounded-r-lg px-6 py-5 my-6">
      <p className="text-gray-200 leading-relaxed whitespace-pre-line">{text}</p>
      {attribution && (
        <footer className="mt-3 text-sm text-accent-gold font-medium">
          -- {attribution}
        </footer>
      )}
    </blockquote>
  );
}
