import { utilityLinks } from '../../data/navigation'

export function AnnouncementBar() {
  return (
    <div className="border-b border-line bg-[#f7e6bf]">
      <div className="container-shell flex min-h-11 flex-wrap items-center justify-between gap-3 py-2 text-sm font-bold text-ink">
        <p>Free shipping on playful orders over $75</p>
        <div className="hidden items-center gap-5 text-xs uppercase tracking-[0.18em] text-[rgba(38,65,94,0.8)] md:flex">
          {utilityLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
