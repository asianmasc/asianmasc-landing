import Link from "next/link";

interface RelatedPlaybook {
  href: string;
  label: string;
  subtitle: string;
  chapters: number;
  accent: string; // tailwind color class for border/text
}

const PLAYBOOKS: RelatedPlaybook[] = [
  {
    href: "/fitness",
    label: "Tri's Fitness Playbook",
    subtitle: "Training, nutrition & mindset — 9 chapters, no BS.",
    chapters: 9,
    accent: "orange",
  },
  {
    href: "/playbook",
    label: "The BenjaminFCC Dating Playbook",
    subtitle: "Field-tested dating strategies across 10 chapters.",
    chapters: 10,
    accent: "gold",
  },
];

interface Props {
  currentPage: "fitness" | "playbook";
}

export default function RelatedPlaybooks({ currentPage }: Props) {
  const others = PLAYBOOKS.filter((p) =>
    currentPage === "fitness" ? p.href !== "/fitness" : p.href !== "/playbook"
  );

  return (
    <nav
      aria-label="More AsianMasc playbooks"
      className="bg-dark-900 py-16 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-6 text-center font-medium">
          Also from AsianMasc
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          {others.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex-1 block rounded-xl border border-white/10 hover:border-white/25 bg-dark-800 hover:bg-dark-700 px-6 py-5 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-gold"
              aria-label={`Read ${item.label} — ${item.subtitle}`}
            >
              <p
                className={`text-xs uppercase tracking-widest font-semibold mb-1 ${
                  item.accent === "orange"
                    ? "text-[#ff6b35]"
                    : "text-accent-gold"
                }`}
              >
                {item.chapters} Chapters · Free
              </p>
              <p className="text-white font-bold text-base mb-1 group-hover:underline underline-offset-4 decoration-white/30">
                {item.label}
              </p>
              <p className="text-gray-400 text-sm leading-snug">
                {item.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
