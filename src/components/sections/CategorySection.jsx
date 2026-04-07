import { categories } from '../../data/storefront'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

export function CategorySection() {
  return (
    <section id="shop" className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Shop by toys"
          title="A category layout that feels bright, modern, and easy for parents to browse."
          body="Each panel keeps the storefront playful with rounded surfaces and soft color blocking, while still feeling clean enough for a premium toy brand."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <article key={category.id} className={`card-panel overflow-hidden p-5 ${category.accent}`}>
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-[22px] bg-white text-blue shadow-sm">
                  <Icon name={category.icon} className="h-7 w-7" />
                </div>
                <span className="rounded-full bg-[rgba(255,255,255,0.8)] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-orange">
                  {category.badge}
                </span>
              </div>
              <h3 className="font-[var(--font-display)] text-3xl text-ink">{category.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{category.subtitle}</p>
              <a className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.14em] text-blue" href="#">
                Explore
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
