export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* ─── Page header ────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-primary-soft/40">
        <div className="page-container py-12 lg:py-16">
          <div className="grid-12">
            <div className="col-span-12 space-y-4 lg:col-span-8">
              <p className="eyebrow">About</p>
              <h1 className="text-3xl font-bold text-[#102649] sm:text-4xl">
                About Civitas Dei
              </h1>
              <p className="text-base leading-relaxed text-slate-700">
                Civitas Dei is a Catholic apostolate dedicated to forming and
                accompanying leaders who desire to renew the Church and transform
                culture through a deep life in Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ─────────────────────────────────────────────── */}
      {/*
       * Layout: 12 cols
       *   Mission → col-span-12 lg:col-span-6
       *   Vision  → col-span-12 lg:col-span-6
       */}
      <section className="border-b border-slate-200">
        <div className="page-container py-16 lg:py-24">
          <div className="grid-12">

            <div className="col-span-12 space-y-4 lg:col-span-6">
              <p className="eyebrow">Mission</p>
              <h2 className="text-2xl font-bold text-[#102649] sm:text-3xl">
                Christ reigning in every sphere of life.
              </h2>
              <p className="text-base leading-relaxed text-slate-700">
                Our mission is to foster a culture where Christ reigns in every
                sphere of life by forming leaders who are rooted in the Church&apos;s
                sacramental life, intellectually equipped, and sustained by deep
                friendship in Christ.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                We bring together clergy, lay leaders, and apostolates for
                liturgy, teaching, and conversation that goes beyond a single
                event—building relationships that sustain mission over time.
              </p>
            </div>

            <div className="col-span-12 space-y-4 lg:col-span-6">
              <p className="eyebrow">Vision</p>
              <h2 className="text-2xl font-bold text-[#102649] sm:text-3xl">
                Saints in the making, sent into the world.
              </h2>
              <p className="text-base leading-relaxed text-slate-700">
                We envision a Church renewed from within by saints in the making:
                priests and lay faithful whose lives are thoroughly Eucharistic
                and whose work in the world bears the marks of the Gospel—truth,
                mercy, and integrity.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                Through conferences, retreats, pilgrimages, and resources, Civitas
                Dei seeks to be a bridge between the Church&apos;s rich tradition and
                the urgent needs of our time.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
