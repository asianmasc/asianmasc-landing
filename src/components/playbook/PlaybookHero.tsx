export default function PlaybookHero() {
  return (
    <section
      aria-labelledby="playbook-hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-red/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm md:text-base tracking-[0.3em] text-accent-gold font-medium uppercase mb-6">
          AsianMasc Community Presents
        </p>

        <h1
          id="playbook-hero-heading"
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
        >
          <span className="text-white">The BenjaminFCC</span>
          <br />
          <span className="gradient-text-shimmer">Dating Playbook</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Raw, Field-Tested Advice -- Straight to You
        </p>

        <a
          href="#table-of-contents"
          className="inline-flex items-center gap-2 px-8 py-4 bg-dark-700 hover:bg-dark-600 text-white font-semibold rounded-xl border border-dark-500 transition-all duration-300"
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
