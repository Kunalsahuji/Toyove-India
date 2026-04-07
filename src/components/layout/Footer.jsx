import { footerColumns } from '../../data/storefront'

export function Footer() {
  return (
    <footer id="footer" className="pb-28 pt-10 md:pb-12">
      <div className="container-shell">
        <div className="card-panel overflow-hidden bg-[#26415e] px-6 py-10 text-white md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#f9d27a]">Toykio</p>
              <h2 className="mt-4 max-w-xl font-[var(--font-display)] text-4xl leading-tight md:text-5xl">
                Built for playful discovery and a polished children&apos;s shopping experience.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[rgba(255,255,255,0.72)]">
                A modern storefront direction for toy stores that need warmth, clarity, and conversion-ready ecommerce sections.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="font-[var(--font-display)] text-2xl">{column.title}</h3>
                  <div className="mt-4 space-y-3 text-sm text-[rgba(255,255,255,0.74)]">
                    {column.links.map((link) => (
                      <a key={link} href="#">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
