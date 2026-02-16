const testimonials = [
  {
    quote:
      "Feeling blessed. Shout out to the bros that been helping me with biz this past 2 weeks: biz mentorship, accounting, strategy, and mental frameworks.",
    author: "Poopyguy125",
    role: "Entrepreneur",
    featured: true,
  },
  {
    quote:
      "No other place to build relationships with insane high level players that also share cultural roots. Some things are worth more than just monetary.",
    author: "ankimasta",
    role: "Content Creator",
    featured: false,
  },
  {
    quote:
      "Grateful for advice and help from all the guys over the past year.",
    author: "stryker",
    role: "College Student",
    featured: false,
  },
  {
    quote:
      "My situation hasn't changed much but I'm not depressed anymore. Now it's good time for progress.",
    author: "CinnabarFrosch",
    role: "Community Member",
    featured: false,
  },
  {
    quote:
      "I've been so fortunate to have experienced incredible love from people who share my cultural roots. There's a part of me that feels like I have a legacy to build upon.",
    author: "CoilConductor",
    role: "Software Engineer",
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="py-24 bg-dark-900"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-bold mb-4">
            Real Stories from{" "}
            <span className="gradient-text">Real Members</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear from guys who leveled up through the community.
          </p>
        </div>

        {/* Testimonials grid */}
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 list-none" role="list" aria-label="Member testimonials">
          {testimonials.map((testimonial, index) => (
            <li
              key={index}
              className={`gradient-border p-6 hover-lift ${
                testimonial.featured ? "lg:col-span-2" : ""
              }`}
            >
              <figure>
                {/* Quote icon */}
                <svg
                  className="w-10 h-10 text-accent-gold/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                
                <blockquote className="text-gray-300 text-lg mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                
                <figcaption className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-gold to-accent-red flex items-center justify-center text-white font-bold"
                    aria-hidden="true"
                  >
                    {testimonial.author.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
