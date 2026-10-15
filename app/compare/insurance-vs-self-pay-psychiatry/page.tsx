import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insurance vs Self Pay for Psychiatry | Blue Willow',
  description: 'Compare using insurance with paying out of pocket for psychiatric care in Tooele, UT: cost structure, privacy, access and who each option suits best.',
  alternates: { canonical: '/compare/insurance-vs-self-pay-psychiatry' },
  openGraph: {
    title: 'Insurance vs Self Pay for Psychiatry | Blue Willow',
    description: 'Compare using insurance with paying out of pocket for psychiatric care in Tooele, UT: cost structure, privacy, access and who each option suits best.',
    url: 'https://www.bluewillowpsych.com/compare/insurance-vs-self-pay-psychiatry',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Insurance vs Self Pay for Psychiatry | Blue Willow',
    description: 'Compare using insurance with paying out of pocket for psychiatric care in Tooele, UT: cost structure, privacy, access and who each option suits best.',
  },
}

const rows = [
  { label: 'Effectiveness', a: 'Care itself is the same clinical quality. Insurance changes how it is paid for, not how medication or therapy works.', b: 'Same clinical quality. Self pay may allow more flexibility in visit length and frequency, depending on the practice.' },
  { label: 'Side effects', a: 'Identical. Side effects depend on the treatment chosen, not on the payment method.', b: 'Identical. Side effects depend on the treatment chosen, not on the payment method.' },
  { label: 'Cost', a: 'Monthly premiums, copays and deductibles apply. Out-of-pocket cost depends on your plan.', b: 'You pay the practice directly, for example through a visit fee or monthly membership fee. No claims are filed.' },
  { label: 'Time commitment', a: 'May involve prior authorizations, referrals and paperwork handled between the office and your insurer.', b: 'Usually less administrative back-and-forth, since there is no insurer to coordinate with.' },
  { label: 'Privacy', a: 'A diagnosis code is shared with your insurer to process claims.', b: 'No diagnosis is submitted to an insurer, which some people prefer.' },
  { label: 'Best for', a: 'People with solid mental health coverage and predictable, ongoing care needs.', b: 'People without coverage, with high deductibles, or who value privacy and flexibility.' },
]

const aPoints = [
  'Your plan has good mental health benefits',
  'You have already met, or expect to meet, your deductible',
  'You prefer predictable copays over paying in full',
  'You are comfortable with a diagnosis on your claims record',
]
const bPoints = [
  'You have no coverage or a very high deductible',
  'Privacy from insurers matters to you',
  'You want to avoid authorizations and claim paperwork',
  'Your preferred clinician does not take your plan',
]

const faqs = [
  { q: 'Does the payment method change the quality of care?', a: 'No. Evaluation, diagnosis and treatment decisions are based on your clinical needs. Payment method affects billing, not the care itself.' },
  { q: 'Is self pay always more expensive?', a: 'Not necessarily. With a high deductible, paying directly can sometimes cost less over a year. Compare your plan details with the practice fee structure.' },
  { q: 'Can I submit self-pay receipts to my insurer?', a: 'Some plans reimburse part of out-of-network care. Ask your insurer about out-of-network benefits and what documentation they need.' },
  { q: 'Will using insurance affect my medical record?', a: 'Claims include a diagnosis code, which becomes part of your insurance history. Your treatment records themselves are protected by privacy laws.' },
  { q: 'How do I find out what the practice accepts?', a: 'Call Blue Willow Psychiatry at (435) 200-3430 to ask about billing and payment options before scheduling.' },
]

function Check() {
  return (
    <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Page() {
  return (
    <main className="text-[var(--color-ink)]">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm mb-6 opacity-90">
            <Link href="/" className="hover:underline">Home</Link> › Resources › Comparison
          </p>
          <h1 className="font-cormorant text-5xl font-light">Insurance vs Self Pay for Psychiatry</h1>
          <p className="mt-6 text-lg opacity-90">How you pay shapes cost, privacy and paperwork. Here is how the two paths compare for mental health care in Tooele, UT.</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/compare-insurance-vs-self-pay-psychiatry.jpg"} alt={"Man lying on couch during therapy session with female therapist taking notes."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <section className="bg-[var(--color-cream)] py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-12 text-[var(--color-primary)]">Side-by-Side Comparison</h2>
          <div className="animate-fade-up rounded-xl overflow-hidden border border-[var(--color-border)]">
            <div className="grid grid-cols-3 bg-[var(--color-primary)] text-white font-semibold">
              <div className="p-4">Factor</div>
              <div className="p-4">Using Insurance</div>
              <div className="p-4">Self Pay</div>
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
          <div className="animate-fade-up mb-12">
            <h2 className="font-cormorant text-4xl mb-4 text-[var(--color-primary)]">Using Insurance</h2>
            <p className="mb-4 leading-relaxed">Insurance spreads the cost of care across premiums and shared payments. For people who see a psychiatric provider regularly, copays can make ongoing medication management more manageable, especially once a deductible has been met.</p>
            <p className="mb-4 leading-relaxed">The tradeoffs are administrative. Plans may require prior authorization for certain medications, limit the number of visits, or restrict you to specific providers. A diagnosis is also submitted with each claim.</p>
            <p className="leading-relaxed">A typical patient here has employer or marketplace coverage with mental health benefits and wants predictable per-visit costs. Before your first visit, check your benefits for behavioral health coverage, deductibles and any visit limits.</p>
          </div>
          <div className="animate-fade-up">
            <h2 className="font-cormorant text-4xl mb-4 text-[var(--color-primary)]">Self Pay</h2>
            <p className="mb-4 leading-relaxed">Self pay means you pay the practice directly, whether per visit or through a membership-style arrangement. Without an insurer in the middle, there are no claims, no authorizations for visits and no diagnosis submitted for billing.</p>
            <p className="mb-4 leading-relaxed">This can suit people who are uninsured, have a high-deductible plan, or want to keep their care separate from insurance records. The tradeoff is that you carry the full cost of each visit unless your plan reimburses out-of-network care.</p>
            <p className="leading-relaxed">Clinical evidence does not favor one payment method over the other. What matters is consistent follow-up and a treatment plan that fits you. Ask the practice directly how billing works.</p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light)] rounded-2xl p-12 max-w-3xl mx-auto my-20">
        <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">How to Decide</h2>
        <div className="animate-fade-up mb-8">
          <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-dark)]">Choose insurance if…</h3>
          <ul className="space-y-3">
            {aPoints.map((p) => (<li key={p} className="flex gap-3"><Check />{p}</li>))}
          </ul>
        </div>
        <div className="animate-fade-up">
          <h3 className="font-cormorant text-2xl mb-3 text-[var(--color-dark)]">Choose self pay if…</h3>
          <ul className="space-y-3">
            {bPoints.map((p) => (<li key={p} className="flex gap-3"><Check />{p}</li>))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-8 text-[var(--color-primary)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="animate-fade-up bg-white border border-[var(--color-border)] rounded-xl p-5">
                <summary className="cursor-pointer font-semibold text-[var(--color-dark)]">{f.q}</summary>
                <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl mb-4">Not Sure Which Fits You?</h2>
          <p className="mb-8 opacity-90">Reach out to Blue Willow Psychiatry at 28 North Main Street, Tooele, UT, or call (435) 200-3430.</p>
          <Link href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white transition-colors text-white px-8 py-4 rounded-full font-semibold">Discuss Your Options</Link>
        </div>
      </section>
    </main>
  )
}