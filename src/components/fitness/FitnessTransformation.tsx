"use client";

import Image from "next/image";

export default function FitnessTransformation() {
  return (
    <section
      aria-labelledby="transformation-heading"
      className="bg-dark-900 py-16 md:py-24"
    >
      <div className="max-w-3xl mx-auto px-6">
        <p
          className="text-sm tracking-[0.25em] uppercase font-medium text-center mb-3"
          style={{ color: "#ff6b35" }}
        >
          86 Days on Tri&apos;s Program
        </p>
        <h2
          id="transformation-heading"
          className="text-2xl md:text-3xl font-bold text-white text-center mb-3"
        >
          AlanTan Went From Invisible to Undeniable
        </h2>
        <p className="text-gray-300 text-center max-w-xl mx-auto mb-4">
          140 lbs and soft. Couldn&apos;t see the muscle he&apos;d been building for over a
          year. Then he joined Tri&apos;s program inside the AM community, ran 5/3/1
          BBB four days a week, and did the one thing most guys won&apos;t: he stayed
          consistent.
        </p>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-10">
          Three months later: 146 lbs. Chest filled out. Jawline visible. Wrist
          wraps worn through. Same guy. Completely different presence.
        </p>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <figure className="group">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-dark-500">
              <Image
                src="/playbook/transformation-before.jpg"
                alt="AlanTan before Tri's program, higher body fat, softer physique at 140 lbs"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 340px"
                priority
              />
              <span className="absolute top-3 left-3 bg-black/70 text-gray-300 text-xs font-medium px-2.5 py-1 rounded">
                Day 1
              </span>
            </div>
          </figure>

          <figure className="group">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-dark-500">
              <Image
                src="/playbook/transformation-after.jpg"
                alt="AlanTan after 86 days on Tri's program, leaner and more muscular at 146 lbs"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 340px"
                priority
              />
              <span
                className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded"
                style={{
                  backgroundColor: "rgba(255, 107, 53, 0.8)",
                  color: "#fff",
                }}
              >
                Day 86
              </span>
            </div>
          </figure>
        </div>

        {/* Stats row */}
        <div
          className="flex items-center justify-center gap-6 sm:gap-10 mt-8 py-4 px-6 rounded-xl mx-auto max-w-lg"
          style={{
            backgroundColor: "rgba(255, 107, 53, 0.06)",
            border: "1px solid rgba(255, 107, 53, 0.15)",
          }}
        >
          {[
            { value: "+6 lbs", label: "Lean Mass" },
            { value: "4x/wk", label: "Training" },
            { value: "86 days", label: "On Program" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-lg sm:text-xl font-bold"
                style={{ color: "#ff6b35" }}
              >
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 tracking-wide uppercase mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-center text-sm mt-6 italic">
          No coach fees. No meal plan subscriptions. Just the playbook below
          and a community that held him accountable.
        </p>
      </div>
    </section>
  );
}
