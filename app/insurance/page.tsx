import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insurance & Billing | Blue Willow Psychiatry',
  description: 'Learn how insurance verification, billing and self-pay estimates work at Blue Willow Psychiatry in Tooele, UT. Call (435) 200-3430 with questions.',
  alternates: { canonical: '/insurance' },
  openGraph: {
    title: 'Insurance & Billing | Blue Willow Psychiatry',
    description: 'Learn how insurance verification, billing and self-pay estimates work at Blue Willow Psychiatry in Tooele, UT. Call (435) 200-3430 with questions.',
    url: 'https://www.bluewillowpsych.com/insurance',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Insurance & Billing | Blue Willow Psychiatry',
    description: 'Learn how insurance verification, billing and self-pay estimates work at Blue Willow Psychiatry in Tooele, UT. Call (435) 200-3430 with questions.',
  },
}

const steps = [
  {
    title: 'Verify Coverage',
    text: 'Before your first visit, we help check your specific benefits. Your plan may have a co-pay, a flat amount you pay at each visit, or a deductible, the amount you pay before insurance starts sharing costs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m6 2.25a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: 'Service Provided',
    text: 'You receive your visit. Any co-pay your plan requires is typically due at the time of service.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: 'Claim Submitted',
    text: 'A claim is sent to your insurance company. They review it and decide how much they will pay based on your plan.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: 'You Pay Remainder',
    text: 'Your insurer sends you an Explanation of Benefits (EOB). It is not a bill; it shows what was charged, what insurance paid and what you may owe. Any remaining balance is your responsibility.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
      </svg>
    ),
  },
]

const faqs = [
  {
    q: 'Will you check my insurance before my first visit?',
    a: 'Yes. The practice verifies your specific benefits before the first visit, so you know what to expect. Call (435) 200-3430 to get started.',
  },
  {
    q: 'What is the difference between a co-pay and a deductible?',
    a: 'A co-pay is a set amount you pay for a visit. A deductible is the amount you pay for covered care before your plan begins to share costs. Plans vary, so your benefits are the best guide.',
  },
  {
    q: 'What is an Explanation of Benefits (EOB)?',
    a: 'An EOB is a statement from your insurer showing what was billed, what the plan paid and what you may owe. It is not a bill, but it is worth comparing with any statement you receive.',
  },
  {
    q: 'Can I be seen without using insurance?',
    a: 'Yes. Self-pay patients are welcome and receive an estimate up front, before care begins.',
  },
  {
    q: 'What is a good faith estimate?',
    a: 'It is a written estimate of expected charges for care. Under the No Surprises Act, people who do not use insurance have the right to receive one before scheduling or at their request.',
  },
]

export default function InsurancePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light">Insurance &amp; Billing</h1>
          <p className="mt-4 text-lg text-white/90">Transparent pricing and billing information</p>
        </div>
      </section>

      {/* The real accepted-carrier list must be supplied by the practice before any carrier is named on this page. */}
      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">Accepted Insurance Plans</h2>
          <div className="animate-fade-up max-w-3xl mx-auto bg-white border border-[var(--color-border)] rounded-2xl p-10 text-center">
            <div className="flex justify-center text-[var(--color-accent)] mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M12 2.25 3.75 6v5.25c0 5 3.5 9.25 8.25 10.5 4.75-1.25 8.25-5.5 8.25-10.5V6L12 2.25Z" />
              </svg>
            </div>
            <p className="text-[var(--color-ink)] leading-relaxed">
              Coverage for mental health care varies a great deal between plans. Rather than a generic list, the practice verifies your specific benefits before your first visit so you know what to expect.
            </p>
            <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
              Self-pay patients are welcome and receive an estimate up front.
            </p>
            <a
              href="tel:+14352003430"
              className="mt-8 inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 text-white font-medium transition-colors hover:bg-[var(--color-accent-dark)]"
            >
              Call (435) 200-3430
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">How Billing Works</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="animate-fade-up bg-[var(--color-cream)] border border-[var(--color-border)] rounded-2xl p-8 transition-shadow hover:shadow-lg">
                <div className="text-[var(--color-accent)] mb-4">{s.icon}</div>
                <p className="text-sm text-[var(--color-muted)]">Step {i + 1}</p>
                <h3 className="font-cormorant text-2xl text-[var(--color-primary)] mb-3">{s.title}</h3>
                <p className="text-[var(--color-ink)] leading-relaxed text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="animate-fade-up bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto mx-6 my-20">
        <h3 className="font-cormorant text-3xl text-[var(--color-primary)] mb-4">Self-Pay Options</h3>
        <p className="text-[var(--color-ink)] leading-relaxed">
          If you are not using insurance, you will receive a good faith estimate before care begins, so you understand expected charges ahead of time.
        </p>
        <p className="mt-4 text-[var(--color-ink)] leading-relaxed">
          The federal No Surprises Act gives patients who do not use insurance the right to receive a good faith estimate of expected costs. Call (435) 200-3430 to ask about yours.
        </p>
      </section>

      <section className="bg-white pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-12 text-[var(--color-primary)]">Billing Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="animate-fade-up group bg-[var(--color-cream)] border border-[var(--color-border)] rounded-xl p-6">
                <summary className="cursor-pointer font-medium text-[var(--color-ink)]">{f.q}</summary>
                <p className="mt-3 text-[var(--color-muted)] leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light">Questions about coverage?</h2>
          <p className="mt-4 text-white/90">Reach out and we can help you understand your options before your first visit.</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-medium text-[var(--color-dark)] transition-colors hover:bg-[var(--color-light)]"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}