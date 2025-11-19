import React from "react";

function WhyHome() {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 text-left">
          Why Home Visits?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 text-left">
            <p className="text-slate-800 text-lg">
              For many dogs and cats, going to a clinic is stressful. At home, they feel safe and calm — exams are smoother and kinder.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-xl">🏠</span>
                <span className="text-slate-700">Less stress — familiar, comfortable environment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🕒</span>
                <span className="text-slate-700">Saves time — no driving, no waiting rooms</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🧒</span>
                <span className="text-slate-700">Family-friendly — convenient with kids or multiple pets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🧼</span>
                <span className="text-slate-700">Hygienic — reduced exposure to contagious diseases</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-amber-100 p-6 shadow-sm">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-tr from-rose-100 to-amber-100 flex items-center justify-center text-7xl">
              🐶🐱
            </div>
            <p className="text-center text-slate-600 mt-4">
              Gentle, personalized care right where your pet feels safest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyHome;
