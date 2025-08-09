import React from "react";

export default function HardStuff() {
  return (
    <section id="hard-stuff" className="scroll-mt-24 w-full mt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm text-blue-300">Zero Configuration</p>
          <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            We handle the hard stuff
          </h3>
          <p className="mt-3 text-gray-300">
            Rotating proxies, orchestration, rate limits, JavaScript-blocked content and more.
          </p>
        </div>

        <div className="mx-auto max-w-6xl mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-6 shadow-xl hover:shadow-2xl transition-shadow">
            <h4 className="text-xl font-semibold text-white">Crawling</h4>
            <p className="mt-2 text-gray-200">
              Gather clean data from all accessible subpages, even without a sitemap.
            </p>
            <pre className="mt-4 bg-gray-900/60 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{`<html>
  <body>
    <h1>Firecrawl</h1>
    <p>Extract web data for LLMs</p>
    <h2>Installation</h2>
    <pre>npm install @mendable/firecrawl-js</pre>
  </body>
</html>`}</code>
            </pre>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-200">
              <li className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">Rotating proxies</li>
              <li className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">Smart rate limits</li>
              <li className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">JS & SPA support</li>
              <li className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">Caching</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-6 shadow-xl hover:shadow-2xl transition-shadow">
            <h4 className="text-xl font-semibold text-white">Dynamic Content</h4>
            <p className="mt-2 text-gray-200">
              Firecrawl handles JavaScript, SPAs, and dynamic content loading with minimal configuration.
            </p>
            <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/40">
              <img
                src="https://www.firecrawl.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdynamic-content.472074be.png&w=1920&q=75"
                alt="Dynamic content example code"
                className="w-full h-auto"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-200">
                Smart wait
              </div>
              <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-200">
                Actions: click, scroll, type
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl mt-6 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 backdrop-blur p-6 text-center">
          <p className="text-gray-100">
            Reliability first. Firecrawl is designed to scale with your needs.
          </p>
        </div>
      </div>
    </section>
  );
}