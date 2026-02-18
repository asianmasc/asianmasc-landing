import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | AsianMasc",
  description: "Cookie policy for AsianMasc website.",
  alternates: {
    canonical: "/cookies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Cookies() {
  return (
    <main className="min-h-screen bg-dark-900 py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <p className="text-gray-400 mb-8">Last updated: February 16, 2026</p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how you interact with the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies and similar technologies to understand how visitors use our website. This helps us improve the user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Analytics Services</h2>
            
            <h3 className="text-xl font-medium mb-3 mt-6">Plausible Analytics</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use Plausible Analytics, a privacy-friendly analytics service. Plausible does not use cookies and does not collect personal data. It only collects aggregated data such as page views, referral sources, and device types. Learn more at{" "}
              <a 
                href="https://plausible.io/privacy-focused-web-analytics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-accent-gold hover:text-accent-red"
              >
                plausible.io
              </a>.
            </p>

            <h3 className="text-xl font-medium mb-3 mt-6">Future Analytics (If Added)</h3>
            <p className="text-gray-300 leading-relaxed">
              We may add additional analytics services in the future (such as Google Analytics or Microsoft Clarity). If we do, this policy will be updated and you will be notified. These services may use cookies to collect information about your browsing behavior.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>View what cookies are stored on your device</li>
              <li>Delete cookies selectively or all at once</li>
              <li>Block cookies from specific or all websites</li>
              <li>Set your browser to notify you when cookies are set</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Note that blocking all cookies may affect functionality on some websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              When you click through to Discord or other external services linked from our website, those services may set their own cookies according to their own policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this cookie policy when we add or change analytics services. The &quot;Last updated&quot; date at the top will reflect the most recent changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about cookies on this website, please reach out through our Discord server.
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
