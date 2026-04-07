import { mobileQuickLinks } from '../../data/navigation'
import { Icon } from '../ui/Icon'

export function MobileBottomBar({ onOpenMenu }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-[rgba(255,255,255,0.95)] px-3 py-2 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-between gap-2">
        {mobileQuickLinks.map((link) => {
          const isMenu = link.icon === 'menu'

          return (
            <button
              key={link.label}
              className="flex min-w-0 flex-1 flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-ink"
              type="button"
              onClick={isMenu ? onOpenMenu : undefined}
            >
              <Icon name={link.icon} className="h-5 w-5" />
              <span className="truncate">{link.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
