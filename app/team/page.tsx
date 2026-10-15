import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meet Our Team | Blue Willow Psychiatry Tooele, UT',
  description: 'Learn about the care team at Blue Willow Psychiatry in Tooele, UT. Call (435) 200-3430 to learn more about our mental health care practice.',
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Meet Our Team | Blue Willow Psychiatry Tooele, UT',
    description: 'Learn about the care team at Blue Willow Psychiatry in Tooele, UT. Call (435) 200-3430 to learn more about our mental health care practice.',
    url: 'https://www.bluewillowpsych.com/team',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Meet Our Team | Blue Willow Psychiatry Tooele, UT',
    description: 'Learn about the care team at Blue Willow Psychiatry in Tooele, UT. Call (435) 200-3430 to learn more about our mental health care practice.',
  },
}

export default function TeamPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-28 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-6xl font-light">Meet Our Team</h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Blue Willow Psychiatry is a mental health care practice in Tooele, UT, focused on in-depth assessment and individualized treatment.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">Our Providers &amp; Staff</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {/* TODO(optimize): replace with real provider bios + headshots once supplied */}
            <div className="animate-fade-up bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-sm hover:shadow-lg transition-shadow w-full md:col-span-2 md:max-w-md">
              <div className="relative bg-[var(--color-light)] h-72 flex items-center justify-center">
                <svg className="w-20 h-20 stroke-[var(--color-primary)] opacity-40" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)]">Our Provider Team</h3>
                <p className="font-dm-sans text-sm text-[var(--color-primary)] font-semibold uppercase tracking-wide mt-1">Blue Willow Psychiatry</p>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mt-3">
                  Full provider profiles are coming soon. Please call to learn more about our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light">Have Questions? Let&apos;s Talk.</h2>
          <p className="mt-4 text-white/80">Free 15 minute consultations are available. Call (435) 200-3430 or reach out online.</p>
          <Link
            href="/contact"
            className="inline-block mt-8 px-8 py-3 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white font-semibold"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}