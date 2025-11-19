import React from "react";

// Simple hand-drawn pets background using SVG pattern
function PetsPattern() {
  return (
    <svg className="absolute inset-0 -z-0 w-full h-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="pets" width="160" height="160" patternUnits="userSpaceOnUse">
          <g fill="none" stroke="#fda4af" strokeWidth="2" strokeLinecap="round">
            <path d="M40 60c8-12 24-12 32 0 3 4 3 9 0 13-8 12-24 12-32 0-3-4-3-9 0-13z" />
            <circle cx="44" cy="50" r="3" />
            <circle cx="52" cy="44" r="3" />
            <circle cx="64" cy="44" r="3" />
            <circle cx="72" cy="50" r="3" />
          </g>
          <g fill="none" stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" transform="translate(80,80)">
            <ellipse cx="20" cy="24" rx="14" ry="10" />
            <path d="M10 16 L6 8 M30 16 L34 8" />
            <circle cx="14" cy="24" r="2" />
            <circle cx="26" cy="24" r="2" />
            <path d="M14 30 Q20 34 26 30" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pets)" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-rose-100 blur-3xl opacity-60"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-amber-200 blur-3xl opacity-60"></div>
      <PetsPattern />

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 text-rose-600 font-semibold mb-4">
            <span className="text-xl">🐾</span>
            <span>Mobile Vet — Home Visits</span>
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Dr. Anna Motika — Your Mobile Veterinarian
          </h1>
          <p className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-3xl">
            Trained in France with 10+ years of experience, I care for dogs and cats with a gentle, calm approach. I come to your home for vaccinations, check-ups, and treatments — relaxed, respectful, and stress-free for your pet and family.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#cta"
              className="inline-flex justify-center items-center rounded-xl bg-rose-600 text-white px-6 py-3 text-lg font-semibold shadow-md hover:bg-rose-700 transition"
            >
              Book a Home Visit
            </a>
            <a
              href="#services"
              className="inline-flex justify-center items-center rounded-xl border border-rose-200 text-rose-700 px-6 py-3 text-lg font-semibold bg-white hover:bg-rose-50 transition"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
