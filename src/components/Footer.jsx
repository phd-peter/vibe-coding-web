import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-10">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 shadow-md"></div>
              <span className="font-bold">Firecrawl</span>
            </div>
            <p className="mt-3 text-gray-300">
              Turn any website into LLM-ready data.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://github.com/mendableai/firecrawl"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-sm"
              >
                GitHub
              </a>
              <a
                href="#pricing"
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm"
              >
                Get Started
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-white">Product</h5>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#use-cases" className="hover:text-white">Use Cases</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white">Developers</h5>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li>
                <a
                  href="https://docs.firecrawl.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mendableai/firecrawl"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Open Source
                </a>
              </li>
              <li>
                <a
                  href="https://www.firecrawl.dev/extract#pricing"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Extract API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white">Legal</h5>
            <ul className="mt-3 space-y-2 text-gray-300">
              <li>
                <a
                  href="https://www.google.com/intl/en/policies/privacy/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/intl/en/policies/terms/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-6xl mt-8 text-xs text-gray-400">
          © {new Date().getFullYear()} Firecrawl. All rights reserved.
        </div>
      </div>
    </footer>
  );
}