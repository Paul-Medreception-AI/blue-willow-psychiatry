import type { Metadata } from 'next'
import Link from 'next/link'

const TITLE = 'Insurance & Fees | Blue Willow Psychiatry, Tooele UT'
const DESCRIPTION = 'Insurance plans accepted at Blue Willow Psychiatry, including Medicaid, PEHP, DMBA, SelectHealth and Regence, plus self pay rates and payment options.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/insurance' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://www.bluewillowpsych.com/insurance',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: TITLE,
    description: DESCRIPTION,
  },
}

// As published by the practice. "Some types of Medicaid" is their wording: plans vary, so patients call to confirm.
const PLANS = [
  'Some types of Medicaid',
  'United Healthcare',
  'PEHP',
  'DMBA',
  'Regence / BlueCross BlueShield',
  'SelectHealth',
  'University of Utah Health Plans',
]

const SELF_PAY = [
  { name: 'New patient consult', length: '60 to 80 minutes', price: '$250', note: 'Includes medication management and brief solution-focused therapy.' },
  { name: 'Return visit', length: '20 to 30 minutes', price: '$185', note: 'Includes medication management and brief solution-focused therapy.' },
  { name: 'Medication management visit', length: '15 minutes', price: '$150', note: 'For patients who only need medication management and do not have complicated treatment plans.' },
]

const faqs = [
  {
    q: 'Do you take my insurance?',
    a: 'We accept several plans, including some types of Medicaid, United Healthcare, PEHP, DMBA, Regence/BCBS, SelectHealth and University of Utah Health Plans. Coverage varies by plan, so please call (435) 200-3430 to verify your coverage when you schedule your appointment.',
  },
  {
    q: 'What if I do not have insurance?',
    a: 'We offer self pay rates. A new patient consult is $250, return visits are $185, and a 15 minute medication management visit is $150 for patients with straightforward treatment plans.',
  },
  {
    q: 'When is payment due, and how can I pay?',
    a: 'Payment is due at the time of service. We accept cash, credit card, check, and Venmo.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Missed appointments, or appointments cancelled within 24 hours, are charged a cancellation fee of $200 for new patients and $100 for return patients.',
  },
  {
    q: 'What is a good faith estimate?',
    a: 'It is a written estimate of expected charges. Under the federal No Surprises Act, people who are not using insurance can ask for one before scheduling.',
  },
]

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function InsurancePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light">Insurance &amp; Fees</h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">
            Insurance plans we accept, self pay rates, and what to know before your visit.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-4 text-[var(--color-primary)]">Insurance Plans We Accept</h2>
          <p className="text-center text-[var(--color-muted)] mb-12 max-w-2xl mx-auto">
            We accept several different insurance plans. Please call to verify coverage when you schedule your appointment.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PLANS.map((p) => (
              <li key={p} className="animate-fade-up flex items-center gap-3 bg-white rounded-xl px-6 py-4 border border-[var(--color-border)] shadow-sm text-[var(--color-ink)] font-medium">
                <svg className="w-5 h-5 flex-shrink-0 text-[var(--color-primary)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                {p}
              </li>
            ))}
          </ul>
          <div className="text-center mt-10">
            <a href="tel:4352003430" className="inline-block px-8 py-3 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] transition-colors text-white font-semibold">
              Call (435) 200-3430 to Verify Coverage
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-4 text-[var(--color-primary)]">Self Pay Rates</h2>
          <p className="text-center text-[var(--color-muted)] mb-12 max-w-2xl mx-auto">For those who do not have insurance, we offer self pay rates.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SELF_PAY.map((s) => (
              <div key={s.name} className="animate-fade-up bg-[var(--color-cream)] rounded-2xl p-8 border border-[var(--color-border)] hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
                <h3 className="font-cormorant text-2xl text-[var(--color-ink)]">{s.name}</h3>
                <p className="text-4xl font-semibold text-[var(--color-primary)] mt-4">{s.price}</p>
                <p className="text-sm uppercase tracking-wide text-[var(--color-muted)] mt-1">{s.length}</p>
                <p className="text-[var(--color-ink)] mt-4 leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] py-20">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-cormorant text-3xl text-[var(--color-primary)] mb-4">Payment</h3>
            <p className="text-[var(--color-ink)] leading-relaxed">Payment is due at the time of service. We accept cash, credit card, check, and Venmo.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="font-cormorant text-3xl text-[var(--color-primary)] mb-4">Cancellations</h3>
            <p className="text-[var(--color-ink)] leading-relaxed">Missed appointments or appointments cancelled within 24 hours will be charged a cancellation fee of $200 for new patients, and $100 for return patients.</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-12 text-[var(--color-primary)]">Insurance and Fee Questions</h2>
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

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light">Questions about coverage?</h2>
          <p className="mt-4 text-white/85">Call (435) 200-3430. Free 15 minute consultations are available.</p>
          <Link href="/contact" className="inline-block mt-8 px-8 py-3 rounded-full bg-white text-[var(--color-primary)] font-semibold hover:bg-[var(--color-cream)] transition-colors">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
