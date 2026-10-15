import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medication Management vs Combined Care | Blue Willow',
  description: 'Compare medication management alone with combined medication and therapy: effectiveness, side effects, cost, time commitment and who each approach suits best.',
  alternates: { canonical: '/compare/medication-management-vs-combined-care' },
  openGraph: {
    title: 'Medication Management vs Combined Care | Blue Willow',
    description: 'Compare medication management alone with combined medication and therapy: effectiveness, side effects, cost, time commitment and who each approach suits best.',
    url: 'https://www.bluewillowpsych.com/compare/medication-management-vs-combined-care',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Medication Management vs Combined Care | Blue Willow',
    description: 'Compare medication management alone with combined medication and therapy: effectiveness, side effects, cost, time commitment and who each approach suits best.',
  },
}

const rows = [
  { label: 'Effectiveness', a: 'Often helpful for symptoms with a strong biological component, such as persistent low mood, anxiety, or attention difficulties.', b: 'Research often shows better outcomes for many conditions when medication is paired with therapy, especially for depression and anxiety.' },
  { label: 'Side effects', a: 'Medication side effects are possible and are monitored and adjusted at follow-up visits.', b: 'Same medication considerations. Therapy itself has no physical side effects, though it can stir up difficult emotions at times.' },
  { label: 'Cost', a: 'Typically fewer visits overall. Copays and deductibles may apply depending on your coverage.', b: 'Involves both medication visits and therapy sessions, so total cost is usually higher. Copays and deductibles may apply to each.' },
  { label: 'Time commitment', a: 'Shorter, less frequent visits focused on symptoms, response and dosing.', b: 'Regular therapy sessions in addition to medication visits, plus practice of skills between sessions.' },
  { label: 'Best for', a: 'People with a clear diagnosis, stable life circumstances, or limited capacity for weekly sessions.', b: 'People with complex symptoms, trauma, relationship or coping challenges, or who want lasting skills.' },
]

const faqs = [
  { q: 'Is medication alone enough for most people?', a: 'It depends on the condition and the person. Some people do well with medication management alone, while others benefit from adding therapy to build coping skills and address underlying patterns.' },
  { q: 'Can I start with medication and add therapy later?', a: 'Yes. Many people begin with one approach and adjust over time as symptoms, stress levels and goals change. This is a conversation to have with your provider.' },
  { q: 'Will I need medication forever?', a: 'Not necessarily. Duration depends on your diagnosis, how you respond and your history. Any change in medication should be made with your prescriber, never on your own.' },
  { q: 'Does combined care mean one provider does everything?', a: 'Not always. Combined care can involve a prescriber and a separate therapist who coordinate. Contact the practice to ask about how care is arranged.' },
  { q: 'How do I decide which approach is right for me?', a: 'Consider your symptoms, history, schedule and preferences, then talk it through with a clinician. An evaluation helps clarify which approach fits best.' },
]

const check = (
  <svg className="w-5 h-5 shrink-0 mt-0.5 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default function Page() {
  const aList = [
    'You have a clearly defined condition that tends to respond to medication',
    'Your schedule makes weekly therapy difficult right now',
    'You already have strong coping skills or have completed therapy before',
    'You prefer a focused, symptom-oriented approach',
  ]
  const bList = [
    'Your symptoms are tied to trauma, grief, relationships or ongoing stress',
    'You want to build skills that last beyond medication',
    'Medication alone has only partly helped in the past',
    'You have complex or overlapping conditions',
  ]
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6 animate-fade-up">
          <nav className="text-sm mb-6 text-white/80">
            <Link href="/" className="hover:underline">Home</Link> › <span>Resources</span> › <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Medication Management vs Combined Medication and Therapy</h1>
          <p className="mt-6 text-lg text-white/90">A clear guide to help you weigh your options for mental health care in Tooele, UT.</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/compare-medication-management-vs-combined-care.jpg"} alt={"An overhead view of a colorful assortment of pills and capsules on a yellow background."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4"> </div>
              <div className="p-4">Medication Management</div>
              <div className="p-4">Medication + Therapy</div>
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
        <div className="max-w-4xl mx-auto px-6 text-[var(--color-ink)] leading-relaxed">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-4 text-[var(--color-primary)]">Medication Management</h2>
            <p className="mb-4">Medication management means working with a prescriber to choose, start, monitor and adjust psychiatric medication. Visits typically review how you are feeling, any side effects, and whether your dose or medication should change.</p>
            <p className="mb-4">Evidence supports medication for many conditions, including major depression, anxiety disorders, bipolar disorder, ADHD and others. Benefits often build over several weeks, and finding the right fit can take some adjustment.</p>
            <p className="mb-12">This approach commonly suits people who want a streamlined plan, have a clear diagnosis, or are already working with a therapist elsewhere. Expect a discussion of your history, goals and any concerns about medication.</p>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-4 text-[var(--color-primary)]">Combined Medication and Therapy</h2>
            <p className="mb-4">Combined care pairs medication with psychotherapy such as cognitive behavioral therapy. Medication can ease symptoms enough to engage in therapy, while therapy builds skills and insight that support long-term well-being.</p>
            <p className="mb-4">For many conditions, studies suggest that combining the two can produce stronger or more durable results than either alone, particularly for moderate to severe depression and anxiety. Therapy may also lower the chance of relapse.</p>
            <p>People who choose this path often face multiple stressors, want to understand patterns in their thoughts and behavior, or have not gotten enough relief from medication alone. Expect a larger time commitment, with regular sessions and between-session practice.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="font-semibold text-xl mb-3 text-[var(--color-dark)]">Choose medication management if…</h3>
        <ul className="space-y-3 mb-8 text-[var(--color-ink)]">
          {aList.map((t) => <li key={t} className="flex gap-3">{check}<span>{t}</span></li>)}
        </ul>
        <h3 className="font-semibold text-xl mb-3 text-[var(--color-dark)]">Choose combined care if…</h3>
        <ul className="space-y-3 text-[var(--color-ink)]">
          {bList.map((t) => <li key={t} className="flex gap-3">{check}<span>{t}</span></li>)}
        </ul>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group border border-[var(--color-border)] rounded-xl p-5 bg-[var(--color-cream)] animate-fade-up">
                <summary className="cursor-pointer font-semibold text-[var(--color-dark)]">{f.q}</summary>
                <p className="mt-3 text-[var(--color-ink)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-6 animate-fade-up">
          <h2 className="font-cormorant text-4xl mb-4">Not Sure Which Is Right for You?</h2>
          <p className="mb-8 text-white/90">Reach out to Blue Willow Psychiatry at 28 North Main Street, Tooele, UT, or call (435) 200-3430.</p>
          <Link href="/contact" className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-[var(--color-accent-dark)] transition hover:bg-[var(--color-light)]">Discuss Your Options</Link>
        </div>
      </section>
    </main>
  )
}