export default function DonatePage() {
  return (
    <div className="bg-white">

      {/* ─── Page header ────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-primary-soft/40">
        <div className="page-container py-12 lg:py-16">
          <div className="grid-12">
            <div className="col-span-12 space-y-4 lg:col-span-8">
              <p className="eyebrow">Support Us</p>
              <h1 className="text-3xl font-bold text-[#102649] sm:text-4xl">
                Invest in Civitas Dei
              </h1>
              <p className="text-base leading-relaxed text-slate-700">
                Your generosity sustains the liturgical, intellectual, and communal
                life at the heart of Civitas Dei&apos;s mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Giving section ─────────────────────────────────────────────────── */}
      {/*
       * Layout: 12 cols
       *   Impact copy    → col-span-12 lg:col-span-7
       *   Donation panel → col-span-12 lg:col-span-5
       */}
      <section>
        <div className="page-container py-16 lg:py-24">
          <div className="grid-12 items-start">

            {/* Impact copy */}
            <div className="col-span-12 space-y-6 lg:col-span-7">
              <div className="space-y-4">
                <p className="eyebrow">Impact of your gift</p>
                <h2 className="text-2xl font-bold text-[#102649] sm:text-3xl">
                  Every gift builds the City of God.
                </h2>
              </div>

              <ul className="space-y-4">
                {[
                  "Provide scholarships for priests, seminarians, and lay leaders.",
                  "Underwrite conferences, retreats, and pilgrimages.",
                  "Support the creation and distribution of formation resources.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 shrink-0 text-[#c79a38]">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Donation panel */}
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#c79a38]">
                  Online giving
                </p>
                <p className="mt-3 text-sm font-semibold text-[#102649]">
                  Secure donation form
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  This is a placeholder for your secure donation form. Integrate
                  your preferred giving platform here (e.g. ParishSOFT, PayPal,
                  Stripe, or another Catholic-friendly provider).
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
