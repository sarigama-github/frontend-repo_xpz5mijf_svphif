import React from "react";

function WhyHome() {
  return (
    <section className="py-16 bg-amber-50" dir="rtl">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 text-right">
          למה טיפול בבית עדיף?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 text-right">
            <p className="text-slate-800 text-lg">
              עבור הרבה כלבים וחתולים, היציאה מהבית למרפאה היא חוויה מלחיצה. בבית הם רגועים יותר, והבדיקה נעשית בשקט ובקצב שלהם.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-xl">🏠</span>
                <span className="text-slate-700">פחות סטרס — סביבה מוכרת ונעימה לחיית המחמד</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🕒</span>
                <span className="text-slate-700">חוסך זמן — בלי נסיעות ותורים</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🧒</span>
                <span className="text-slate-700">נוח למשפחות — במיוחד עם ילדים או כמה חיות בבית</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🧼</span>
                <span className="text-slate-700">היגיינה ובטיחות — פחות חשיפה למחלות מדבקות</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white border border-amber-100 p-6 shadow-sm">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-tr from-rose-100 to-amber-100 flex items-center justify-center text-7xl">
              🐶🐱
            </div>
            <p className="text-center text-slate-600 mt-4">
              טיפול עדין ומותאם לכלב ולחתול שלכם, במקום שבו הם מרגישים הכי בטוח.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyHome;
