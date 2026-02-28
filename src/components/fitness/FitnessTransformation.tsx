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
          Real Results
        </p>
        <h2
          id="transformation-heading"
          className="text-2xl md:text-3xl font-bold text-white text-center mb-3"
        >
          This Is What Consistency Looks Like
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-10">
          AlanTan — AM community member. Same guy. Same glasses. Different
          discipline.
        </p>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <figure className="group">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-dark-500">
              <Image
                src="/playbook/transformation-before.jpg"
                alt="AlanTan before transformation — higher body fat, softer physique"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 340px"
                priority
              />
              <span className="absolute top-3 left-3 bg-black/70 text-gray-300 text-xs font-medium px-2.5 py-1 rounded">
                Before
              </span>
            </div>
          </figure>

          <figure className="group">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-dark-500">
              <Image
                src="/playbook/transformation-after.jpg"
                alt="AlanTan after transformation — lean, defined physique with visible muscle"
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
                After
              </span>
            </div>
          </figure>
        </div>

        <p className="text-gray-500 text-center text-sm mt-6 italic">
          No shortcuts. No secrets. Just the playbook below — applied
          consistently.
        </p>
      </div>
    </section>
  );
}
