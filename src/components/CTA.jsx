import React from "react";

export default function CTA() {
  return (
    <section id="cta" className="w-full mt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white/10 border border-white/20 backdrop-blur p-8 sm:p-10 text-center shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Build?
          </h3>
          <p className="mt-2 text-gray-200">
            Start scraping web data for your AI apps today. No credit card needed.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#pricing"
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Get Started
            </a>
            <a
              href="https://github.com/mendableai/firecrawl"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold border border-white/20 transition-all"
            >
              Check out our repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}