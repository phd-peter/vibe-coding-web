import React from "react";

const tools = [
  {
    name: "LlamaIndex",
    href:
      "https://docs.llamaindex.ai/en/stable/examples/data_connectors/WebPageDemo/#using-firecrawl-reader/",
    src: "https://www.firecrawl.dev/logos/llamaindex.svg",
  },
  {
    name: "LangChain",
    href:
      "https://python.langchain.com/v0.2/docs/integrations/document_loaders/firecrawl/",
    src: "https://www.firecrawl.dev/integrations/langchain.png",
  },
  {
    name: "Dify",
    href: "https://dify.ai/blog/dify-ai-blog-integrated-with-firecrawl/",
    src: "https://www.firecrawl.dev/logos/dify.png",
  },
  {
    name: "LangFlow",
    href: "https://www.langflow.org/",
    src: "https://www.firecrawl.dev/integrations/langflow_2.png",
  },
  {
    name: "Flowise",
    href: "https://flowiseai.com/",
    src: "https://www.firecrawl.dev/integrations/flowise.png",
  },
  {
    name: "CrewAI",
    href: "https://crewai.com/",
    src: "https://www.firecrawl.dev/integrations/crewai.png",
  },
  {
    name: "Camel AI",
    href:
      "https://docs.camel-ai.org/cookbooks/ingest_data_from_websites_with_Firecrawl.html",
    src: "https://www.firecrawl.dev/integrations/camel-ai.png",
  },
];

export default function Tools() {
  return (
    <section id="tools" className="scroll-mt-24 w-full mt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Use well-known tools
          </h3>
          <p className="mt-2 text-gray-300">
            Already fully integrated with the greatest existing tools and workflows.
          </p>
        </div>
        <div className="mx-auto max-w-6xl mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((t) => (
            <a
              key={t.name}
              href={t.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur p-4 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <img
                src={t.src}
                alt={t.name}
                className="h-8 sm:h-10 w-auto opacity-90"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}