import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#tools", label: "Integrations" },
    { href: "#hard-stuff", label: "How it works" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      <div className="w-full bg-blue-600 text-white text-center text-sm py-2 px-4">
        Lovable 오픈소스로 상대방의 웹사이트 디자인을 훔쳐오세요!
        <a
          href="https://youtu.be/J3Ocsrx2b6s"
          target="_blank"
          rel="noreferrer"
          className="ml-2 underline font-semibold hover:text-gray-100 transition-colors"
        >
          지금 바로 훔쳐오는 방법!
        </a>
      </div>

      {/* Glass Nav */}
      <div className="w-full">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mt-3 rounded-2xl border border-white/10 bg-white/10 backdrop-blur supports-[backdrop-filter]:bg-white/10 shadow-lg">
            <nav className="flex items-center justify-between px-4 py-3">
              {/* Logo */}
              <a href="#" className="flex items-center gap-2 group">
                <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 shadow-md group-hover:scale-105 transition-transform"></div>
                <span className="font-bold text-white tracking-tight">개발일산</span>
              </a>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-gray-200 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#pricing"
                  className="px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  Start for free
                </a>
                <a
                  href="https://github.com/mendableai/firecrawl"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-all"
                >
                  GitHub
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all"
              >
                <svg
                  className={`h-5 w-5 transition-transform ${open ? "rotate-90" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  {open ? (
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </nav>

            {/* Mobile Nav Panel */}
            {open && (
              <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block w-full px-3 py-2 rounded-lg text-gray-100 hover:bg-white/10 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex gap-2 pt-2">
                  <a
                    href="#pricing"
                    onClick={() => setOpen(false)}
                    className="flex-1 px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Start for free
                  </a>
                  <a
                    href="https://github.com/mendableai/firecrawl"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-4 py-2 text-sm font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-all"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}