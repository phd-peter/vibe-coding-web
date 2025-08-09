import React from "react";

const logos = [
  { src: "https://www.firecrawl.dev/logos/zapier.png", alt: "Zapier" },
  { src: "https://www.firecrawl.dev/logos/nvidia-com.png", alt: "NVIDIA" },
  { src: "https://www.firecrawl.dev/logos/carrefour-c.svg", alt: "Carrefour" },
  { src: "https://www.firecrawl.dev/logos/pwc.png", alt: "PwC" },
  { src: "https://www.firecrawl.dev/logos/shopify.png", alt: "Shopify" },
  { src: "https://www.firecrawl.dev/logos/Fanatics.png", alt: "Fanatics" },
  { src: "https://www.firecrawl.dev/logos/cyberagent-co-jp.svg", alt: "CyberAgent" },
  { src: "https://www.firecrawl.dev/logos/bain-com.svg", alt: "Bain" },
  { src: "https://www.firecrawl.dev/logos/alibaba.png", alt: "Alibaba" },
  { src: "https://www.firecrawl.dev/logos/contentful.svg", alt: "Contentful" },
  { src: "https://www.firecrawl.dev/logos/gamma.svg", alt: "Gamma" },
  { src: "https://www.firecrawl.dev/logos/stackai.svg", alt: "Stack AI" },
  { src: "https://www.firecrawl.dev/logos/teller-io.svg", alt: "Teller" },
  { src: "https://www.firecrawl.dev/logos/vendr.png", alt: "Vendr" },
  { src: "https://www.firecrawl.dev/logos/open-gov-sg.png", alt: "Open Gov" },
  { src: "https://www.firecrawl.dev/logos/openai.png", alt: "OpenAI" },
];

export default function TrustedBy() {
  return (
    <section className="w-full mt-16 sm:mt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-gray-300 text-sm uppercase tracking-wider">
            Trusted by top companies
          </h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="rounded-xl bg-white/5 border border-white/10 backdrop-blur p-4 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 sm:h-9 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}