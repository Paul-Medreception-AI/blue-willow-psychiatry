import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medication vs Therapy: Which Is Right for You?',
  description: 'Compare psychiatric medication and talk therapy side by side: effectiveness, side effects, cost, time commitment and who each approach suits best.',
  alternates: { canonical: '/compare/medication-vs-therapy' },
  openGraph: {
    title: 'Medication vs Therapy: Which Is Right for You?',
    description: 'Compare psychiatric medication and talk therapy side by side: effectiveness, side effects, cost, time commitment and who each approach suits best.',
    url: 'https://www.bluewillowpsych.com/compare/medication-vs-therapy',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Medication vs Therapy: Which Is Right for You?',
    description: 'Compare psychiatric medication and talk therapy side by side: effectiveness, side effects, cost, time commitment and who each approach suits best.',
  },
}

const rows = [
  { label: 'Effectiveness', med: 'Often reduces symptoms of depression, anxiety, bipolar disorder, ADHD and psychosis. Many people notice change within several weeks.', therapy: 'Well supported for depression, anxiety, trauma, OCD and more. Builds skills that can last after sessions end.' },
  { label: 'Side effects', med: 'Vary by medication. Can include nausea, sleep changes, weight changes or sexual side effects. Many ease over time or with adjustment.', therapy: 'No physical side effects. Sessions can stir up difficult emotions at first.' },
  { label: 'Cost', med: 'Depends on coverage. Visit copays, deductibles and pharmacy costs may apply.', therapy: 'Depends on coverage. Copays and deductibles may apply, and some people pay per session or through a monthly membership fee.' },
  { label: 'Time commitment', med: 'Short follow-up visits, with a daily routine of taking medication as prescribed.', therapy: 'Regular sessions over weeks or months, plus practice between sessions.' },
  { label: 'Best for', med: 'Moderate to severe symptoms, symptoms with a strong biological component, or when daily functioning is hard.', therapy: 'Mild to moderate symptoms, relationship or life stress, patterns of thinking or behavior, and a preference to avoid medication.' },
]

const faqs = [
  { q: 'Can I take medication and do therapy at the same time?', a: 'Yes. For many conditions, combining the two works better than either one alone. Medication can lift symptoms enough that you can engage fully in therapy.' },
  { q: 'Will I have to stay on medication forever?', a: 'Not necessarily. Some people take medication for a limited period, while others benefit from longer-term treatment. The decision is made with your prescriber and reviewed over time.' },
  { q: 'How long does each take to work?', a: 'Many medications take several weeks to show their full effect. Therapy often brings gradual improvement over weeks to months, depending on the goals and the approach.' },
  { q: 'Is therapy enough for severe depression or anxiety?', a: 'Sometimes, but severe symptoms often respond best to a combination. A thorough evaluation helps determine what level of support fits your situation.' },
  { q: 'How do I start if I am unsure?', a: 'Begin with an evaluation. A clinician can review your symptoms, history and preferences and talk through options with you. You can call the practice at (435) 200-3430 to ask about next steps.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Page() {
  const medPoints = [
    'Your symptoms are moderate to severe or disrupt work, sleep or relationships',
    'Symptoms have lasted a long time or keep returning',
    'You have a condition such as bipolar disorder, ADHD or psychosis',
    'Therapy alone has not given enough relief',
  ]
  const therapyPoints = [
    'Your symptoms are mild to moderate',
    'You want practical coping skills and insight into patterns',
    'You are dealing with grief, trauma, or relationship or life stress',
    'You prefer to avoid medication or cannot take it safely',
  ]
  return (
    <main className="text-[var(--color-ink)]">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <nav className="text-sm mb-6 text-white/80" aria-label="Breadcrumb">
            <Link href="/" className="hover:underline">Home</Link> › <span>Resources</span> › <span>Comparison</span>
          </nav>
          <h1 className="font-cormorant text-5xl font-light">Medication vs Therapy: Which Is Right for You?</h1>
          <p className="mt-6 text-lg text-white/90">A clear look at both approaches to mental health care in Tooele, UT, so you can make an informed decision.</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/compare-medication-vs-therapy.jpg"} alt={"From above of crop unrecognizable person sitting on bed and holding bunch of painkillers in hand at home"} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] animate-fade-up">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4">Factor</div>
              <div className="p-4">Medication</div>
              <div className="p-4">Therapy</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--color-light)]'}`}>
                <div className="p-4 font-semibold text-[var(--color-dark)]">{r.label}</div>
                <div className="p-4">{r.med}</div>
                <div className="p-4">{r.therapy}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-4 text-[var(--color-primary)]">Medication</h2>
            <p className="mb-4 leading-relaxed">Psychiatric medication works on brain chemistry and signaling to ease symptoms such as low mood, worry, racing thoughts, poor focus or disrupted sleep. Antidepressants, mood stabilizers, anti-anxiety medications, stimulants and antipsychotics are used for different conditions.</p>
            <p className="mb-4 leading-relaxed">Research shows medication can be effective, especially for moderate to severe depression, bipolar disorder, ADHD and psychotic disorders. Finding the right medication and dose often takes some adjustment, so follow-up visits matter.</p>
            <p className="mb-12 leading-relaxed">What to expect: an evaluation of your symptoms and health history, a discussion of benefits and risks, a starting plan, and regular check-ins to monitor progress and side effects.</p>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-4 text-[var(--color-primary)]">Therapy</h2>
            <p className="mb-4 leading-relaxed">Therapy, also called psychotherapy or talk therapy, helps you understand thoughts, emotions and behaviors and develop healthier responses. Common approaches include cognitive behavioral therapy, trauma-focused therapy and supportive counseling.</p>
            <p className="mb-4 leading-relaxed">Evidence supports therapy as a first-line treatment for many anxiety disorders, mild to moderate depression, PTSD and OCD. Its benefits often last because you keep the skills you learn.</p>
            <p className="leading-relaxed">What to expect: setting goals together, regular sessions, and practicing new strategies between visits. Progress is usually gradual, and the fit with your therapist matters.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20 animate-fade-up">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <h3 className="font-semibold text-xl mb-4 text-[var(--color-dark)]">Consider medication if...</h3>
        <ul className="space-y-3 mb-8">
          {medPoints.map((p) => (<li key={p} className="flex gap-3"><Check /><span>{p}</span></li>))}
        </ul>
        <h3 className="font-semibold text-xl mb-4 text-[var(--color-dark)]">Consider therapy if...</h3>
        <ul className="space-y-3 mb-8">
          {therapyPoints.map((p) => (<li key={p} className="flex gap-3"><Check /><span>{p}</span></li>))}
        </ul>
        <p className="leading-relaxed">Still unsure? Many people use both. A professional evaluation is the best way to match treatment to your needs.</p>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="animate-fade-up group border border-[var(--color-border)] rounded-xl p-5 bg-[var(--color-cream)]">
                <summary className="cursor-pointer font-semibold text-[var(--color-dark)]">{f.q}</summary>
                <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-center text-white">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Ready to Talk Through Your Options?</h2>
          <p className="mb-8 text-white/90">Blue Willow Psychiatry, 28 North Main Street, Tooele, UT 84074. Call (435) 200-3430.</p>
          <Link href="/contact" className="inline-block rounded-full bg-[var(--color-accent)] border border-white px-8 py-3 font-semibold text-white transition hover:bg-[var(--color-accent-dark)]">Discuss Your Options</Link>
          <p className="mt-8 text-xs text-white/70">This page is general information, not medical advice. By Blue Willow Psychiatry, October 2026.</p>
        </div>
      </section>
    </main>
  )
}