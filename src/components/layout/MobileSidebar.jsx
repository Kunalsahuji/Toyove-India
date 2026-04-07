import { mainNavigation } from '../../data/navigation'
import { Icon } from '../ui/Icon'

export function MobileSidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-[#26415e]/30 transition-opacity duration-300 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
      />
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[310px] max-w-[88vw] bg-white px-5 py-6 shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="font-[var(--font-display)] text-3xl text-ink">Toykio</p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">Toy storefront</p>
          </div>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-line" type="button" onClick={onClose} aria-label="Close menu">
            <span className="text-xl leading-none text-ink">×</span>
          </button>
        </div>

        <div className="space-y-3">
          {mainNavigation.map((item) => (
            <a
              key={item.label}
              className="flex items-center justify-between rounded-[22px] bg-surface-soft px-4 py-4 text-sm font-extrabold text-ink"
              href={item.href}
              onClick={onClose}
            >
              <span>{item.label}</span>
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          ))}
        </div>

        <div className="mt-8 rounded-[28px] bg-[#fff1da] p-5">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-orange">Special perk</p>
          <h3 className="mt-3 font-[var(--font-display)] text-2xl text-ink">Curated toy sets for every age</h3>
          <button className="mt-5 rounded-full bg-blue px-5 py-3 text-sm font-extrabold text-white" type="button">
            Shop bundles
          </button>
        </div>
      </aside>
    </>
  )
}
