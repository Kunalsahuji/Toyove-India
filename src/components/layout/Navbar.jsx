import { mainNavigation } from '../../data/navigation'
import { Icon } from '../ui/Icon'

export function Navbar({ onOpenMenu }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm">
      <div className="container-shell pt-4">
        <div className="card-panel flex items-center justify-between gap-4 px-4 py-4 md:px-6">
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink md:hidden"
            type="button"
            onClick={onOpenMenu}
            aria-label="Open menu"
          >
            <Icon name="menu" />
          </button>

          <a href="#home" className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-orange text-white shadow-md">
              <span className="font-[var(--font-display)] text-2xl">T</span>
            </div>
            <div>
              <p className="font-[var(--font-display)] text-2xl leading-none text-ink">Toykio</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-muted">Little wonder store</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {mainNavigation.map((item) => (
              <a key={item.label} className="text-sm font-extrabold text-ink transition-colors hover:text-orange" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            {['search', 'user', 'heart', 'bag'].map((name) => (
              <button
                key={name}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition-colors hover:text-orange"
                type="button"
                aria-label={name}
              >
                <Icon name={name} />
              </button>
            ))}
          </div>

          <button className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink md:hidden" type="button" aria-label="Search">
            <Icon name="search" />
          </button>
        </div>
      </div>
    </header>
  )
}
