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
          19 Months. 27 lbs Lost.
        </p>
        <h2
          id="transformation-heading"
          className="text-2xl md:text-3xl font-bold text-white text-center mb-3"
        >
          Same Guy. 19 Months Apart.
        </h2>
        <p className="text-gray-300 text-center max-w-xl mx-auto mb-4">
          Two years away from the gym. 173 lbs. Needed 100 lbs of assist
          just to do a pull-up. Most people would have stayed on the couch.
          Alan showed up to the AM fitness thread in July 2024 and logged
          every single day since.
        </p>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-10">
          19 months later he&apos;s at 146 lbs, running 5/3/1 BBB, and the chest
          and jawline tell the whole story. Fat to fit. Alan became a Chang.
        </p>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <figure className="group">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-dark-500">
              <Image
                src="/playbook/transformation-before.jpg"
                alt="AlanTan at 173 lbs, higher body fat, softer physique before rejoining the gym"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 340px"
                priority
              />
              <span className="absolute top-3 left-3 bg-black/70 text-gray-300 text-xs font-medium px-2.5 py-1 rounded">
                July 2024
              </span>
            </div>
          </figure>

          <figure className="group">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-dark-500">
              <Image
                src="/playbook/transformation-after.jpg"
                alt="AlanTan at 146 lbs after 19 months, leaner with visible muscle definition"
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
                Feb 2026
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
            { value: "-27 lbs", label: "173 → 146" },
            { value: "19 mo", label: "Consistent" },
            { value: "Daily", label: "Logged" },
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
