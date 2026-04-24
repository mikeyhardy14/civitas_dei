import Link from "next/link";

const UPCOMING_EVENTS = [
  {
    name: "Annual Civitas Dei Conference",
    date: "July 22–26, 2026",
    location: "Napa, California",
    url: "/events",
  },
  {
    name: "Faith & Public Life Forum",
    date: "October 13–14, 2026",
    location: "Washington, D.C.",
    url: "/events",
  },
];

const TOPICS = [
  {
    name: "Catholics in Culture",
    desc: "How Catholics can bring truth and beauty into media, arts, and public institutions.",
  },
  {
    name: "Challenges Facing the Church",
    desc: "Navigating the theological, pastoral, and institutional questions of our moment.",
  },
  {
    name: "Faith & Public Life",
    desc: "Carrying the light of the Gospel into governance, law, and civic engagement.",
  },
  {
    name: "Principled Entrepreneurship",
    desc: "Building businesses and apostolates that serve the human person and the common good.",
  },
  {
    name: "Sacred Scripture & Tradition",
    desc: "Grounding leadership and culture in the perennial wisdom of the Church.",
  },
  {
    name: "Protection of Human Life",
    desc: "Defending life at every stage and advocating for a culture of dignity.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Civitas Dei has emerged as a leading force in shaping the future of the Catholic Church. There is simply nothing like it.",
    name: "A Catholic Bishop",
    role: "Diocese of the United States",
  },
  {
    quote:
      "A unique and unparalleled opportunity to meet, engage, and befriend key Catholic leaders united by love of Christ and his Church.",
    name: "A Founding Leader",
    role: "National Catholic Apostolate",
  },
  {
    quote:
      "Truly a home away from home—a place of intellectual challenge, deep prayer, and lasting friendships built on fidelity to the Gospel.",
    name: "A Catholic Scholar",
    role: "University Professor",
  },
];

const PILLARS = [
  {
    label: "Liturgy",
    desc: "Eucharistic worship at the heart of every gathering, shaping leaders from the altar outward.",
  },
  {
    label: "Formation",
    desc: "World-class teaching in theology, culture, and leadership for today's challenges.",
  },
  {
    label: "Community",
    desc: "Friendships and networks that sustain faithful mission over a lifetime.",
  },
];

export default function Home() {
  return (
    <div className="bg-background">

      {/* ─── Hero ─────────────────────────────────────────────────────────────── */}
      {/*
       * Layout: 12 cols
       *   Left  → col-span-12 lg:col-span-7   headline + CTAs + pillars
       *   Right → col-span-12 lg:col-span-5   upcoming events card
       */}
      <section
        style={{ background: "linear-gradient(160deg, #0d1f3c 0%, #1c3052 60%, #e6edf7 100%)" }}
        className="border-b border-slate-200"
      >
        <div className="page-container py-16 lg:py-24">
          <div className="grid-12 items-center">

            {/* Left: headline + CTAs */}
            <div className="col-span-12 space-y-6 lg:col-span-7">
              <p className="eyebrow-light">
                Renew the Church. Transform the Culture.
              </p>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white lg:text-5xl">
                Building up the City of God in the heart of the world.
              </h1>

              <p className="max-w-lg text-base leading-relaxed text-slate-200/90">
                Civitas Dei gathers Catholic leaders, clergy, and apostolates to
                deepen their life in Christ and bring the light of the Gospel into
                every corner of culture—through liturgy, formation, and
                friendship.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/programs"
                  className="inline-flex items-center rounded-full bg-[#c79a38] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#b0882e]"
                >
                  Experience Civitas Dei
                </Link>
                <Link
                  href="/donate"
                  className="inline-flex items-center rounded-full border border-amber-200/50 px-6 py-3 text-sm font-semibold text-amber-50 transition hover:bg-white/10"
                >
                  Support Our Mission
                </Link>
              </div>

              {/* Pillars */}
              <div className="flex flex-wrap gap-2 pt-2">
                {PILLARS.map((p) => (
                  <span
                    key={p.label}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80"
                  >
                    {p.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: upcoming events card */}
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl bg-white/10 p-6 shadow-lg ring-1 ring-white/10 backdrop-blur-sm">
                <h2 className="text-sm font-semibold text-amber-200">
                  Upcoming gatherings
                </h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-200/70">
                  Join Catholic leaders, clergy, and families for prayer, study, and
                  fellowship.
                </p>

                <div className="mt-6 space-y-4">
                  {UPCOMING_EVENTS.map((event) => (
                    <div
                      key={event.name}
                      className="rounded-xl bg-white/10 p-4 ring-1 ring-white/10"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300">
                        {event.date}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white">
                        {event.name}
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        {event.location}
                      </p>
                      <Link
                        href={event.url}
                        className="mt-3 inline-flex text-xs font-semibold text-amber-200 transition hover:text-amber-100"
                      >
                        Learn more →
                      </Link>
                    </div>
                  ))}
                </div>

                <Link
                  href="/events"
                  className="mt-4 inline-flex text-xs font-semibold text-slate-200 transition hover:text-white"
                >
                  View all events →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Our Why / Mission ────────────────────────────────────────────────── */}
      {/*
       * Layout: 12 cols
       *   Left  → col-span-12 lg:col-span-7   mission copy + pillars grid
       *   Right → col-span-12 lg:col-span-5   "who we serve" panel
       */}
      <section className="border-b border-slate-200 bg-white">
        <div className="page-container py-16 lg:py-24">
          <div className="grid-12 items-start">

            {/* Left: mission */}
            <div className="col-span-12 space-y-6 lg:col-span-7">
              <div className="space-y-4">
                <p className="eyebrow">Our Why</p>
                <h2 className="text-3xl font-bold text-[#102649] lg:text-4xl">
                  Building up the Church on earth.
                </h2>
                <p className="text-base leading-relaxed text-slate-700">
                  The world is hungry for truth, beauty, and goodness. Civitas Dei
                  exists to form and accompany Catholic leaders who can bring the
                  wisdom of the Church into the cultural, economic, and civic spaces
                  they inhabit.
                </p>
                <p className="text-base leading-relaxed text-slate-700">
                  Rooted in the sacred liturgy, serious intellectual formation, and
                  deep fraternity, we help priests, lay leaders, and apostolates
                  live their vocations with courage, clarity, and joy.
                </p>
              </div>

              {/* Pillars — 3-up grid inside the 7-col column */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {PILLARS.map((p) => (
                  <div
                    key={p.label}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-wide text-[#102649]">
                      {p.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex text-sm font-semibold text-[#102649] transition hover:text-slate-900"
              >
                Learn more about Civitas Dei →
              </Link>
            </div>

            {/* Right: who we serve */}
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl border border-[#e6edf7] bg-[#e6edf7]/60 p-8 shadow-sm">
                <p className="eyebrow">Who we serve</p>
                <ul className="mt-6 space-y-4 text-sm text-slate-800">
                  {[
                    "Bishops, priests, and seminarians.",
                    "Catholic executives, entrepreneurs, and philanthropists.",
                    "Founders and leaders of apostolates and ministries.",
                    "Scholars, educators, and cultural creatives.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 shrink-0 text-[#c79a38]">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm leading-relaxed text-slate-600">
                  Whether you serve in the sanctuary, the boardroom, or the public
                  square, Civitas Dei is a home where your vocation is understood
                  and strengthened.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Experience Civitas Dei ───────────────────────────────────────────── */}
      {/*
       * Layout: 12 cols
       *   Intro   → col-span-12 lg:col-span-8   section heading block
       *   4 cards → col-span-12 sm:col-span-6 lg:col-span-3   (4 × 3 = 12)
       */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="page-container py-16 lg:py-24">

          {/* Section intro */}
          <div className="grid-12">
            <div className="col-span-12 space-y-4 lg:col-span-8">
              <p className="eyebrow">Experience Civitas Dei</p>
              <h2 className="text-3xl font-bold text-[#102649] lg:text-4xl">
                Formation, friendship, and mission—anchored in the heart of the Church.
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                From high-level conferences to intimate retreats, immersive
                pilgrimages, and online resources, Civitas Dei offers multiple
                entry points into a deeper life of faith and service.
              </p>
            </div>
          </div>

          {/* 4-column card grid */}
          <div className="mt-12 grid grid-cols-12 gap-6">
            {[
              {
                label: "Conferences",
                desc: "Multi-day gatherings with prayer, liturgy, and talks from leading Catholic voices.",
                href: "/events",
                cta: "View upcoming →",
              },
              {
                label: "Retreats & Pilgrimages",
                desc: "Time set apart for silence, beauty, and renewal in sacred places.",
                href: "/programs",
                cta: "Explore programs →",
              },
              {
                label: "Formation",
                desc: "Ongoing intellectual, spiritual, and pastoral formation tailored to leaders.",
                href: "/resources",
                cta: "Browse resources →",
              },
              {
                label: "Community",
                desc: "A network of friendships and collaboration for mission in the world.",
                href: "/contact",
                cta: "Connect with us →",
              },
            ].map((card) => (
              <div
                key={card.label}
                className="col-span-12 flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-6 lg:col-span-3"
              >
                <p className="text-[11px] font-bold uppercase tracking-wide text-[#102649]">
                  {card.label}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                  {card.desc}
                </p>
                <Link
                  href={card.href}
                  className="mt-6 text-sm font-semibold text-[#102649] transition hover:text-slate-900"
                >
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/events"
              className="inline-flex items-center rounded-full bg-[#102649] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-900"
            >
              Register for an event
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center rounded-full border border-[#102649]/20 bg-white px-6 py-3 text-sm font-semibold text-[#102649] shadow-sm transition hover:border-[#102649]/40"
            >
              Explore all programs
            </Link>
          </div>

        </div>
      </section>

      {/* ─── Key Topics ───────────────────────────────────────────────────────── */}
      {/*
       * Layout: 12 cols
       *   Intro      → col-span-12 lg:col-span-8
       *   6 topics   → col-span-12 sm:col-span-6 lg:col-span-4   (3 per row × 2)
       */}
      <section className="border-b border-slate-200 bg-white">
        <div className="page-container py-16 lg:py-24">

          {/* Section intro */}
          <div className="grid-12">
            <div className="col-span-12 space-y-4 lg:col-span-8">
              <p className="eyebrow">Facing Catholics Today</p>
              <h2 className="text-3xl font-bold text-[#102649] lg:text-4xl">
                Bringing the Gospel into the pressing questions of our age.
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Civitas Dei helps leaders speak, act, and serve at the
                intersection of faith and culture—with clarity, charity, and
                fidelity to the Church.
              </p>
            </div>
          </div>

          {/* 6-topic grid: 3 cols × 2 rows */}
          <div className="mt-12 grid grid-cols-12 gap-6">
            {TOPICS.map((topic) => (
              <div
                key={topic.name}
                className="group col-span-12 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-[#102649]/30 hover:bg-[#e6edf7]/40 sm:col-span-6 lg:col-span-4"
              >
                <p className="font-semibold text-[#102649]">{topic.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {topic.desc}
                </p>
                <Link
                  href="/resources"
                  className="mt-4 inline-flex text-xs font-semibold text-[#102649] opacity-0 transition group-hover:opacity-100"
                >
                  Explore resources →
                </Link>
              </div>
            ))}
          </div>

          <Link
            href="/resources"
            className="mt-8 inline-flex text-sm font-semibold text-[#102649] transition hover:text-slate-900"
          >
            Explore all topics →
          </Link>

        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────────────────────── */}
      {/*
       * Layout: 12 cols
       *   Header        → col-span-12   centered
       *   3 testimonials → col-span-12 md:col-span-4   (3 × 4 = 12)
       */}
      <section className="border-b border-slate-200 bg-[#102649]">
        <div className="page-container py-16 lg:py-24">

          {/* Centered heading */}
          <div className="grid-12">
            <div className="col-span-12 space-y-3 text-center">
              <p className="eyebrow-light">What our friends are saying</p>
              <h2 className="text-3xl font-bold text-white lg:text-4xl">
                A community of leaders, formed in Christ.
              </h2>
            </div>
          </div>

          {/* 3 testimonial cards */}
          <div className="mt-12 grid grid-cols-12 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="col-span-12 flex flex-col rounded-2xl bg-white/10 p-6 ring-1 ring-white/10 md:col-span-4"
              >
                <span className="text-4xl leading-none text-amber-300/60">&ldquo;</span>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-100">
                  {t.quote}
                </p>
                <div className="mt-8 border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="mt-1 text-xs text-slate-300">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── Support Us ───────────────────────────────────────────────────────── */}
      {/*
       * Layout: 12 cols
       *   Left  → col-span-12 lg:col-span-7   copy + CTAs
       *   Right → col-span-12 lg:col-span-5   pull-quote card
       */}
      <section className="border-b border-slate-200 bg-[#e6edf7]/50">
        <div className="page-container py-16 lg:py-24">
          <div className="grid-12 items-center">

            {/* Left: copy */}
            <div className="col-span-12 space-y-6 lg:col-span-7">
              <div className="space-y-4">
                <p className="eyebrow">Support Us</p>
                <h2 className="text-3xl font-bold text-[#102649] lg:text-4xl">
                  Invest in the future of the Church.
                </h2>
                <p className="text-base leading-relaxed text-slate-700">
                  Your generosity supports priests and religious, provides
                  scholarships for leaders who could not otherwise attend, and
                  sustains the year-round work of formation and accompaniment.
                </p>
              </div>

              <ul className="space-y-3 text-sm text-slate-700">
                {[
                  "Sponsor a priest or seminarian to attend a conference.",
                  "Underwrite a formation initiative or regional gathering.",
                  "Partner with us in long-term mission through monthly giving.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 text-[#c79a38]">✦</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/donate"
                  className="inline-flex items-center rounded-full bg-[#102649] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-900"
                >
                  Donate now
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-[#102649]/20 bg-white px-6 py-3 text-sm font-semibold text-[#102649] shadow-sm transition hover:border-[#102649]/40"
                >
                  Discuss a partnership
                </Link>
              </div>
            </div>

            {/* Right: pull-quote */}
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <span className="text-4xl leading-none text-[#c79a38]/40">&ldquo;</span>
                <p className="mt-2 text-base font-medium leading-relaxed text-slate-800">
                  In a confusing and changing world, only Christ can reroute us
                  back to truth, beauty, and purpose.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  Civitas Dei seeks to be a stable home for that encounter—where
                  leaders are renewed in Christ and sent back into the world with
                  deeper conviction and hope.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Newsletter / Join ────────────────────────────────────────────────── */}
      {/*
       * Layout: 12 cols
       *   Content → col-span-12 md:col-span-8 md:col-start-3   centered
       */}
      <section className="bg-white">
        <div className="page-container py-16 lg:py-24">
          <div className="grid-12">
            <div className="col-span-12 space-y-4 text-center md:col-span-8 md:col-start-3">
              <p className="eyebrow">Join our community</p>
              <h2 className="text-2xl font-bold text-[#102649] sm:text-3xl">
                Stay informed. Stay formed.
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Receive updates on formation opportunities, upcoming events, and
                new resources — and join a community of Catholic leaders dedicated
                to the renewal of the Church.
              </p>

              <form className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="w-full rounded-full border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#102649] focus:outline-none focus:ring-2 focus:ring-[#102649]/20 sm:max-w-xs"
                />
                <button
                  type="submit"
                  className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-[#102649] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-900 sm:w-auto"
                >
                  Sign up
                </button>
              </form>

              <p className="text-xs text-slate-400">
                No spam. Unsubscribe at any time. See our{" "}
                <Link href="/privacy" className="underline hover:text-slate-600">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
