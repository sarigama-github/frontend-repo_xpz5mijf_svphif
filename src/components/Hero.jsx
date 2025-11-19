import React from "react";

function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-16"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,251,235,0.8), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1800&q=60')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Soft glow accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-rose-100 blur-3xl opacity-40"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-amber-200 blur-3xl opacity-40"></div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="mx-auto flex flex-col items-center text-center">
          <div className="backdrop-blur-sm bg-white/80 border border-white/50 shadow-xl rounded-2xl p-6 md:p-8 w-full md:w-auto">
            <span className="inline-flex items-center gap-2 text-rose-600 font-semibold mb-4">
              <span className="text-xl">🐾</span>
              <span>Mobile Vet — Home Visits</span>
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
              Dr. Anna Motika — Your Mobile Veterinarian
            </h1>
            <p className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-3xl">
              Trained in France with 10+ years of experience, I care for dogs and cats with a gentle, calm approach. I come to your home for vaccinations, check-ups, and treatments — relaxed, respectful, and stress-free for your pet and family.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
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
      </div>
    </section>
  );
}

export default Hero;
