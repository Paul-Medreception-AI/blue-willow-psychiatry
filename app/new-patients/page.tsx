import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Patient Information | Blue Willow Psychiatry',
  description: 'What to expect at your first visit to Blue Willow Psychiatry in Tooele, UT: how to schedule, what to bring, and the forms to expect.',
  alternates: { canonical: '/new-patients' },
  openGraph: {
    title: 'New Patient Information | Blue Willow Psychiatry',
    description: 'What to expect at your first visit to Blue Willow Psychiatry in Tooele, UT: how to schedule, what to bring, and the forms to expect.',
    url: 'https://www.bluewillowpsych.com/new-patients',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'New Patient Information | Blue Willow Psychiatry',
    description: 'What to expect at your first visit to Blue Willow Psychiatry in Tooele, UT: how to schedule, what to bring, and the forms to expect.',
  },
}

const steps = [
  { number: '01', title: 'Schedule', description: 'Call (435) 200-3430 to schedule in person or virtually. Not sure if we are a good fit? Ask for a free 15 minute consultation first.' },
  { number: '02', title: 'New Patient Consult', description: 'Your first visit is 60 to 80 minutes, in the Tooele office or by virtual visit. Evening and weekend appointments are available.' },
  { number: '03', title: 'In-Depth Assessment', description: 'We work to understand how your symptoms are impacting your daily life, your goals, and the challenges you face. This might include lab tests or other specialized testing.' },
  { number: '04', title: 'Your Treatment Plan', description: 'Sometimes it is medications, sometimes therapy, often a combination. Return visits are 20 to 30 minutes and include medication management and brief solution-focused therapy.' },
]

const bring = [
  { label: 'Photo ID and Insurance Card', text: 'A government-issued photo ID and your insurance card, if you plan to use coverage.' },
  { label: 'Medication List', text: 'Current medications and supplements, with doses, and any you have tried in the past.' },
  { label: 'Prior Records', text: 'Earlier evaluations, diagnoses, lab results, or treatment summaries, if you have them.' },
  { label: 'Your Questions', text: 'Anything you want to ask about your symptoms, past treatment, or options. There is time for your questions.' },
]

const forms = [
  { label: 'Controlled substances', text: 'Controlled substances are not prescribed at your first visit. If you receive them from us, you will need to be seen in office periodically, and we might ask for outside records or drug screens.' },
  { label: 'Payment', text: 'Payment is due at the time of service. We accept cash, credit card, check, and Venmo, and offer self pay rates for those without insurance.' },
  { label: 'Cancellations', text: 'Missed appointments or appointments cancelled within 24 hours are charged $200 for new patients and $100 for return patients.' },
]

function Check() {
  return (
    <svg className="w-8 h-8 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

export default function NewPatientsPage() {
  return (
    <main className="text-[var(--color-ink)]">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-cormorant text-5xl font-light">New Patients</h1>
          <p className="mt-4 text-lg">Everything you need to know before your first visit</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-16 text-[var(--color-primary)]">Your First Visit</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((s) => (
              <div key={s.number} className="animate-fade-up flex gap-6 bg-white border border-[var(--color-border)] rounded-2xl p-8">
                <span className="font-cormorant text-6xl font-light text-[var(--color-primary)]">{s.number}</span>
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-[var(--color-dark)]">{s.title}</h3>
                  <p className="mt-2 text-[var(--color-muted)]">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl text-center mb-12 text-[var(--color-primary)]">What to Bring</h2>
          <ul className="grid gap-8 md:grid-cols-2">
            {bring.map((b) => (
              <li key={b.label} className="animate-fade-up flex gap-4">
                <Check />
                <div>
                  <p className="font-bold">{b.label}</p>
                  <p className="text-[var(--color-muted)]">{b.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6">
        <div className="animate-fade-up bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20">
          <h2 className="font-cormorant text-3xl text-[var(--color-dark)]">Good to Know Before Your Visit</h2>
          <p className="mt-4 text-[var(--color-muted)]">A few practice policies, so there are no surprises. <Link href="/insurance" className="text-[var(--color-primary)] underline">See insurance and fees</Link>.</p>
          <ul className="mt-6 space-y-4">
            {forms.map((f) => (
              <li key={f.label} className="flex gap-4">
                <Check />
                <div>
                  <p className="font-bold">{f.label}</p>
                  <p className="text-[var(--color-muted)]">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-cormorant text-3xl mb-4 text-[var(--color-primary)]">Scheduling Questions</h2>
          <p className="text-[var(--color-muted)]">To reschedule an appointment or ask about the office&apos;s policies, please call us at (435) 200-3430. The office is at 28 North Main Street, Tooele, UT 84074.</p>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light">Ready to take the first step?</h2>
          <p className="mt-4">Ask questions in a free 15 minute consultation or schedule your assessment.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-[var(--color-accent)] border border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-[var(--color-accent-dark)]">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}