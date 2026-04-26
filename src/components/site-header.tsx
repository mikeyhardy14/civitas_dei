"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { href: "/about", label: "About Us" },
  { href: "/chapters", label: "Chapters" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
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
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5">
            <Image
              src="/NEw%20logo.svg"
              alt="Civitas Dei logo"
              width={76}
              height={76}
              className="h-[76px] w-[76px] shrink-0 rounded-full object-cover shadow-sm"
              priority
            />
            <div className="hidden flex-col leading-tight sm:flex">
              <span
                className="text-[34px] font-bold uppercase tracking-[0.08em] text-[#102649]"
                style={{
                  fontFamily:
                    '"Aquinas Std Regular", "Times New Roman", Times, serif',
                }}
              >
                Civitas Dei
              </span>

            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6.5 text-[15px] font-medium md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`tracking-wide transition-colors hover:text-[#102649] ${
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
              className="ml-3 inline-flex items-center rounded-full bg-[#c79a38] px-5.5 py-2 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#b0882e]"
            >
              Donate
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/donate"
              className="inline-flex items-center rounded-full bg-[#c79a38] px-4 py-2 text-sm font-semibold text-white shadow-sm"
            >
              Donate
            </Link>
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100"
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
          <div className="absolute right-0 top-[84px] flex h-[calc(100vh-84px)] w-80 flex-col bg-white shadow-xl">
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
