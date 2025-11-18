import React from "react";

function CTA() {
  return (
    <section id="cta" className="py-16 bg-gradient-to-br from-rose-50 via-amber-50 to-white" dir="rtl">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl border border-rose-200 bg-white/80 backdrop-blur p-8 md:p-10 text-right">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            אשמח להגיע אליכם — נקבע ביקור בית?
          </h2>
          <p className="text-slate-700 mb-6 text-lg">
            מוזמנים להשאיר פרטים או ליצור קשר בוואטסאפ. מחכה להכיר את החבר/ה הכי פרוותי/ת במשפחה.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-end">
            <a
              href="tel:+972501234567"
              className="inline-flex items-center justify-center rounded-xl bg-rose-600 text-white px-6 py-3 text-lg font-semibold shadow-md hover:bg-rose-700 transition"
            >
              ☎️ התקשרו עכשיו
            </a>
            <a
              href="https://wa.me/972501234567"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 text-white px-6 py-3 text-lg font-semibold shadow-md hover:bg-emerald-700 transition"
            >
              💬 שלחו הודעת וואטסאפ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
