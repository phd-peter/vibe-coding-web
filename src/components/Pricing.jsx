import React from "react";

const plans = [
  {
    name: "Free",
    price: "\$0",
    period: "one-time",
    credits: "500 credits",
    bullets: [
      "Scrape 500 pages",
      "2 concurrent browsers",
      "Low rate limits",
      "No credit card required",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Hobby",
    price: "\$16",
    period: "/month",
    note: "Billed yearly — 2 months free",
    yearly: "\$190/yr",
    credits: "3,000 credits / month",
    bullets: ["Scrape 3,000 pages", "5 concurrent browsers"],
    cta: "Subscribe",
    popular: false,
  },
  {
    name: "Standard",
    tag: "Most Popular",
    price: "\$83",
    period: "/month",
    note: "Billed yearly — 2 months free",
    yearly: "\$990/yr",
    credits: "100,000 credits / month",
    bullets: [
      "Scrape 100,000 pages",
      "50 concurrent browsers",
      "Standard support",
    ],
    cta: "Subscribe",
    popular: true,
  },
  {
    name: "Growth",
    price: "\$333",
    period: "/month",
    note: "Billed yearly — 2 months free",
    yearly: "\$3990/yr",
    credits: "500,000 credits / month",
    bullets: [
      "Scrape 500,000 pages",
      "100 concurrent browsers",
      "Priority support",
    ],
    cta: "Subscribe",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 w-full mt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm text-blue-300">Transparent</p>
          <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Flexible Pricing
          </h3>
          <p className="mt-2 text-gray-300">
            Start for free, then scale as you grow.
          </p>
        </div>

        <div className="mx-auto max-w-6xl mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl backdrop-blur border border-white/20 bg-white/10 p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.01] ${
                p.popular ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {p.tag && (
                <span className="absolute -top-3 left-6 text-xs px-2 py-0.5 rounded-full bg-blue-600 border border-white/10">
                  {p.tag}
                </span>
              )}
              <h4 className="text-xl font-semibold text-white">{p.name}</h4>
              <div className="mt-2 text-gray-200">{p.credits}</div>
              <div className="mt-4">
                <span className="text-3xl font-extrabold text-white">{p.price}</span>
                <span className="text-gray-300">{p.period}</span>
              </div>
              {p.note && <div className="mt-1 text-sm text-gray-300">{p.note}</div>}
              {p.yearly && (
                <div className="text-sm text-gray-300">Yearly: {p.yearly}</div>
              )}
              <ul className="mt-4 space-y-2">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-100"
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-md hover:shadow-lg transition-all">
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-6xl mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-6">
            <h5 className="text-lg font-semibold text-white">Enterprise Plan</h5>
            <p className="mt-2 text-gray-200">
              Unlimited credits. Custom RPMs.
            </p>
            <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-100">
              <li className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">Bulk discounts</li>
              <li className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">Top priority support</li>
              <li className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">Custom concurrency limits</li>
              <li className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">Improved stealth proxies</li>
              <li className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">SLAs</li>
              <li className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">Advanced security & controls</li>
            </ul>
            <a
              href="#"
              className="mt-4 inline-block px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all"
            >
              Talk to us
            </a>
          </div>

          <div className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-6">
            <h5 className="text-lg font-semibold text-white">API Credits</h5>
            <p className="mt-2 text-gray-200">
              Credits are consumed for each API request, varying by endpoint and feature.
            </p>
            <ul className="mt-3 space-y-2 text-gray-100">
              <li className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">Scrape (/scrape): 1 per page</li>
              <li className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">Crawl (/crawl): 1 per page</li>
              <li className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">Map (/map): 1 per call</li>
              <li className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">Search (/search): 1 per result</li>
              <li className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                Extract (/extract): separate pricing
              </li>
            </ul>
            <a
              href="https://docs.firecrawl.dev/rate-limits"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block text-blue-300 hover:text-blue-200"
            >
              View rate limits →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}