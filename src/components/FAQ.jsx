import React from "react";

const faqs = [
  {
    category: "General",
    q: "What is Firecrawl?",
    a: "Firecrawl turns any website into LLM-ready data with powerful scraping, crawling, and search APIs.",
  },
  {
    category: "General",
    q: "What sites work?",
    a: "Most public websites work. Firecrawl handles dynamic content, SPAs, and media like PDFs and DOCX.",
  },
  {
    category: "General",
    q: "Is Firecrawl open-source?",
    a: "Yes. The core is developed transparently. You can use the hosted API or self-host the open-source version.",
  },
  {
    category: "Scraping & Crawling",
    q: "How does Firecrawl handle dynamic content on websites?",
    a: "It renders JavaScript, waits for content to load, and supports user-like actions such as clicking and typing.",
  },
  {
    category: "Scraping & Crawling",
    q: "Can Firecrawl crawl websites without a sitemap?",
    a: "Yes. It discovers internal links automatically and gathers clean data across subpages.",
  },
  {
    category: "API Related",
    q: "Where can I find my API key?",
    a: "Sign in to your Firecrawl account to generate and manage API keys.",
  },
  {
    category: "Billing",
    q: "Is there a pay-per-use plan?",
    a: "You can start free. Paid plans provide monthly credits and increased limits. Enterprise plans are custom.",
  },
  {
    category: "Billing",
    q: "Do credits roll over to the next month?",
    a: "Credits do not roll over unless specifically stated in your plan terms.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 w-full mt-20 mb-16">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">Frequently Asked</h3>
          <p className="mt-2 text-gray-300">
            Answers to common questions about Firecrawl.
          </p>
        </div>

        <div className="mx-auto max-w-5xl mt-8 space-y-3">
          {faqs.map((f, idx) => (
            <details
              key={idx}
              className="group rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-5"
            >
              <summary className="list-none cursor-pointer flex items-center justify-between">
                <div>
                  <div className="text-xs text-blue-300 uppercase tracking-wide">{f.category}</div>
                  <h4 className="mt-1 text-white font-semibold">{f.q}</h4>
                </div>
                <span className="ml-4 h-8 w-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-200 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-gray-200">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mx-auto max-w-5xl mt-6 text-center text-xs text-gray-400">
          Protected by reCAPTCHA.{" "}
          <a
            href="https://www.google.com/intl/en/policies/privacy/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-300"
          >
            Privacy
          </a>{" "}
          -{" "}
          <a
            href="https://www.google.com/intl/en/policies/terms/"
            target="_blank"
            rel="noreferrer"
            className="underline hover:text-gray-300"
          >
            Terms
          </a>
        </div>
      </div>
    </section>
  );
}