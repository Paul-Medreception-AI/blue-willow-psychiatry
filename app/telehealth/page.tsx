import type { Metadata } from 'next'
import Link from 'next/link'

const TITLE = 'Telehealth Psychiatry in Utah | Blue Willow Psychiatry'
const DESCRIPTION = 'See Kristi Lawrence, APRN in the Tooele office or by virtual visit. Evening and weekend appointments are available. Call (435) 200-3430.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/telehealth' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.bluewillowpsych.com/telehealth',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
  },
}

const OPTIONS = [
  {
    title: 'Virtual Visits',
    text: 'Meet from home or wherever is most convenient for you. Ask about a virtual visit when you call to schedule.',
    icon: 'M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z',
  },
  {
    title: 'In-Office Visits',
    text: 'Come to the office at 28 North Main Street in Tooele for a face to face visit.',
    icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
  },
  {
    title: 'Evenings and Weekends',
    text: 'We know you are busy. Evening and weekend appointments are available, in person or virtually.',
    icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]

const faqs = [
  {
    q: 'Can I be seen by telehealth?',
    a: 'Yes. We offer both in-office and virtual visits, so you can choose what fits your schedule.',
  },
  {
    q: 'Are evening or weekend appointments available?',
    a: 'Yes. Evening and weekend appointments are available, both in person and virtually.',
  },
  {
    q: 'Do I ever need to come into the office?',
    a: 'If you receive controlled substances from us, you will need to be seen in office periodically. Controlled substances are not prescribed at the first visit.',
  },
  {
    q: 'How do I get started?',
    a: 'Call (435) 200-3430 to schedule, or to set up a free 15 minute consultation if you have questions first.',
  },
]

export default function TelehealthPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light">Telehealth and Office Visits</h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            We want this to be as easy as possible, and understand the demands on your time. We offer both in-office and virtual visits, as well as appointments on weekends and evenings.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {OPTIONS.map((o) => (
            <div key={o.title} className="animate-fade-up bg-white rounded-2xl p-8 border border-[var(--color-border)] shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
              <svg className="w-10 h-10 text-[var(--color-primary)] mb-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d={o.icon} /></svg>
              <h2 className="font-cormorant text-2xl text-[var(--color-ink)] mb-3">{o.title}</h2>
              <p className="text-[var(--color-muted)] leading-relaxed">{o.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-12 text-[var(--color-primary)]">Telehealth Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-[var(--color-cream)] rounded-xl border border-[var(--color-border)] group">
                <summary className="cursor-pointer list-none p-6 font-semibold text-[var(--color-ink)] flex items-center justify-between">
                  {f.q}
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] py-20">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-[var(--color-ink)]">
          <div>
            <h2 className="font-cormorant text-3xl text-[var(--color-primary)] mb-4">Office</h2>
            <p>28 North Main Street</p>
            <p>Tooele, UT 84074</p>
          </div>
          <div>
            <h2 className="font-cormorant text-3xl text-[var(--color-primary)] mb-4">Phone</h2>
            <a href="tel:4352003430" className="text-[var(--color-primary)] font-semibold">(435) 200-3430</a>
            <p className="mt-2 text-[var(--color-muted)]">Call for availability.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-ink)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light">Ready to take the first step?</h2>
          <p className="mt-4 text-white/80">Have questions before you get started? Call for a free 15 minute consultation.</p>
          <Link href="/contact" className="inline-block mt-8 px-8 py-3 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white font-semibold">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
