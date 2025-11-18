import React from "react";

const steps = [
  {
    title: "שיחת היכרות קצרה",
    desc: "מספרים לי על החבר/ה הפרוותי/ת, הצורך הרפואי והזמן שנוח לכם.",
    icon: "📞",
  },
  {
    title: "הגעה עד הבית",
    desc: "אני מגיעה בזמן שנקבע עם כל הציוד הדרוש, בעדינות ובסבלנות.",
    icon: "🚗",
  },
  {
    title: "טיפול וליווי",
    desc: "חיסונים/בדיקה/טיפול במקום, והנחיות ברורות להמשך ודיווח מסודר.",
    icon: "❤️",
  },
];

function HowItWorks() {
  return (
    <section className="py-16 bg-white" dir="rtl">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 text-right">
          איך זה עובד?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl border border-amber-100 bg-amber-50">
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 text-right">{s.title}</h3>
              <p className="text-slate-700 text-right">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
