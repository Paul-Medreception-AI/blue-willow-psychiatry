{/* The practice's website does not mention telehealth, so this page describes in-person visits. */}

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Visiting Our Office | Blue Willow Psychiatry',
  description: 'Plan an in-person visit with Blue Willow Psychiatry in Tooele, UT. Learn what a first visit involves and how to reach the office.',
  alternates: { canonical: '/telehealth' },
  openGraph: {
    title: 'Visiting Our Office | Blue Willow Psychiatry',
    description: 'Plan an in-person visit with Blue Willow Psychiatry in Tooele, UT. Learn what a first visit involves and how to reach the office.',
    url: 'https://www.bluewillowpsych.com/telehealth',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Visiting Our Office | Blue Willow Psychiatry',
    description: 'Plan an in-person visit with Blue Willow Psychiatry in Tooele, UT. Learn what a first visit involves and how to reach the office.',
  },
}

const steps = [
  {
    number: '01',
    title: 'Call or request an appointment',
    description: 'Phone the office or send a message to schedule. You can also ask about a free 15 minute consultation to see if the practice is a good fit.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Visit the office',
    description: 'Come to the office in Tooele for an in-person conversation about your history, your concerns and what you hope to change.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Plan your care together',
    description: 'Together you talk through next steps, which may include medication, therapy, or both, along with follow-up visits.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function VisitingOfficePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light">Visiting Our Office</h1>
          <p className="mt-6 text-lg text-white/90">
            Care starts with an in-person visit, and you can reach the office in Tooele by phone at (435) 200-3430.
          </p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] text-center">Your First Visit</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-[var(--color-muted)]">
            An in-person visit for mental health care is a chance to talk openly with a clinician, share your history and ask questions. Here is the general path.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.number} className="animate-fade-up rounded-xl border border-[var(--color-border)] bg-white p-8 transition hover:shadow-lg">
                <div className="flex items-center justify-between text-[var(--color-accent)]">
                  {s.icon}
                  <span className="font-cormorant text-3xl text-[var(--color-primary)]">{s.number}</span>
                </div>
                <h3 className="mt-6 font-cormorant text-2xl font-semibold text-[var(--color-ink)]">{s.title}</h3>
                <p className="mt-3 text-[var(--color-muted)]">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="animate-fade-up mt-12 max-w-3xl mx-auto rounded-xl bg-[var(--color-light)] p-8">
            <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-dark)]">What an in-person visit generally involves</h3>
            <ul className="mt-4 space-y-2 text-[var(--color-ink)] list-disc pl-5">
              <li>Talking through your symptoms, concerns and personal history</li>
              <li>Reviewing any past diagnoses, treatments or medications</li>
              <li>Discussing options such as medication, therapy, or a combination</li>
              <li>Asking questions and agreeing on what comes next</li>
            </ul>
            <p className="mt-4 text-sm text-[var(--color-muted)]">
              It can help to bring a list of current medications and any questions you want to cover.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light text-[var(--color-primary)] text-center">Finding Us</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="animate-fade-up rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8 text-center">
              <div className="flex justify-center text-[var(--color-accent)]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="mt-4 font-cormorant text-2xl font-semibold text-[var(--color-ink)]">Address</h3>
              <p className="mt-2 text-[var(--color-muted)]">28 North Main Street<br />Tooele, UT 84074</p>
            </div>
            <div className="animate-fade-up rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8 text-center">
              <div className="flex justify-center text-[var(--color-accent)]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372a1.125 1.125 0 00-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102A1.125 1.125 0 005.872 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="mt-4 font-cormorant text-2xl font-semibold text-[var(--color-ink)]">Phone</h3>
              <p className="mt-2 text-[var(--color-muted)]">
                <a href="tel:+14352003430" className="text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition">(435) 200-3430</a>
              </p>
            </div>
            <div className="animate-fade-up rounded-xl border border-[var(--color-border)] bg-[var(--color-cream)] p-8 text-center">
              <div className="flex justify-center text-[var(--color-accent)]">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m5-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 font-cormorant text-2xl font-semibold text-[var(--color-ink)]">Hours</h3>
              <p className="mt-2 text-[var(--color-muted)]">[Office hours to be confirmed]</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl font-light">Ready to take the first step?</h2>
          <p className="mt-4 text-white/90">Reach out to ask a question or schedule a consultation.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 font-medium text-white ring-1 ring-white/60 transition hover:bg-[var(--color-accent-dark)]">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}