export default function FitnessFeature() {
  return (
    <section id="am-fitness" aria-labelledby="fitness-feature-heading" className="py-24 bg-dark-800">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/20 text-accent-gold text-sm font-medium mb-6">
            AM Fitness
          </div>
          <h2 id="fitness-feature-heading" className="text-3xl md:text-5xl font-bold mb-4">
            Post a screenshot.{" "}
            <span className="gradient-text">Everything logs itself.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your fitness data lives in 5 different apps. We bring it all together — automatically.
          </p>
        </div>

        {/* How it works — 3 steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="gradient-border p-6 text-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center mx-auto mb-4 text-white" aria-hidden="true">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-sm text-accent-gold font-semibold mb-2">Step 1</div>
            <h3 className="text-lg font-semibold mb-2">Post a photo in Discord</h3>
            <p className="text-gray-400 text-sm">Scale photo, gym screenshot, treadmill display, MFP summary — the bot reads it with vision AI.</p>
          </div>

          <div className="gradient-border p-6 text-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4 text-white" aria-hidden="true">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div className="text-sm text-accent-gold font-semibold mb-2">Step 2</div>
            <h3 className="text-lg font-semibold mb-2">Data logs automatically</h3>
            <p className="text-gray-400 text-sm">Weight, nutrition, workouts, cardio calories burned, sleep, steps — all captured without manual entry.</p>
          </div>

          <div className="gradient-border p-6 text-center">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-4 text-white" aria-hidden="true">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="text-sm text-accent-gold font-semibold mb-2">Step 3</div>
            <h3 className="text-lg font-semibold mb-2">Coach sees everything</h3>
            <p className="text-gray-400 text-sm">One dashboard with your full picture — weight trends, macros, workouts, streaks. Your coach adjusts your plan in real time.</p>
          </div>
        </div>

        {/* Value props */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Stop juggling{" "}
              <span className="text-gray-500">5 different apps</span>
            </h3>
            <ul className="space-y-4">
              {[
                ["All your data in one place", "Weight, nutrition, workouts, cardio, sleep, steps — captured from any app via screenshots or quick Discord commands."],
                ["Coach accountability built in", "Your coach sees your dashboard in real time. Not \"send me your screenshots\" — actual shared data."],
                ["XP and ranks keep you logging", "Earn XP for every log, hit streaks for multipliers, climb from Iron to Radiant. The gamification makes consistency addictive."],
                ["You own your data", "Export everything as CSV, Excel, or JSON anytime. No lock-in, no paywalls, no vanishing data."],
              ].map(([title, desc]) => (
                <li key={title} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent-gold flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <div className="font-medium text-white">{title}</div>
                    <div className="text-sm text-gray-400 mt-0.5">{desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="gradient-border p-8">
            <div className="space-y-4">
              <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">Program Modes</div>
              {[
                { emoji: "🔥", name: "Weight Loss", desc: "TDEE - 500 cal deficit", color: "text-orange-400" },
                { emoji: "⚖️", name: "Maintenance", desc: "Eat at TDEE, hold steady", color: "text-blue-400" },
                { emoji: "💪", name: "Hypertrophy", desc: "TDEE + surplus for muscle", color: "text-green-400" },
              ].map((mode) => (
                <div key={mode.name} className="flex items-center gap-4 p-3 rounded-lg bg-dark-900/50">
                  <span className="text-2xl">{mode.emoji}</span>
                  <div>
                    <div className={`font-semibold ${mode.color}`}>{mode.name}</div>
                    <div className="text-xs text-gray-500">{mode.desc}</div>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-dark-600">
                <a
                  href="https://train.asianmasc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-gold hover:text-accent-gold-light transition-colors text-sm font-medium"
                >
                  Open AM Fitness
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
