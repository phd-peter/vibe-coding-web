import React from "react";

const testimonials = [
  {
    name: "Morgan Linton",
    handle: "@morganlinton",
    href: "https://x.com/morganlinton/status/1839454165703204955",
    avatar:
      "https://www.firecrawl.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-02.4585097e.jpg&w=128&q=75",
    quote:
      "If you're coding with AI, and haven't discovered @firecrawl_dev yet, prepare to have your mind blown.",
  },
  {
    name: "Chris DeWeese",
    handle: "@ChrisDevApps",
    href: "https://x.com/ChrisDevApps/status/1853587120406876601",
    avatar:
      "https://www.firecrawl.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-09.a66dcc26.jpg&w=128&q=75",
    quote:
      "Started using @firecrawl_dev for a project, I wish I used this sooner.",
  },
  {
    name: "Bardia Pourvakil",
    handle: "@thepericulum",
    href: "https://twitter.com/thepericulum/status/1781397799487078874",
    avatar:
      "https://www.firecrawl.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-01.025350bc.jpeg&w=128&q=75",
    quote:
      "The Firecrawl team ships. I wanted types for their node SDK, and less than an hour later, I got them.",
  },
  {
    name: "Tom Reppelin",
    handle: "@TomReppelin",
    href: "https://x.com/TomReppelin/status/1844382491014201613",
    avatar:
      "https://www.firecrawl.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-04.1f2b4caf.jpg&w=128&q=75",
    quote: "I found gold today. Thank you @firecrawl_dev.",
  },
  {
    name: "latentsauce",
    handle: "@latentsauce",
    href: "https://twitter.com/latentsauce/status/1781738253927735331",
    avatar:
      "https://www.firecrawl.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-07.c2285d35.jpeg&w=128&q=75",
    quote:
      "Firecrawl simplifies data preparation significantly, exactly what I was hoping for. Thank you Firecrawl.",
  },
  {
    name: "Michael Ning",
    handle: "",
    href: "#",
    avatar:
      "https://www.firecrawl.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-05.76d7cd3e.png&w=128&q=75",
    quote:
      "Firecrawl is impressive, saving us two thirds the tokens and allowing gpt-3.5-turbo use over gpt-4. Major savings in time and money.",
  },
  {
    name: "Alex Reibman",
    handle: "@AlexReibman",
    href: "https://twitter.com/AlexReibman/status/1780299595484131836",
    avatar:
      "https://www.firecrawl.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-06.4ee7cf5a.jpeg&w=128&q=75",
    quote:
      "Moved our internal agent's web scraping tool from Apify to Firecrawl because it benchmarked significantly faster with AgentOps.",
  },
  {
    name: "Alex Fazio",
    handle: "@alxfazio",
    href: "https://x.com/alxfazio/status/1826731977283641615",
    avatar:
      "https://www.firecrawl.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-08.af684f18.jpg&w=128&q=75",
    quote: "Semantic scraping with Firecrawl is outstanding.",
  },
  {
    name: "Matt Busigin",
    handle: "@mbusigin",
    href: "https://x.com/mbusigin/status/1836065372010656069",
    avatar:
      "https://www.firecrawl.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftestimonial-03.6f60bcb9.jpg&w=128&q=75",
    quote: "Firecrawl is excellent. Congrats team.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full mt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm text-blue-300">Our Wall of Love</p>
          <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Don't take our word for it
          </h3>
        </div>

        <div className="mx-auto max-w-6xl mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <a
              key={t.name + t.handle}
              href={t.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.01] block"
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover border border-white/20"
                />
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  {t.handle && <div className="text-sm text-gray-300">{t.handle}</div>}
                </div>
              </div>
              <p className="mt-4 text-gray-100">{t.quote}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}