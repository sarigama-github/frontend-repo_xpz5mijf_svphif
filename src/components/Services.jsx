import React from "react";

const services = [
  "חיסונים שנתיים וגורים",
  "בדיקות כלליות והערכת מצב בריאותי",
  "טיפולים מונעים: תולעים, פרעושים וקרציות",
  "בדיקות דם ושילוח למעבדה",
  "טיפול ראשוני במצבי חירום קלים",
  "ייעוץ תזונתי והתאמת תזונה",
];

function Services() {
  return (
    <section id="services" className="py-16 bg-white" dir="rtl">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 text-right">
          שירותים עיקריים
        </h2>
        <p className="text-slate-700 mb-6 text-right text-lg">
          אני מציעה טיפול מקצועי, עדין ומדויק — מותאם אישית לבעל החיים ולבית שלכם.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-right">
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
