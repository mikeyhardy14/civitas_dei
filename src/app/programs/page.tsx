const PROGRAM_TRACKS = [
  {
    audience: "For Clergy",
    title: "Priests & Seminarians",
    desc: "Retreats and study opportunities that provide rest, fraternity, and theological renewal for those entrusted with the care of souls.",
  },
  {
    audience: "For Lay Leaders",
    title: "Executives, founders, and philanthropists",
    desc: "Formation that integrates faith, leadership, and stewardship for those shaping culture and institutions.",
  },
  {
    audience: "For Apostolates",
    title: "Ministries & initiatives",
    desc: "Gathering apostolic leaders to share best practices, encourage collaboration, and discern new responses to the needs of the Church.",
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-white">

      {/* ─── Page header ────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-primary-soft/40">
        <div className="page-container py-12 lg:py-16">
          <div className="grid-12">
            <div className="col-span-12 space-y-4 lg:col-span-8">
              <p className="eyebrow">Programs</p>
              <h1 className="text-3xl font-bold text-[#102649] sm:text-4xl">
                Programs &amp; Formation
              </h1>
              <p className="text-base leading-relaxed text-slate-700">
                Civitas Dei offers conferences, retreats, pilgrimages, and ongoing
                formation opportunities designed to sustain Catholic leaders in
                their vocations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Program tracks ─────────────────────────────────────────────────── */}
      {/*
       * Layout: 12 cols
       *   Each track card → col-span-12 lg:col-span-4   (3 × 4 = 12)
       */}
      <section>
        <div className="page-container py-16 lg:py-24">
          <p className="eyebrow">Formation Tracks</p>

          <div className="mt-8 grid grid-cols-12 gap-6">
            {PROGRAM_TRACKS.map((track) => (
              <div
                key={track.audience}
                className="col-span-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:col-span-4"
              >
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#c79a38]">
                  {track.audience}
                </p>
                <h2 className="mt-3 text-base font-bold text-[#102649]">
                  {track.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  {track.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
