import React from "react";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-rose-100 blur-3xl opacity-60"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-amber-200 blur-3xl opacity-60"></div>

      <div className="max-w-5xl mx-auto px-6" dir="rtl">
        <div className="flex flex-col items-center text-right">
          <span className="inline-flex items-center gap-2 text-rose-600 font-semibold mb-4">
            <span className="text-xl">🐾</span>
            <span>וטרינרית עד הבית</span>
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            ד"ר אנה מוטיקה — וטרינרית ניידת שמגיעה עד אליכם
          </h1>
          <p className="text-slate-700 text-lg md:text-xl leading-relaxed max-w-3xl">
            למדתי רפואה וטרינרית בצרפת, ומעל 10 שנים שאני מטפלת באהבה בכלבים וחתולים. אני מגיעה אליכם הביתה לחיסונים, בדיקות וטיפולים — בנחת, בלי לחץ, ובגישה רגועה שמכבדת את החיה ואת המשפחה.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#cta"
              className="inline-flex justify-center items-center rounded-xl bg-rose-600 text-white px-6 py-3 text-lg font-semibold shadow-md hover:bg-rose-700 transition"
            >
              קביעת ביקור בית
            </a>
            <a
              href="#services"
              className="inline-flex justify-center items-center rounded-xl border border-rose-200 text-rose-700 px-6 py-3 text-lg font-semibold bg-white hover:bg-rose-50 transition"
            >
              לראות שירותים
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
