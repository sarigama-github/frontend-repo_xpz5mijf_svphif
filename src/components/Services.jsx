import React from "react";

const services = [
  "Annual and puppy/kitten vaccinations",
  "General exams and wellness checks",
  "Preventive care: deworming, flea & tick",
  "Blood tests and lab work",
  "First aid for minor emergencies",
  "Nutrition advice and diet planning",
];

function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 text-left">
          Services
        </h2>
        <p className="text-slate-700 mb-6 text-left text-lg">
          Professional, gentle, and precise care — tailored to your pet and your home.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {services.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 p-4 rounded-xl border border-amber-100 bg-amber-50/50"
            >
              <span className="text-2xl leading-none">✅</span>
              <span className="text-slate-800 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Services;
