import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-white px-4 py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e6edf7]">
        <span className="text-2xl font-bold text-[#102649]">?</span>
      </div>
      <h1 className="mt-6 text-3xl font-bold text-[#102649]">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
        We couldn&apos;t find the page you were looking for. It may have been moved
        or no longer exists.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-[#102649] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-900"
        >
          Back to home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-[#102649]/20 px-6 py-2.5 text-sm font-semibold text-[#102649] transition hover:border-[#102649]/40"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
