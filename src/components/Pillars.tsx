const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Fitness & Health",
    description: "Training programs, nutrition advice, and accountability partners to build your strongest self.",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Dating & Relationships",
    description: "Real talk on dating, social skills, and building meaningful connections.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Career & Business",
    description: "Mentorship, job referrals, business strategy, and professional networking.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Personal Finance",
    description: "Investing, wealth building, and financial independence discussions.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cultural Identity",
    description: "Connect with your roots, share experiences, and build pride in who you are.",
    color: "from-amber-500 to-yellow-500",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" aria-labelledby="pillars-heading" className="py-24 bg-dark-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="pillars-heading" className="text-3xl md:text-5xl font-bold mb-4">
            Level Up in{" "}
            <span className="gradient-text">Every Area</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our community covers everything you need to become the best version of yourself.
          </p>
        </div>

        {/* Pillars grid */}
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none" role="list" aria-label="Community focus areas">
          {pillars.map((pillar, index) => (
            <li
              key={index}
              className="gradient-border p-6 hover-lift"
            >
              <article>
                <div 
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 text-white`}
                  aria-hidden="true"
                >
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{pillar.title}</h3>
                <p className="text-gray-400">{pillar.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
