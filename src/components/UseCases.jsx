import React from "react";

const cases = [
  {
    title: "AI Chats",
    desc:
      "Power your AI assistants with real-time, accurate web content.",
    cta: { label: "View docs", href: "https://docs.firecrawl.dev/" },
  },
  {
    title: "Lead Enrichment",
    desc: "Enhance your sales data with web information.",
  },
  {
    title: "MCPs",
    desc: "Add powerful scraping to your code editors.",
  },
  {
    title: "AI Platforms",
    desc: "Let your customers build AI apps with web data.",
  },
  {
    title: "Deep Research",
    desc: "Extract comprehensive information for in-depth research.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-24 w-full mt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Transform web data into AI-powered solutions
          </h3>
          <p className="mt-2 text-gray-300">
            Discover how Firecrawl customers are getting the most out of our API.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl mt-10">
          <div className="absolute inset-0 rounded-3xl bg-[url('https://www.firecrawl.dev/use-cases/bg.jpg')] bg-cover bg-center opacity-10 pointer-events-none"></div>
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((u) => (
              <div
                key={u.title}
                className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.01]"
              >
                <h4 className="text-xl font-semibold text-white">{u.title}</h4>
                <p className="mt-2 text-gray-200">{u.desc}</p>
                {u.cta && (
                  <a
                    href={u.cta.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200"
                  >
                    {u.cta.label}
                    <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}