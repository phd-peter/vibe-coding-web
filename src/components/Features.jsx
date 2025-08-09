import React from "react";

const cards = [
  {
    title: "Scrape",
    desc: "Get LLM-ready data from websites. Markdown, JSON, screenshot, and more.",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    title: "Crawl",
    desc: "Crawl all the pages on a website and get data for each page.",
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Search",
    desc: "Search the web and get full content from results.",
    badge: "New",
    accent: "from-emerald-500 to-teal-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 w-full mt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm text-blue-300">Developer first</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Start scraping tonight
          </h2>
          <p className="mt-3 text-gray-300">
            Enhance your apps with industry leading web scraping and crawling capabilities.
          </p>
        </div>

        <div className="mx-auto max-w-6xl mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-6 shadow-xl hover:shadow-2xl transition-all"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${c.accent} opacity-0 group-hover:opacity-10 transition-opacity`} />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold text-white">{c.title}</h3>
                  {c.badge && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-600/80 border border-white/10">
                      {c.badge}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-gray-200">{c.desc}</p>
                <div className="mt-4 h-px bg-white/10" />
                {c.title === "Scrape" && (
                  <pre className="mt-4 bg-gray-900/60 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{`// npm install @mendable/firecrawl-js
import FirecrawlApp from '@mendable/firecrawl-js';

const app = new FirecrawlApp({ apiKey: "fc-YOUR_API_KEY" });
await app.scrapeUrl('firecrawl.dev');`}</code>
                  </pre>
                )}
                {c.title === "Crawl" && (
                  <pre className="mt-4 bg-gray-900/60 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{`// Crawl a domain
await app.crawlUrl('https://example.com', { limit: 100 });`}</code>
                  </pre>
                )}
                {c.title === "Search" && (
                  <pre className="mt-4 bg-gray-900/60 text-gray-100 p-4 rounded-lg overflow-x-auto">
                    <code>{`// Search the web
const results = await app.search('best llm web scrapers');`}</code>
                  </pre>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}