import React from "react";

const steps = [
  {
    title: "Quick Intro Call",
    desc: "Tell me about your furry friend, what they need, and a time that works for you.",
    icon: "📞",
  },
  {
    title: "I Come To You",
    desc: "I arrive on time with all the equipment — gentle, patient, and prepared.",
    icon: "🚗",
  },
  {
    title: "Care & Follow-up",
    desc: "Vaccinations/exam/treatment right at home, plus clear guidance and a written summary.",
    icon: "❤️",
  },
];

function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 text-left">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl border border-amber-100 bg-amber-50">
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 text-left">{s.title}</h3>
              <p className="text-slate-700 text-left">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
