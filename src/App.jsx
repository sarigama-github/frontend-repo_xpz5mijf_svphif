import React from "react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyHome from "./components/WhyHome";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-amber-100 bg-white/70 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🐾</span>
            <div>
              <p className="text-lg font-extrabold text-slate-900">Dr. Anna Motika</p>
              <p className="text-sm text-slate-600">Mobile Veterinarian — House Calls</p>
            </div>
          </div>
          <nav className="hidden sm:flex gap-6 text-slate-700">
            <a href="#services" className="hover:text-rose-600 transition">Services</a>
            <a href="#why" className="hover:text-rose-600 transition">Why Home Visits</a>
            <a href="#cta" className="hover:text-rose-600 transition">Book a Visit</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="why">
          <WhyHome />
        </div>
        <Services />
        <HowItWorks />
        <CTA />
      </main>

      <footer className="py-10 text-center text-slate-500">
        <p>
          Dr. Anna Motika — Mobile vet for dogs and cats. Studied veterinary medicine in France, over 10 years of experience.
        </p>
      </footer>
    </div>
  );
}

export default App;
