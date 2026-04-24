const UPCOMING_EVENTS = [
  {
    name: "Annual Civitas Dei Conference",
    date: "July 22–26, 2026",
    location: "Napa, California",
    description:
      "Multi-day conference with liturgy, teaching, and fellowship for Catholic leaders and apostolates.",
  },
  {
    name: "Faith & Business Gathering",
    date: "October 13–14, 2026",
    location: "Napa, California",
    description:
      "Exploring how Catholic social teaching informs leadership, entrepreneurship, and stewardship.",
  },
];

export default function EventsPage() {
  return (
    <div className="bg-white">

      {/* ─── Page header ────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-primary-soft/40">
        <div className="page-container py-12 lg:py-16">
          <div className="grid-12">
            <div className="col-span-12 space-y-4 lg:col-span-8">
              <p className="eyebrow">Events</p>
              <h1 className="text-3xl font-bold text-[#102649] sm:text-4xl">
                Gatherings &amp; Conferences
              </h1>
              <p className="text-base leading-relaxed text-slate-700">
                Throughout the year, Civitas Dei hosts conferences, retreats, and
                special gatherings that bring together Catholic leaders for prayer,
                study, and friendship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Upcoming events ────────────────────────────────────────────────── */}
      {/*
       * Layout: 12 cols
       *   Each card → col-span-12 md:col-span-6
       */}
      <section>
        <div className="page-container py-16 lg:py-24">
          <p className="eyebrow">Upcoming Events</p>

          <div className="mt-8 grid grid-cols-12 gap-6">
            {UPCOMING_EVENTS.map((event) => (
              <div
                key={event.name}
                className="col-span-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:col-span-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#c79a38]">
                  {event.date}
                </p>
                <h2 className="mt-3 text-lg font-bold text-[#102649]">
                  {event.name}
                </h2>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  {event.location}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-700">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
