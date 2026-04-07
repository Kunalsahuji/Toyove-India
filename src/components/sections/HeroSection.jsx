import { heroHighlights } from '../../data/storefront'
import { Icon } from '../ui/Icon'

export function HeroSection() {
  return (
    <section id="home" className="section-pad pt-6">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="card-panel overflow-hidden bg-[#fff4e3] p-6 md:p-8 lg:p-10">
            <p className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em] text-orange shadow-sm">
              Curated children&apos;s store
            </p>
            <h1 className="mt-6 max-w-xl text-balance font-[var(--font-display)] text-5xl leading-[0.95] text-ink md:text-7xl">
              A playful storefront for little imaginations.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
              Warm colors, rounded merchandising panels, and thoughtfully arranged toy collections inspired by a premium Shopify children&apos;s theme.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-orange px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition-colors hover:bg-orange-deep">
                Shop Toys
              </button>
              <button className="rounded-full border border-line bg-white px-6 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-ink">
                Explore Collections
              </button>
            </div>

            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item} className="rounded-[24px] bg-[rgba(255,255,255,0.75)] p-4 shadow-sm">
                  <div className="mb-3 grid h-10 w-10 place-items-center rounded-full bg-[rgba(79,136,198,0.12)] text-blue">
                    <Icon name="star" className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-bold leading-6 text-ink">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="card-panel relative min-h-[340px] overflow-hidden bg-[#dcecff] p-6 md:min-h-[420px]">
              <div className="absolute right-6 top-6 rounded-full bg-[rgba(255,255,255,0.88)] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-blue">
                New season
              </div>
              <div className="absolute inset-x-6 bottom-6 top-20 rounded-[34px] bg-[rgba(255,255,255,0.7)]" />
              <div className="absolute left-1/2 top-[34%] h-44 w-44 -translate-x-1/2 rounded-[46px] bg-[#f4a038] shadow-xl" />
              <div className="absolute left-[20%] top-[28%] h-24 w-24 rounded-[28px] bg-[#ffd786]" />
              <div className="absolute right-[18%] top-[42%] h-24 w-24 rounded-[28px] bg-[#8bc0f4]" />
              <div className="absolute bottom-[22%] left-[24%] h-16 w-16 rounded-full bg-[#f9c2b1]" />
              <div className="absolute bottom-[22%] right-[24%] h-16 w-16 rounded-full bg-[#cae9d2]" />
              <div className="absolute bottom-10 left-8 right-8 rounded-[28px] bg-[rgba(255,255,255,0.92)] p-5 shadow-lg">
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange">Featured toy</p>
                <h3 className="mt-2 font-[var(--font-display)] text-3xl text-ink">Sunny Stacker</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Organic shapes, warm palette, and a cozy visual balance for the hero panel.</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="card-panel bg-[#fde7d7] p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-orange">Gift edit</p>
                <h3 className="mt-3 font-[var(--font-display)] text-3xl text-ink">Birthday-ready picks</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Thoughtful toys packaged in soft, cheerful tones.</p>
              </div>
              <div className="card-panel bg-[#e9f5ea] p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue">Safe materials</p>
                <h3 className="mt-3 font-[var(--font-display)] text-3xl text-ink">Made for tiny hands</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Gentle edges, lasting quality, and a calmer premium finish.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
