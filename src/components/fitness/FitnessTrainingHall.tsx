import Image from "next/image";

export default function FitnessTrainingHall() {
  return (
    <section
      aria-labelledby="training-hall-heading"
      className="bg-dark-900 py-16 md:py-24"
    >
      <div className="max-w-3xl mx-auto px-6">
        <p
          className="text-sm tracking-[0.25em] uppercase font-medium text-center mb-3"
          style={{ color: "#ff6b35" }}
        >
          Free for Members
        </p>
        <h2
          id="training-hall-heading"
          className="text-2xl md:text-3xl font-bold text-white text-center mb-3"
        >
          AsianMasc Built You a Dashboard
        </h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto mb-10">
          Every AM member gets free access to{" "}
          <a
            href="https://train.asianmasc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
            style={{ color: "#ff6b35" }}
          >
            Training Hall
          </a>
          , our custom-built app for tracking calories, macros, body
          weight, and training streaks. The same tool members used during group
          cuts with AlanTan and the AM Fitness crew.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <figure className="group">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-dark-500">
              <Image
                src="/playbook/training-hall-dashboard.png"
                alt="AM Training Hall dashboard showing streak counter, weight tracking, daily calorie and macro breakdown"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 340px"
              />
            </div>
            <figcaption className="text-gray-500 text-xs mt-2 text-center">
              Daily dashboard: calories, protein, and streak at a glance
            </figcaption>
          </figure>

          <figure className="group">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-dark-500">
              <Image
                src="/playbook/training-hall-progress.png"
                alt="AM Training Hall weekly summary showing energy balance, macro averages, and 90-day weight progress chart"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 340px"
              />
            </div>
            <figcaption className="text-gray-500 text-xs mt-2 text-center">
              Weekly trends: energy balance and weight progress over time
            </figcaption>
          </figure>
        </div>

        <p className="text-gray-500 text-center text-sm mt-8 italic max-w-lg mx-auto">
          Track the work. See the results. No paid subscriptions, no ads. Just
          a tool built by the community, for the community.
        </p>
      </div>
    </section>
  );
}
