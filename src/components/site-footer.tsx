import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50/60">
      <div className="page-container flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
              CD
            </div>
            <span className="text-sm font-semibold text-primary">
              Civitas Dei
            </span>
          </div>
          <p className="text-sm leading-relaxed text-slate-700">
            Forming Catholic leaders to renew the Church and transform culture
            through liturgy, formation, and community.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-8 text-sm text-slate-700 md:flex-row md:justify-between">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Explore
            </h3>
            <div className="mt-3 space-y-2">
              <Link href="/about" className="block hover:text-primary">
                About
              </Link>
              <Link href="/programs" className="block hover:text-primary">
                Programs
              </Link>
              <Link href="/events" className="block hover:text-primary">
                Events
              </Link>
              <Link href="/resources" className="block hover:text-primary">
                Resources
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Connect
            </h3>
            <div className="mt-3 space-y-2">
              <Link href="/for-priests" className="block hover:text-primary">
                For Priests
              </Link>
              <Link href="/contact" className="block hover:text-primary">
                Contact
              </Link>
              <Link href="/donate" className="block hover:text-primary">
                Support Us
              </Link>
            </div>
          </div>

          <div className="max-w-xs">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Stay in touch
            </h3>
            <p className="mt-3 text-sm text-slate-700">
              Receive updates on events, formation opportunities, and new
              resources.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-900"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50">
        <div className="page-container flex flex-col items-center justify-between gap-3 py-4 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Civitas Dei. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

