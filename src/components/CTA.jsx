import React from "react";

function CTA() {
  return (
    <section id="cta" className="py-16 bg-gradient-to-br from-rose-50 via-amber-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl border border-rose-200 bg-white/80 backdrop-blur p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
            I’d love to meet your pet — shall we book a home visit?
          </h2>
          <p className="text-slate-700 mb-6 text-lg">
            Leave your details or contact me on WhatsApp. I can’t wait to meet your furry family member.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
            <a
              href="tel:+972501234567"
              className="inline-flex items-center justify-center rounded-xl bg-rose-600 text-white px-6 py-3 text-lg font-semibold shadow-md hover:bg-rose-700 transition"
            >
              ☎️ Call Now
            </a>
            <a
              href="https://wa.me/972501234567"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 text-white px-6 py-3 text-lg font-semibold shadow-md hover:bg-emerald-700 transition"
            >
              💬 WhatsApp Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
