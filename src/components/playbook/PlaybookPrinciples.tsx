import { KEY_PRINCIPLES } from "@/data/playbook-content";

export default function PlaybookPrinciples() {
  return (
    <section
      className="bg-dark-800 py-16 md:py-24"
      aria-labelledby="principles-heading"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="gradient-border p-8 md:p-12">
          <h2
            id="principles-heading"
            className="text-2xl md:text-3xl font-bold text-center mb-10"
          >
            <span className="gradient-text">Key Principles</span>
            <span className="text-white"> (Summarized)</span>
          </h2>

          <div className="space-y-6">
            {KEY_PRINCIPLES.map((principle, i) => (
              <div key={i}>
                <h3 className="text-accent-gold font-semibold mb-1">
                  {principle.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-10 max-w-xl mx-auto leading-relaxed">
          Compiled from BenjaminFCC&apos;s posts in the #dating channel of the
          AsianMasc Discord. All quotes preserve his authentic voice.
        </p>
      </div>
    </section>
  );
}
