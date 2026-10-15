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
  { number: '01', title: 'Schedule', description: 'Call the office at (435) 200-3430 or reach out through our contact page to set up your visit. If you have questions first, ask about a free 15 minute consultation.' },
  { number: '02', title: 'Complete Paperwork', description: 'Intake forms can be completed before your visit or at your first appointment, so you can take the time you need.' },
  { number: '03', title: 'First Visit', description: 'We talk through your history and concerns, and there is time for your questions. Your assessment may include lab tests or other specialized testing.' },
  { number: '04', title: 'Care Plan', description: 'Together we agree on a plan that may include medication, therapy, or both. Follow-up visits keep your care on track.' },
]

const bring = [
  { label: 'Photo ID and Insurance Card', text: 'A government-issued photo ID and your insurance card, if you plan to use coverage.' },
  { label: 'Medication List', text: 'Current medications and supplements, with doses, and any you have tried in the past.' },
  { label: 'Prior Records', text: 'Earlier evaluations, diagnoses, lab results, or treatment summaries, if you have them.' },
  { label: 'Emergency Contact', text: 'Name and phone number of someone we can reach if needed.' },
]

const forms = [
  { label: 'Intake form', text: 'Your history, current concerns, and goals for care.' },
  { label: 'Consent form', text: 'Your agreement to evaluation and treatment.' },
  { label: 'HIPAA authorization', text: 'Your privacy rights and who may receive your health information.' },
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
          <h2 className="font-cormorant text-3xl text-[var(--color-dark)]">Patient Forms</h2>
          <p className="mt-4 text-[var(--color-muted)]">Forms available at our office or can be completed at your first appointment.</p>
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