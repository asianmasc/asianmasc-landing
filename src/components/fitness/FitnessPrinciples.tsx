import { FITNESS_PRINCIPLES } from "@/data/fitness-content";

export default function FitnessPrinciples() {
  return (
    <section
      className="bg-dark-800 py-16 md:py-24"
      aria-labelledby="fitness-principles-heading"
    >
      <div className="max-w-3xl mx-auto px-6">
        <div className="gradient-border p-8 md:p-12">
          <h2
            id="fitness-principles-heading"
            className="text-2xl md:text-3xl font-bold text-center mb-10"
          >
            <span className="text-white">13 Rules</span>
            <span style={{ color: "#ff6b35" }}> (Summarized)</span>
          </h2>

          <div className="space-y-6">
            {FITNESS_PRINCIPLES.map((principle, i) => (
              <div key={i}>
                <h3 className="font-semibold mb-1" style={{ color: "#ff6b35" }}>
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
          Compiled from Coach Tri&apos;s guidance in the #am-fitness channel of the
          AsianMasc Discord. All quotes preserve his authentic voice.
        </p>
      </div>
    </section>
  );
}
