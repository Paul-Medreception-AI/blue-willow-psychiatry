import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

// The page header for the hub pages, in the home hero's style (Paul, 2026-10-15): warm off-white,
// the copy on the left, one of the practice's own photos on the right, tinted to the background and
// faded at its left edge. On phones the photo is a band ABOVE the title. The copy is never over the
// photo: Paul could not read black text over green leaves.
//
// `position` is a complete Tailwind class (e.g. "object-[right_75%]") written out at the call site, so
// Tailwind's scanner sees it there; never build it from parts.
export default function PageHero({
  title,
  subtitle,
  crumb,
  image,
  position = 'object-center',
}: {
  title: ReactNode
  subtitle?: ReactNode
  crumb?: string
  image: string
  position?: string
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-warm)] border-b border-[var(--color-border)]">
      <div className="relative h-44 sm:h-56 md:hidden" aria-hidden="true">
        <Image src={image} alt="" fill priority quality={80} sizes="100vw" className={'object-cover ' + position} />
        <div className="absolute inset-0 bg-[var(--color-warm)] mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[var(--color-warm)]" />
      </div>
      <div className="absolute inset-y-0 right-0 hidden md:block w-[46%]" aria-hidden="true">
        <Image src={image} alt="" fill priority quality={80} sizes="46vw" className={'object-cover ' + position} />
        <div className="absolute inset-0 bg-[var(--color-warm)] mix-blend-multiply" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[var(--color-warm)] to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-2 pb-14 md:py-24">
        <div className="md:max-w-[52%]">
          {crumb ? (
            <nav aria-label="Breadcrumb" className="text-sm text-[var(--color-muted)] mb-4">
              <Link href="/" className="hover:underline">Home</Link>
              <span className="mx-2">›</span>
              <span>{crumb}</span>
            </nav>
          ) : null}
          <h1 className="font-cormorant text-5xl md:text-6xl font-semibold leading-[1.05] tracking-tight text-[var(--color-ink)]">{title}</h1>
          {subtitle ? <p className="mt-5 text-lg text-[var(--color-ink)]/80 leading-relaxed max-w-xl">{subtitle}</p> : null}
        </div>
      </div>
    </section>
  )
}
