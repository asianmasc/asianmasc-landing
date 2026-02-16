const testimonials = [
  {
    quote:
      "The community helped me with biz mentorship, accounting, strategy, and mental frameworks. Genuinely life-changing.",
    author: "Kevin T.",
    role: "Entrepreneur",
  },
  {
    quote:
      "No other place to build relationships with insane high level players that also share cultural roots. Some things are worth more than just monetary.",
    author: "Marcus L.",
    role: "Tech Executive",
  },
  {
    quote:
      "I'm close to my friends. I know they'll be there for me, as I am for them. I am fit and healthy! I am able to do a job that I'm really passionate about.",
    author: "James W.",
    role: "Software Engineer",
  },
  {
    quote:
      "Climbed a mountain last weekend with people I met here. This community is different.",
    author: "David C.",
    role: "Community Member",
  },
  {
    quote:
      "I've been so fortunate to have experienced incredible love from people who share my cultural roots. There's a part of me that feels like I have a legacy to build upon.",
    author: "Ryan H.",
    role: "Finance Professional",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Real Stories from{" "}
            <span className="gradient-text">Real Members</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear from guys who leveled up through the community.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`gradient-border p-6 hover-lift ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-accent-gold/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-gold to-accent-red flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
