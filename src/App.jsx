import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TrustedBy from "./components/TrustedBy.jsx";
import Features from "./components/Features.jsx";
import Tools from "./components/Tools.jsx";
import HardStuff from "./components/HardStuff.jsx";
import UseCases from "./components/UseCases.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Pricing from "./components/Pricing.jsx";
import CTA from "./components/CTA.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <Header />
      <main className="w-full">
        <Hero />
        <TrustedBy />
        <Features />
        <Tools />
        <HardStuff />
        <UseCases />
        <Testimonials />
        <Pricing />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}