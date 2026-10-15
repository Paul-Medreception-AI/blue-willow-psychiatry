import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Psychiatric Assessment vs Primary Care Evaluation',
  description: 'Compare a psychiatric assessment with a primary care evaluation for mental health: scope, treatment, time, cost and who each is best for.',
  alternates: { canonical: '/compare/psychiatric-assessment-vs-primary-care-evaluation' },
  openGraph: {
    title: 'Psychiatric Assessment vs Primary Care Evaluation',
    description: 'Compare a psychiatric assessment with a primary care evaluation for mental health: scope, treatment, time, cost and who each is best for.',
    url: 'https://www.bluewillowpsych.com/compare/psychiatric-assessment-vs-primary-care-evaluation',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Psychiatric Assessment vs Primary Care Evaluation',
    description: 'Compare a psychiatric assessment with a primary care evaluation for mental health: scope, treatment, time, cost and who each is best for.',
  },
}

const rows = [
  { label: 'Effectiveness', a: 'Detailed diagnostic review suited to complex, unclear or treatment-resistant symptoms, with a treatment plan built around the findings.', b: 'Effective for mild to moderate depression or anxiety, using brief screening tools and first-line treatment, plus ruling out medical causes.' },
  { label: 'Side effects', a: 'A psychiatric prescriber can weigh medication options, interactions and side effect profiles, and adjust the plan as needed.', b: 'Common first-line medications are reviewed, but options for adjusting after side effects or poor response may be more limited.' },
  { label: 'Cost', a: 'Copays and deductibles may apply depending on your coverage. Confirm benefits with your plan.', b: 'Copays and deductibles may apply depending on your coverage. Often a familiar, already-covered visit.' },
  { label: 'Time commitment', a: 'Usually a longer first visit with a thorough history, followed by periodic follow-ups.', b: 'Often a shorter visit that fits among other health concerns, with follow-ups as needed.' },
  { label: 'Best for', a: 'Complex symptoms, diagnostic uncertainty, past treatments that did not help, or several conditions at once.', b: 'Early, mild or moderate symptoms, or when a general health check is needed alongside mood concerns.' },
]

const check = (
  <svg className="w-5 h-5 shrink-0 mt-0.5 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

const faqs = [
  { q: 'Should I see my primary care provider first?', a: 'Many people do, and it is a reasonable start, especially to rule out medical causes such as thyroid problems. If symptoms are severe, complex or not improving, a psychiatric assessment is a sound next step.' },
  { q: 'Can a primary care provider prescribe psychiatric medication?', a: 'Yes, primary care providers commonly prescribe first-line medications for depression and anxiety. Psychiatric providers focus specifically on mental health and can manage more complex medication decisions.' },
  { q: 'What happens in a psychiatric assessment?', a: 'It typically covers your symptoms, personal and family history, medications, sleep, substance use and daily functioning. The goal is a clear diagnosis and a treatment plan you understand.' },
  { q: 'Do I need a referral?', a: 'Requirements vary by insurance plan and provider. Call the practice at (435) 200-3430 or check with your insurer to find out what applies to you.' },
  { q: 'Can I do both?', a: 'Yes. Many people keep a primary care provider for overall health while working with a psychiatric provider on mental health, and the two can share information with your permission.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:underline">Home</Link> › <span>Resources</span> › <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Psychiatric Assessment vs Primary Care Evaluation for Mental Health</h1>
          <p className="mt-6 text-lg text-white/90">Understand what each visit offers so you can choose the right starting point for mental health care in Tooele, UT.</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/compare-psychiatric-assessment-vs-primary-care-evaluation.jpg"} alt={"A close-up of a Rorschach inkblot test during a psychotherapy session, highlighting mental health care."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4"> </div>
              <div className="p-4">Psychiatric Assessment</div>
              <div className="p-4">Primary Care Evaluation</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-3 text-sm text-[var(--color-ink)] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold text-[var(--color-dark)]">{r.label}</div>
                <div className="p-4">{r.a}</div>
                <div className="p-4">{r.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl mb-4 text-[var(--color-primary)]">Psychiatric Assessment</h2>
          <p className="mb-4 text-[var(--color-ink)]">A psychiatric assessment is a focused evaluation of your emotional, cognitive and behavioral health. It looks at when symptoms began, how they affect work and relationships, and what has or has not helped before.</p>
          <p className="mb-4 text-[var(--color-ink)]">It is often a good fit for people with symptoms that overlap, such as anxiety with attention difficulties or mood swings, or for those who have tried treatment without relief. The result is typically a diagnosis, a discussion of options including therapy and medication, and a follow-up plan.</p>
          <p className="mb-12 text-[var(--color-ink)]">What to expect: questions about your history, current stress, sleep, substance use and family background. Bring a list of medications and past treatments if you can.</p>

          <h2 className="font-cormorant text-4xl mb-4 text-[var(--color-primary)]">Primary Care Evaluation</h2>
          <p className="mb-4 text-[var(--color-ink)]">Primary care providers are often the first stop for mental health concerns. They can screen with standard questionnaires, check for medical contributors like thyroid disorders, anemia or medication effects, and start first-line treatment.</p>
          <p className="mb-4 text-[var(--color-ink)]">Research supports primary care management of mild to moderate depression and anxiety. The visit is usually shorter, so it may focus on the most pressing concerns rather than a full psychiatric history.</p>
          <p className="text-[var(--color-ink)]">What to expect: a screening questionnaire, a physical review, possibly lab work, and a discussion of next steps, which may include a referral to a psychiatric provider.</p>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="font-semibold text-xl text-[var(--color-dark)] mb-3">Choose a psychiatric assessment if...</h3>
        <ul className="space-y-3 mb-8 text-[var(--color-ink)]">
          {['Your symptoms are severe, persistent or affecting daily life', 'Previous treatments have not worked well', 'You are unsure what diagnosis fits your experience', 'You have several conditions or complex medication questions'].map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>
        <h3 className="font-semibold text-xl text-[var(--color-dark)] mb-3">Choose a primary care evaluation if...</h3>
        <ul className="space-y-3 text-[var(--color-ink)]">
          {['Symptoms are recent, mild or moderate', 'You want to rule out medical causes first', 'You already have a trusted primary care provider', 'You want a general health review alongside mood concerns'].map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-[var(--color-muted)]">If you are in crisis or thinking about harming yourself, call or text 988 or go to the nearest emergency room.</p>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="animate-fade-up group border border-[var(--color-border)] rounded-xl p-5 bg-[var(--color-cream)]">
                <summary className="cursor-pointer font-semibold text-[var(--color-dark)]">{f.q}</summary>
                <p className="mt-3 text-[var(--color-ink)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Not Sure Where to Start?</h2>
          <p className="mb-8 text-white/90">Reach out to Blue Willow Psychiatry at 28 North Main Street, Tooele, UT, or call (435) 200-3430.</p>
          <Link href="/contact" className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-[var(--color-accent-dark)] transition hover:bg-[var(--color-light)]">Discuss Your Options</Link>
        </div>
      </section>
    </main>
  )
}