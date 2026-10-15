import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Self Pay Psychiatry: What to Know',
  description: 'Learn how self pay psychiatry works, who it may suit, what to ask before your first visit, and how to decide if paying directly is right for you.',
  alternates: { canonical: '/blog/self-pay-psychiatry-what-to-know' },
  openGraph: {
    title: 'Self Pay Psychiatry: What to Know',
    description: 'Learn how self pay psychiatry works, who it may suit, what to ask before your first visit, and how to decide if paying directly is right for you.',
    url: 'https://www.bluewillowpsych.com/blog/self-pay-psychiatry-what-to-know',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Self Pay Psychiatry: What to Know',
    description: 'Learn how self pay psychiatry works, who it may suit, what to ask before your first visit, and how to decide if paying directly is right for you.',
  },
}

const tips = [
  'Ask what a first appointment includes and how long it lasts.',
  'Ask how follow-up visits, medication refills and between-visit questions are handled.',
  'Ask for a written explanation of fees before you commit to care.',
  'Ask whether a receipt can be provided for possible out-of-network reimbursement.',
  'Check your plan for out-of-network mental health benefits and any deductible.',
  'Ask how records are kept private and how they are shared with other clinicians, with your permission.',
]

const related = [
  { href: '/blog', title: 'Mental Health Resources', desc: 'Browse all of our patient education articles on mental health care.' },
  { href: '/contact', title: 'Contact Blue Willow Psychiatry', desc: 'Ask a question about care in Tooele, UT, or reach the practice directly.' },
  { href: '/blog', title: 'More Patient Education', desc: 'Explore articles on understanding and navigating psychiatric care.' },
]

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Self Pay Psychiatry: What to Know</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="w-full rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-self-pay-psychiatry-what-to-know.jpg"} alt={"Patient and therapist in a modern therapy session indoors."} width={1200} height={627} loading="lazy" className="block w-full h-auto" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Reaching out for mental health support often takes courage. Then comes a practical question that can feel like one more hurdle: how will this be paid for? For many people, the answer is paying directly, sometimes called self pay or cash pay. Understanding what that means can take some of the stress out of getting started.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Self Pay Psychiatry Means</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Self pay psychiatry means you pay the practice directly for your visits instead of the practice billing your health plan. A psychiatric visit may involve a conversation about your symptoms and history, a diagnostic evaluation, a discussion of treatment options, and, when appropriate, medication management. With self pay, the financial relationship is between you and the practice.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Some People Choose It</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          People choose to pay directly for many reasons. Some are uninsured or between plans. Some have high-deductible coverage and find that they pay most costs out of pocket anyway. Others prefer that their care decisions be guided by them and their clinician rather than by insurance requirements. Privacy is another common reason: when no claim is submitted, a diagnosis does not appear in insurance records through that route.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Mental Health Concerns Affect</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Mental health conditions are common. National survey data from the National Institute of Mental Health suggest that more than one in five adults in the United States lives with a mental illness in a given year. Depression, anxiety, ADHD, bipolar disorder and trauma-related conditions affect people of every age and background. Yet many people wait a long time before seeking help, and cost uncertainty is one reason often cited.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Asking clear questions about cost and care before your first visit is one of the best ways to feel confident in your decision.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Insurance and Self Pay: Things to Consider</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Using insurance and paying directly each have trade-offs. Insurance may reduce your out-of-pocket cost, but it can come with limited provider networks, prior authorization steps and a diagnosis recorded on a claim. Paying directly may offer simplicity and flexibility, but you carry the cost yourself. Some health plans reimburse part of out-of-network care, so it is worth calling your plan to ask. Health savings accounts and flexible spending accounts may also be usable for eligible mental health expenses; confirm with your plan administrator.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base mt-4">
          Research consistently shows that early, consistent treatment improves outcomes for many conditions, including depression and anxiety. Delaying care because of cost confusion can allow symptoms to deepen, so getting clear information early matters.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Questions to Ask Before You Begin</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          A good practice will welcome your questions. Consider bringing this list to your first call:
        </p>
        <ul className="space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 text-[var(--color-ink)] leading-loose text-base">
              <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Preparing for Your First Visit</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Before you go, jot down your main concerns, when they began, and how they affect sleep, work, relationships and daily life. Bring a list of current medications and supplements, and note any past treatment. If you are in crisis or thinking about harming yourself, do not wait for an appointment: call or text 988, the Suicide and Crisis Lifeline, or call 911.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Choosing how to pay for psychiatric care is a personal decision, and you deserve straightforward answers. If you are in or near Tooele, UT, Blue Willow Psychiatry can answer your questions about getting started. Call (435) 200-3430 or reach out through our contact page. You do not have to have everything figured out to ask.
        </p>
      </article>

      <section className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">From Blue Willow Psychiatry</p>
          <p className="text-[var(--color-muted)] text-sm mt-2 leading-relaxed">This article is for general education and is not a substitute for personal medical advice.</p>
        </div>
      </section>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.title} href={r.href} className="animate-fade-up block bg-white border border-[var(--color-border)] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <svg className="w-8 h-8 text-[var(--color-accent)] mb-4" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.04v12.5m0-12.5C10.5 4.9 8.4 4.5 6 4.5v12.5c2.4 0 4.5.4 6 1.54m0-12.5c1.5-1.14 3.6-1.54 6-1.54v12.5c-2.4 0-4.5.4-6 1.54" />
                </svg>
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{r.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="text-white/80 mb-8">We are here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white px-8 py-3 rounded-full transition-colors border border-white/40">Contact Us</a>
        </div>
      </section>
    </main>
  )
}