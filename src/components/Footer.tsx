export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-dark-900 border-t border-dark-700" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold gradient-text">AsianMasc</span>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm list-none">
              <li>
                <a
                  href="https://discord.gg/asianmasc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Join our Discord server (opens in new tab)"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            <small>© {currentYear} AsianMasc. All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
