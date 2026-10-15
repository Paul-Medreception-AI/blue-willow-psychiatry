import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Understanding Psychiatric Medications | Blue Willow Psychiatry',
  description: 'Learn how psychiatric medications work, who they help, what to expect, and how to talk with a clinician in Tooele, UT about treatment options.',
  alternates: { canonical: '/blog/understanding-psychiatric-medications' },
  openGraph: {
    title: 'Understanding Psychiatric Medications | Blue Willow Psychiatry',
    description: 'Learn how psychiatric medications work, who they help, what to expect, and how to talk with a clinician in Tooele, UT about treatment options.',
    url: 'https://www.bluewillowpsych.com/blog/understanding-psychiatric-medications',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Understanding Psychiatric Medications | Blue Willow Psychiatry',
    description: 'Learn how psychiatric medications work, who they help, what to expect, and how to talk with a clinician in Tooele, UT about treatment options.',
  },
}

const Check = () => (
  <svg className="w-6 h-6 shrink-0 text-[var(--color-accent)] mt-1" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export default function Page() {
  const tips = [
    'Take your medication exactly as prescribed, at the same time each day.',
    'Keep a short log of mood, sleep, appetite and side effects.',
    'Do not stop a medication suddenly without speaking to your prescriber.',
    'Tell your prescriber about every supplement, over-the-counter product and other medication you use.',
    'Ask questions at every visit, including what to expect and when to follow up.',
  ]
  const related = [
    { href: '/blog', title: 'Mental Health Resources', text: 'Browse all of our patient education articles.' },
    { href: '/services', title: 'Our Services', text: 'See the types of care offered at the practice.' },
    { href: '/contact', title: 'Contact the Practice', text: 'Ask a question or reach out about care in Tooele.' },
  ]
  return (
    <main>
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Understanding Psychiatric Medications</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-understanding-psychiatric-medications.jpg"} alt={"Varied colorful pills and tablets scattered on a grey surface, viewed from above."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6">
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Starting a medication for your mental health can bring up a mix of hope and worry. You may wonder whether it will change who you are, how long it will take to work, or whether you will need it forever. These are reasonable questions, and you deserve clear answers. This guide explains the basics of psychiatric medications so you can walk into a conversation with a clinician feeling informed and more at ease.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Are Psychiatric Medications?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Psychiatric medications are prescription treatments that affect brain chemistry and the way brain circuits communicate. They are used to treat conditions such as depression, anxiety disorders, bipolar disorder, attention-deficit/hyperactivity disorder (ADHD), schizophrenia, and sleep problems. They do not change your personality. The goal is to ease symptoms so that you can think, feel, and function more like yourself.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Medication is rarely the only part of care. Many people do best with a combination of medication, psychotherapy, healthy routines, and social support. A prescriber can help you decide what mix makes sense for your situation.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Common Types of Psychiatric Medications</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Medications are grouped by the conditions they treat and how they work. The main categories include:
        </p>
        <ul className="space-y-3 mb-4 text-[var(--color-ink)] leading-loose text-base">
          <li className="flex gap-3"><Check /><span><strong>Antidepressants:</strong> used for depression and many anxiety disorders. Examples include SSRIs and SNRIs, which act on serotonin and norepinephrine.</span></li>
          <li className="flex gap-3"><Check /><span><strong>Anti-anxiety medications:</strong> some are used short term for acute anxiety, while others are taken daily for ongoing symptoms.</span></li>
          <li className="flex gap-3"><Check /><span><strong>Mood stabilizers:</strong> commonly used in bipolar disorder to reduce swings between high and low moods.</span></li>
          <li className="flex gap-3"><Check /><span><strong>Antipsychotics:</strong> used for psychotic disorders and sometimes as add-on treatment for mood conditions.</span></li>
          <li className="flex gap-3"><Check /><span><strong>Stimulant and non-stimulant medications:</strong> used to treat ADHD by supporting attention and impulse control.</span></li>
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Can Benefit?</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Mental health conditions are common. According to the National Institute of Mental Health, more than one in five adults in the United States lives with a mental illness in a given year. Medication may be considered when symptoms are moderate to severe, when they interfere with work, school, sleep, or relationships, or when therapy alone has not provided enough relief. Needing medication is not a sign of weakness, just as treating blood pressure or diabetes is not.
        </p>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          The goal is to ease symptoms so that you can think, feel, and function more like yourself.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Research Shows</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Large clinical trials and reviews show that antidepressants, mood stabilizers, antipsychotics, and ADHD medications can reduce symptoms for many people compared with placebo. Responses vary, though. Some people feel better with the first medication, while others need an adjustment in dose or a change in medication. That is a normal part of finding the right fit, not a failure.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Research also shows that combining medication with talk therapy often works better than either alone for conditions like moderate to severe depression and anxiety.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What to Expect: Timing and Side Effects</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base mb-4">
          Many medications, especially antidepressants, take several weeks to show their full effect. Side effects often appear first and may ease as your body adjusts. Common ones include nausea, headache, drowsiness, changes in sleep or appetite, and sexual side effects. Some medications require blood tests or other monitoring.
        </p>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          Contact your prescriber promptly if side effects are severe or if you notice worsening mood, new agitation, or thoughts of self-harm. If you are in crisis, call or text 988, the Suicide and Crisis Lifeline, or call 911.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Tips for Taking Medication Safely</h2>
        <ul className="space-y-3 mb-4 text-[var(--color-ink)] leading-loose text-base">
          {tips.map((t) => (
            <li key={t} className="flex gap-3"><Check /><span>{t}</span></li>
          ))}
        </ul>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Take the Next Step</h2>
        <p className="text-[var(--color-ink)] leading-loose text-base">
          If you are wondering whether medication could help, a conversation with a qualified clinician is the best place to start. Blue Willow Psychiatry serves the Tooele, UT community from 28 North Main Street. You can call (435) 200-3430 to ask about care. This article is for education only and is not a substitute for personal medical advice.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" />
          </svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-[var(--color-muted)] text-sm mt-1">Patient education on mental health care in Tooele, UT.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <a key={r.href} href={r.href} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
                <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{r.title}</h4>
                <p className="text-[var(--color-muted)] text-sm">{r.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
          <p className="mb-8 text-white/80">Our team is here to help.</p>
          <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 text-white px-8 py-3 rounded-full transition-colors">Contact Us</a>
        </div>
      </section>
    </main>
  )
}