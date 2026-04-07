export function SectionHeading({ eyebrow, title, body, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full bg-[rgba(255,255,255,0.8)] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.24em] text-orange shadow-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-[var(--font-display)] text-3xl leading-tight text-ink md:text-5xl">{title}</h2>
      {body ? <p className="mt-4 text-base leading-7 text-muted md:text-lg">{body}</p> : null}
    </div>
  )
}
