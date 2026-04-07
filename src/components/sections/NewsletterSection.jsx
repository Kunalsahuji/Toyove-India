export function NewsletterSection() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="card-panel overflow-hidden bg-[#fff1d8] px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-orange">Join the club</p>
              <h3 className="mt-4 max-w-xl font-[var(--font-display)] text-4xl leading-tight text-ink md:text-5xl">
                Fresh toy drops, nursery ideas, and gifting notes for playful homes.
              </h3>
            </div>
            <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                className="h-14 rounded-full border border-line bg-white px-6 text-sm text-ink outline-none placeholder:text-muted"
                placeholder="Enter your email"
                type="email"
              />
              <button className="h-14 rounded-full bg-blue px-7 text-sm font-extrabold uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue-deep" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
