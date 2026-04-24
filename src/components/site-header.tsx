"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/for-priests", label: "For Priests" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#102649] text-[11px] font-bold tracking-wide text-white shadow-sm">
              CD
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-bold text-[#102649]">
                Civitas Dei
              </span>
              <span className="text-[10px] font-normal text-slate-500">
                Renew the Church. Transform the Culture.
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-[#102649] ${
                  isActive(item.href)
                    ? "font-semibold text-[#102649]"
                    : "text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/donate"
              className="ml-2 inline-flex items-center rounded-full bg-[#c79a38] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#b0882e]"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/donate"
              className="inline-flex items-center rounded-full bg-[#c79a38] px-3 py-1.5 text-xs font-semibold text-white shadow-sm"
            >
              Donate
            </Link>
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100"
            >
              {menuOpen ? (
                /* X icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.75}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                /* Hamburger icon */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.75}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          {/* Drawer panel */}
          <div className="absolute right-0 top-[57px] flex h-[calc(100vh-57px)] w-72 flex-col bg-white shadow-xl">
            <nav className="flex flex-col gap-1 px-4 pt-4 pb-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-slate-50 hover:text-[#102649] ${
                    isActive(item.href)
                      ? "bg-slate-50 font-semibold text-[#102649]"
                      : "text-slate-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="my-3 border-t border-slate-200" />

              <Link
                href="/donate"
                className="mx-2 rounded-full bg-[#c79a38] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#b0882e]"
              >
                Donate
              </Link>
            </nav>

            <div className="mt-auto border-t border-slate-200 px-4 py-4">
              <p className="text-[11px] leading-relaxed text-slate-500">
                Civitas Dei · Renew the Church. Transform the Culture.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
