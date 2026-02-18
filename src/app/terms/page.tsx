import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AsianMasc",
  description: "Terms of service for AsianMasc community and website.",
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-dark-900 py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-400 mb-8">Last updated: February 16, 2026</p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing asianmasc.com or joining our Discord community, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the website or community.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Community Guidelines</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our Discord community is a space for constructive discussion and mutual support. By joining, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Treat all members with respect</li>
              <li>No harassment, hate speech, or discrimination</li>
              <li>No spam, self-promotion, or solicitation without permission</li>
              <li>No illegal content or activities</li>
              <li>Follow channel-specific rules</li>
              <li>Respect the privacy of other members</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Moderation</h2>
            <p className="text-gray-300 leading-relaxed">
              Our moderation team reserves the right to remove content and ban users who violate these terms or community guidelines. Decisions are made at the discretion of the moderation team and are final.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Content</h2>
            <p className="text-gray-300 leading-relaxed">
              You retain ownership of content you post. By posting content in our community, you grant us a non-exclusive license to display that content within the community context. You are responsible for ensuring you have the right to share any content you post.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">
              This community is provided &quot;as is&quot; without warranties of any kind. Advice shared by community members is personal opinion and should not be considered professional advice. Always consult qualified professionals for financial, legal, medical, or other professional matters.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              AsianMasc and its moderators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the website or community.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
            <p className="text-gray-300 leading-relaxed">
              Our website and community may contain links to third-party websites or services. We are not responsible for the content or practices of these external sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. Continued use of the website or community after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about these terms, please reach out to the moderation team in our Discord server.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-700">
          <a href="/" className="text-accent-gold hover:text-accent-red transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
