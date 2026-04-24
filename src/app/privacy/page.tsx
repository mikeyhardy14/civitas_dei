export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-[#e6edf7]/40">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
            Legal
          </p>
          <h1 className="mt-3 text-2xl font-bold text-[#102649] sm:text-3xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: April 2026
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl space-y-8 px-4 py-12 text-sm leading-relaxed text-slate-700 sm:px-6 lg:py-16 lg:px-8">
          <div className="space-y-3">
            <h2 className="text-base font-semibold text-[#102649]">
              Information we collect
            </h2>
            <p>
              We collect information you provide directly, including your name,
              email address, and any message content when you fill out a contact
              or newsletter form. We may also collect standard server log data
              (IP address, browser type, pages visited) for security and
              analytics purposes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-[#102649]">
              How we use your information
            </h2>
            <p>
              We use your information to respond to inquiries, send newsletters
              and formation updates you have requested, process donations, and
              improve our website. We do not sell or share your personal
              information with third parties for marketing purposes.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-[#102649]">
              Cookies
            </h2>
            <p>
              This website uses essential cookies to ensure basic functionality.
              No tracking or advertising cookies are used without your consent.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-[#102649]">
              Your rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal data at any time by contacting us at the address on our
              Contact page. You may also unsubscribe from our mailing list at
              any time using the link in any email we send.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-base font-semibold text-[#102649]">
              Contact
            </h2>
            <p>
              Questions about this policy may be directed to us via the Contact
              page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
