import Link from "next/link";

const OFFERINGS = [
  "Dedicated tracks for clergy at major conferences.",
  "Priest-only retreats for rest, prayer, and fraternity.",
  "Opportunities to connect with brother priests and lay collaborators.",
];

export default function ForPriestsPage() {
  return (
    <div className="bg-white">

      {/* ─── Page header ────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-primary-soft/40">
        <div className="page-container py-12 lg:py-16">
          <div className="grid-12">
            <div className="col-span-12 space-y-4 lg:col-span-8">
              <p className="eyebrow">For Priests</p>
              <h1 className="text-3xl font-bold text-[#102649] sm:text-4xl">
                A home for priests and seminarians
              </h1>
              <p className="text-base leading-relaxed text-slate-700">
                Civitas Dei exists to support the hearts and ministry of priests and
                future priests through liturgy, fraternity, and formation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Offerings ──────────────────────────────────────────────────────── */}
      {/*
       * Layout: 12 cols
       *   Offerings list → col-span-12 lg:col-span-6
       *   Contact panel  → col-span-12 lg:col-span-6
       */}
      <section>
        <div className="page-container py-16 lg:py-24">
          <div className="grid-12 items-start">

            <div className="col-span-12 space-y-6 lg:col-span-6">
              <div className="space-y-4">
                <p className="eyebrow">What we offer</p>
                <h2 className="text-2xl font-bold text-[#102649] sm:text-3xl">
                  Renewal for those who give their lives to Christ&apos;s flock.
                </h2>
              </div>

              <ul className="space-y-4">
                {OFFERINGS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 shrink-0 text-[#c79a38]">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <p className="eyebrow">Get in touch</p>
                <p className="mt-4 text-base leading-relaxed text-slate-700">
                  To learn more about opportunities for priests and seminarians or
                  to inquire about sponsorship, please contact us through the
                  form on our Contact page and a member of our team will follow
                  up with you personally.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center rounded-full bg-[#102649] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-900"
                >
                  Contact us
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
