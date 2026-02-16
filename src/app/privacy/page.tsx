export default function Privacy() {
  return (
    <main className="min-h-screen bg-dark-900 py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: February 16, 2026</p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              AsianMasc (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates asianmasc.com. This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              This website is a static landing page that links to our Discord community. We do not directly collect personal information through this website.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When you join our Discord server, Discord&apos;s privacy policy applies. We recommend reviewing Discord&apos;s privacy policy at discord.com/privacy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies and Analytics</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use Plausible Analytics, a privacy-friendly service that does not use cookies or collect personal data. It only gathers aggregated, anonymous statistics about page views and traffic sources.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For more details, see our <a href="/cookies" className="text-accent-gold hover:text-accent-red">Cookie Policy</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-gray-300 leading-relaxed">
              This website links to Discord. When you click to join our community, you will be redirected to Discord, which is governed by their own privacy policy and terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Discord Community Data</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Within our Discord server, we may collect and store:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Messages you post in public channels</li>
              <li>Your Discord username and user ID</li>
              <li>Information you voluntarily share in introductions or conversations</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              This information is used solely to operate and moderate the community. We do not sell your data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              Messages in our Discord server are retained according to Discord&apos;s policies. You can delete your own messages at any time. If you leave the server, your messages may remain unless you delete them beforehand.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              You have the right to request access to, correction of, or deletion of your personal information. Contact us through Discord to make such requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this privacy policy from time to time. We will notify community members of significant changes through our Discord server.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about this privacy policy, please reach out to the moderation team in our Discord server.
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
