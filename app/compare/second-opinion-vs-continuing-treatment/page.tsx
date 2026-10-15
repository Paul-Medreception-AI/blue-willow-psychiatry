import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Second Opinion vs Continuing Current Treatment',
  description: 'Compare getting a second opinion with staying on your current mental health treatment plan, and learn how to decide which fits your situation.',
  alternates: { canonical: '/compare/second-opinion-vs-continuing-treatment' },
  openGraph: {
    title: 'Second Opinion vs Continuing Current Treatment',
    description: 'Compare getting a second opinion with staying on your current mental health treatment plan, and learn how to decide which fits your situation.',
    url: 'https://www.bluewillowpsych.com/compare/second-opinion-vs-continuing-treatment',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Second Opinion vs Continuing Current Treatment',
    description: 'Compare getting a second opinion with staying on your current mental health treatment plan, and learn how to decide which fits your situation.',
  },
}

const rows = [
  { label: 'Effectiveness', a: 'Can clarify a diagnosis, uncover missed factors, and suggest alternatives when progress has stalled.', b: 'Works well when symptoms are steadily improving and the plan matches your diagnosis. Benefits often build with consistency.' },
  { label: 'Side effects', a: 'May identify a medication or dose that is better tolerated. A new plan can also bring new adjustments.', b: 'Familiar and predictable. Persistent side effects can often be addressed within the current plan by talking with your prescriber.' },
  { label: 'Cost', a: 'Costs vary by provider and coverage. Copays and deductibles may apply, and some practices use other fee structures.', b: 'Usually the same as your existing arrangement, such as copays and deductibles, or a membership fee if your provider uses one.' },
  { label: 'Time commitment', a: 'Requires gathering records, an extended first visit, and possibly follow-up to coordinate with your current provider.', b: 'Minimal change. You keep your existing appointment rhythm and relationship.' },
  { label: 'Best for', a: 'People with unclear diagnoses, limited improvement, troubling side effects, or major decisions ahead.', b: 'People who are improving, feel understood by their clinician, and have a plan that fits their goals.' },
]

const check = (
  <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const faqs = [
  { q: 'Will getting a second opinion upset my current provider?', a: 'Clinicians generally understand that patients seek second opinions, and many welcome them. You can tell your provider openly, or ask for your records to be shared.' },
  { q: 'Do I have to switch providers after a second opinion?', a: 'No. A second opinion is a consultation. You can bring the recommendations back to your current clinician, switch, or keep your plan as is.' },
  { q: 'Should I stop my medication while I decide?', a: 'No. Do not stop or change psychiatric medication without guidance from a prescriber, since abrupt changes can cause withdrawal or a return of symptoms.' },
  { q: 'How do I know if my treatment is not working?', a: 'Signs include little change after an adequate trial, worsening symptoms, intolerable side effects, or a sense that your concerns are not being heard. Discuss these with your clinician first.' },
  { q: 'What should I bring to a second opinion visit?', a: 'Bring a medication list with doses and dates, prior diagnoses, any past evaluation or lab results, and a short summary of your symptoms and goals.' },
]

export default function Page() {
  return (
    <main className="bg-white text-[var(--color-ink)]">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link> › <span>Resources</span> › <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Second Opinion vs Continuing Current Treatment</h1>
          <p className="mt-6 text-lg opacity-90">A clear look at both paths to help you make a confident decision about your mental health care.</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/compare-second-opinion-vs-continuing-treatment.jpg"} alt={"From above crop African American male in casual clothes sitting on comfy couch and answering professional female consultant questions in modern psychotherapy of"} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4">Factor</div>
              <div className="p-4">Second Opinion</div>
              <div className="p-4">Continuing Treatment</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold text-[var(--color-dark)]">{r.label}</div>
                <div className="p-4">{r.a}</div>
                <div className="p-4">{r.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Getting a Second Opinion</h2>
            <p className="mb-4 leading-relaxed">A second opinion is a separate evaluation by another clinician. It can confirm that your diagnosis and plan make sense, or point out options that were not yet explored, such as a different medication approach, therapy referral, or screening for overlapping conditions.</p>
            <p className="mb-4 leading-relaxed">Many people consider one after months without meaningful improvement, when side effects interfere with daily life, or when a diagnosis does not seem to fit their experience. It is also reasonable before starting a new long-term medication.</p>
            <p className="mb-12 leading-relaxed">Expect a thorough review of your history, current medications, and goals. Bringing records helps the new clinician avoid repeating past trials.</p>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-6 text-[var(--color-primary)]">Continuing Current Treatment</h2>
            <p className="mb-4 leading-relaxed">Staying the course makes sense when symptoms are easing, even slowly. Many mental health treatments take weeks to show full benefit, and changing plans too early can reset that progress.</p>
            <p className="mb-4 leading-relaxed">Continuity also matters. A clinician who knows your history can notice subtle changes and adjust gradually. Trust in the therapeutic relationship is itself linked to better outcomes in mental health care.</p>
            <p className="leading-relaxed">Continuing does not mean staying silent. If something concerns you, raise it at your next visit. Dose changes, added therapy, or more frequent check-ins can often resolve issues without starting over.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="font-semibold text-xl mb-3 text-[var(--color-dark)]">Choose a second opinion if...</h3>
        <ul className="space-y-3 mb-8">
          {['You have seen little improvement after an adequate trial', 'Your diagnosis feels unclear or has changed several times', 'Side effects are hard to live with', 'You face a major decision about medication or care'].map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>
        <h3 className="font-semibold text-xl mb-3 text-[var(--color-dark)]">Continue current treatment if...</h3>
        <ul className="space-y-3">
          {['Your symptoms are gradually improving', 'You feel heard and trust your clinician', 'You have only recently started and are still within the expected response window', 'Concerns can be handled by adjusting the current plan'].map((t) => (
            <li key={t} className="flex gap-3">{check}<span>{t}</span></li>
          ))}
        </ul>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="group border border-[var(--color-border)] rounded-xl p-5 bg-[var(--color-cream)] animate-fade-up">
              <summary className="cursor-pointer font-semibold text-[var(--color-dark)] flex justify-between items-center">
                {f.q}
                <svg className="w-5 h-5 transition-transform group-open:rotate-180 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Not sure which path fits?</h2>
          <p className="mb-8 opacity-90">Reach out to Blue Willow Psychiatry in Tooele, UT, at (435) 200-3430 to talk through your situation.</p>
          <Link href="/contact" className="inline-block rounded-full bg-[var(--color-accent)] px-8 py-3 font-semibold text-white border border-white transition-colors hover:bg-[var(--color-accent-dark)]">Discuss Your Options</Link>
        </div>
      </section>
    </main>
  )
}