import { Icon } from './Icon'

export function ProductCard({ product, compact = false }) {
  return (
    <article className="card-panel group overflow-hidden p-4 transition-transform duration-300 hover:-translate-y-1">
      <div className={`relative rounded-[24px] bg-gradient-to-br ${product.tint} p-4 ${compact ? 'h-52' : 'h-64'}`}>
        <div className="absolute left-4 top-4 rounded-full bg-[rgba(255,255,255,0.9)] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue">
          {product.tag ?? 'Fresh Pick'}
        </div>
        <button
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-[rgba(255,255,255,0.9)] text-ink transition-colors hover:text-orange"
          type="button"
          aria-label={`Add ${product.name} to wishlist`}
        >
          <Icon name="heart" className="h-4 w-4" />
        </button>
        <div className="flex h-full items-center justify-center">
          <div className="relative h-32 w-32 rounded-[32px] bg-[rgba(255,255,255,0.8)] shadow-[inset_0_0_0_1px_rgba(69,97,127,0.08)]">
            <div className="absolute inset-x-5 top-7 h-12 rounded-[18px] bg-[rgba(244,157,55,0.8)]" />
            <div className="absolute inset-x-8 top-14 h-10 rounded-[16px] bg-[rgba(79,136,198,0.8)]" />
            <div className="absolute bottom-5 left-7 h-6 w-6 rounded-full bg-coral" />
            <div className="absolute bottom-5 right-7 h-6 w-6 rounded-full bg-mint" />
          </div>
        </div>
      </div>
      <div className="px-2 pb-2 pt-5">
        <div className="mb-2 flex items-center justify-between gap-4">
          <h3 className="font-[var(--font-display)] text-xl text-ink">{product.name}</h3>
          <div className="flex items-center gap-1 text-sm font-bold text-orange">
            <Icon name="star" className="h-4 w-4" />
            <span>{product.rating ?? '4.8'}</span>
          </div>
        </div>
        <div className="mb-4 flex items-center justify-between text-sm text-muted">
          <span>Hand-finished toy</span>
          <span className="font-extrabold text-blue">{product.price}</span>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 rounded-full bg-blue px-4 py-3 text-sm font-extrabold text-white transition-colors hover:bg-blue-deep" type="button">
            Add to Cart
          </button>
          <button className="rounded-full border border-line px-4 py-3 text-sm font-bold text-ink transition-colors hover:border-orange hover:text-orange" type="button">
            Quick View
          </button>
        </div>
      </div>
    </article>
  )
}
