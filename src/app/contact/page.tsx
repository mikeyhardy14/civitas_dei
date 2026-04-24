export default function ContactPage() {
  return (
    <div className="bg-white">

      {/* ─── Page header ────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-200 bg-primary-soft/40">
        <div className="page-container py-12 lg:py-16">
          <div className="grid-12">
            <div className="col-span-12 space-y-4 lg:col-span-8">
              <p className="eyebrow">Contact</p>
              <h1 className="text-3xl font-bold text-[#102649] sm:text-4xl">
                Contact Civitas Dei
              </h1>
              <p className="text-base leading-relaxed text-slate-700">
                We&apos;d be glad to hear from you. Share a bit about yourself and
                how we can help, and a member of our team will respond as soon as
                possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact form ───────────────────────────────────────────────────── */}
      {/*
       * Layout: 12 cols
       *   Form  → col-span-12 lg:col-span-7
       *   Info  → col-span-12 lg:col-span-5
       */}
      <section>
        <div className="page-container py-16 lg:py-24">
          <div className="grid-12 items-start">

            {/* Form */}
            <form className="col-span-12 space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-8 lg:col-span-7">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wide text-slate-500">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#102649] focus:outline-none focus:ring-2 focus:ring-[#102649]/20"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wide text-slate-500">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#102649] focus:outline-none focus:ring-2 focus:ring-[#102649]/20"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wide text-slate-500">
                  Reason for contacting us
                </label>
                <select
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-[#102649] focus:outline-none focus:ring-2 focus:ring-[#102649]/20"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="events">Events &amp; registrations</option>
                  <option value="giving">Giving &amp; partnerships</option>
                  <option value="priests">Opportunities for priests</option>
                  <option value="media">Media / speaking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wide text-slate-500">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-[#102649] focus:outline-none focus:ring-2 focus:ring-[#102649]/20"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-[#102649] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-900"
              >
                Send message
              </button>
            </form>

            {/* Additional info */}
            <div className="col-span-12 space-y-4 lg:col-span-5">
              <p className="eyebrow">Additional information</p>
              <p className="text-base leading-relaxed text-slate-700">
                Include your preferred contact information and any details that
                will help us respond to your request.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                For urgent matters, please note that in the appropriate field
                and a member of our team will prioritize your message.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
