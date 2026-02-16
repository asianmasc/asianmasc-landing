import SubredditStats from "./SubredditStats";

const stats = [
  {
    value: "subreddit",
    label: "Members",
    description: "r/asianmasculinity community",
  },
  {
    value: "24/7",
    label: "Active",
    description: "Global community always online",
  },
  {
    value: "100+",
    label: "Cities",
    description: "Local meetups worldwide",
  },
  {
    value: "Free",
    label: "To Join",
    description: "No paywall. Ever.",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-dark-800 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-red/5 via-transparent to-accent-gold/5" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value === "subreddit" ? <SubredditStats /> : stat.value}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
