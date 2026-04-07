import { featuredProducts } from '../../data/storefront'
import { ProductCard } from '../ui/ProductCard'
import { SectionHeading } from '../ui/SectionHeading'

export function FeaturedSection() {
  return (
    <section id="collections" className="section-pad">
      <div className="container-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Featured collection"
            title="Bestselling toys styled like a modern Shopify product showcase."
            body="Structured cards with clear actions, soft hover depth, and enough detail for shoppers to act fast."
          />
          <button className="self-start rounded-full border border-line bg-white px-5 py-3 text-sm font-extrabold uppercase tracking-[0.14em] text-ink">
            View all products
          </button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
