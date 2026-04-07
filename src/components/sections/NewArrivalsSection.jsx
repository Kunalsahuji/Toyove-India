import { newArrivals } from '../../data/storefront'
import { ProductCard } from '../ui/ProductCard'
import { SectionHeading } from '../ui/SectionHeading'

export function NewArrivalsSection() {
  return (
    <section id="arrivals" className="section-pad">
      <div className="container-shell">
        <div className="card-panel bg-[#f6f9fc] px-5 py-8 md:px-8 md:py-10">
          <SectionHeading
            eyebrow="New arrivals"
            title="Fresh picks for growing collections and seasonal gifting."
            body="This section mirrors the familiar ecommerce flow of spotlighting recently added toys with the same visual rhythm as the main catalog."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} compact />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
