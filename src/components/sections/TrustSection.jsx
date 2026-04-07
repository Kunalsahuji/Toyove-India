export function TrustSection() {
  const trustPoints = [
    'Natural textures and child-safe finishes',
    'Responsive shopping flow across every device',
    'Wishlist, quick actions, and polished product discovery',
    'Clean Shopify-inspired section rhythm for conversions',
  ]

  return (
    <section id="parents-love" className="section-pad">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="card-panel bg-[#28425e] p-8 text-white md:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#f8ce73]">Why it works</p>
            <h3 className="mt-4 font-[var(--font-display)] text-4xl leading-tight">
              The storefront feels playful for kids, but trustworthy for parents.
            </h3>
            <p className="mt-5 text-base leading-7 text-[rgba(255,255,255,0.75)]">
              That balance is what makes this theme direction strong for a real toy store. It keeps delight in the visuals without sacrificing clarity or shopping confidence.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {trustPoints.map((point) => (
              <div key={point} className="card-panel flex items-start gap-4 p-6">
                <div className="mt-1 h-3 w-3 rounded-full bg-orange" />
                <p className="text-base font-bold leading-7 text-ink">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
