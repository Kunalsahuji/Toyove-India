import { promoPanels } from '../../data/storefront'

export function PromoSection() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          {promoPanels.map((panel) => (
            <article key={panel.id} className={`card-panel overflow-hidden p-7 md:p-9 ${panel.tone}`}>
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-orange">{panel.eyebrow}</p>
              <h3 className="mt-4 max-w-lg font-[var(--font-display)] text-4xl leading-tight text-ink">{panel.title}</h3>
              <p className="mt-4 max-w-lg text-base leading-7 text-muted">{panel.body}</p>
              <div className="mt-8 h-40 rounded-[32px] bg-[rgba(255,255,255,0.7)] p-5 shadow-sm">
                <div className="flex h-full items-center justify-between gap-4 rounded-[28px] border border-[rgba(255,255,255,0.7)] px-5">
                  <div className="h-20 w-20 rounded-[28px] bg-[rgba(244,157,55,0.8)]" />
                  <div className="h-24 flex-1 rounded-[30px] bg-[rgba(79,136,198,0.16)]" />
                  <div className="h-16 w-16 rounded-full bg-coral" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
