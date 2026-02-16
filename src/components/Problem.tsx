export default function Problem() {
  return (
    <section className="py-24 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Problem side */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-accent-red/10 border border-accent-red/20 text-accent-red text-sm font-medium mb-6">
              The Problem
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Grinding alone gets you{" "}
              <span className="text-gray-500">nowhere fast</span>
            </h2>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-accent-red flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>No one in your circle who truly gets your experience</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-accent-red flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>Figuring out fitness, dating, and career by trial and error</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-accent-red flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>Missing mentorship and accountability</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-accent-red flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span>Feeling disconnected from your cultural identity</span>
              </li>
            </ul>
          </div>

          {/* Solution side */}
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-sm font-medium mb-6">
              The Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A brotherhood that{" "}
              <span className="gradient-text">elevates everyone</span>
            </h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5"
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
                <span>Connect with men who share your cultural background and ambitions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5"
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
                <span>Learn from guys who&apos;ve already achieved what you&apos;re after</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5"
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
                <span>Stay accountable with brothers who want to see you win</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5"
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
                <span>Build a legacy you&apos;re proud of alongside your cultural roots</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
