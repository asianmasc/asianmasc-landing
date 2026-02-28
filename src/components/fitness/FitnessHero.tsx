"use client";

export default function FitnessHero() {
  const stats = [
    { value: "9", label: "Chapters" },
    { value: "182K+", label: "Community Members" },
    { value: "Free", label: "No Paywall" },
  ];

  return (
    <section
      aria-labelledby="fitness-hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/75"
        aria-hidden="true"
      />
      {/* Accent glows */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "rgba(255, 107, 53, 0.15)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "rgba(255, 107, 53, 0.10)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p
          className="text-sm md:text-base tracking-[0.3em] font-medium uppercase mb-6"
          style={{ color: "#ff6b35" }}
        >
          AsianMasc Community Presents
        </p>

        <h1
          id="fitness-hero-heading"
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
        >
          <span className="text-white">tricallyourmama&apos;s</span>
          <br />
          <span style={{ color: "#ff6b35" }}>Fitness Playbook</span>
        </h1>

        <p className="text-sm md:text-base text-gray-500 mb-4">
          by Tri Nguyen
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
          Stop Guessing. Start Gaining.
        </p>
        <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Field-Tested Training, Nutrition &amp; Mindset. Straight From the AM Fitness Program.
        </p>

        {/* Stats bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mb-12 py-6 px-8 rounded-2xl mx-auto max-w-xl"
          style={{
            backgroundColor: "rgba(255, 107, 53, 0.08)",
            border: "1px solid rgba(255, 107, 53, 0.25)",
          }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div
                className="text-2xl md:text-3xl font-bold"
                style={{ color: "#ff6b35" }}
              >
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-300 tracking-wide uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <a
          href="#table-of-contents"
          className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl border transition-all duration-300"
          style={{
            backgroundColor: "rgba(255, 107, 53, 0.15)",
            borderColor: "rgba(255, 107, 53, 0.5)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "rgba(255, 107, 53, 0.3)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
              "rgba(255, 107, 53, 0.15)";
          }}
        >
          Start Reading
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>

      <div
        className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce"
        aria-hidden="true"
      >
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
