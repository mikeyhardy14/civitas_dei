const CATEGORIES = [
  {
    label: "Articles",
    desc: "Written reflections and analyses from Catholic scholars, leaders, and practitioners.",
  },
  {
    label: "Talks & Videos",
    desc: "Recorded presentations and panel discussions from Civitas Dei conferences.",
  },
  {
    label: "Podcasts",
    desc: "Conversations on faith, culture, and leadership for the road, the commute, and the home.",
  },
  {
    label: "Downloads",
    desc: "Study guides, reading lists, and formation materials for personal and group use.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-white">

      {/* ─── Page header ────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-primary-soft/40">
        <div className="page-container py-12 lg:py-16">
          <div className="grid-12">
            <div className="col-span-12 space-y-4 lg:col-span-8">
              <p className="eyebrow">Resources</p>
              <h1 className="text-3xl font-bold text-[#102649] sm:text-4xl">
                Formation &amp; Resources
              </h1>
              <p className="text-base leading-relaxed text-slate-700">
                Explore talks, articles, and other resources from Civitas Dei
                gatherings, designed to support ongoing formation in faith and
                leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Resource categories ────────────────────────────────────────────── */}
      {/*
       * Layout: 12 cols
       *   Each category → col-span-12 sm:col-span-6 lg:col-span-3   (4 × 3 = 12)
       */}
      <section>
        <div className="page-container py-16 lg:py-24">
          <p className="eyebrow">Browse by Format</p>

          <div className="mt-8 grid grid-cols-12 gap-6">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.label}
                className="col-span-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:col-span-6 lg:col-span-3"
              >
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#c79a38]">
                  {cat.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
