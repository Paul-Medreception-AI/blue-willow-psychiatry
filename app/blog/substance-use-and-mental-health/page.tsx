import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Substance Use and Mental Health | Blue Willow Psychiatry',
  description: 'Learn how substance use and mental health conditions affect each other, why they often occur together, and how to find support in Tooele, UT.',
  alternates: { canonical: '/blog/substance-use-and-mental-health' },
  openGraph: {
    title: 'Substance Use and Mental Health | Blue Willow Psychiatry',
    description: 'Learn how substance use and mental health conditions affect each other, why they often occur together, and how to find support in Tooele, UT.',
    url: 'https://www.bluewillowpsych.com/blog/substance-use-and-mental-health',
    siteName: 'Blue Willow Psychiatry',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Substance Use and Mental Health | Blue Willow Psychiatry',
    description: 'Learn how substance use and mental health conditions affect each other, why they often occur together, and how to find support in Tooele, UT.',
  },
}

const tips = [
  'Notice patterns: when, why and how much you use, and how you feel afterward.',
  'Be honest with a clinician about all substances, including alcohol, nicotine, cannabis and non-prescribed medications.',
  'Ask for an evaluation that looks at mental health and substance use together.',
  'Build routines for sleep, movement and meals, which steady mood and cravings.',
  'Lean on trusted people, and consider peer support groups.',
  'Treat setbacks as information, not failure. Recovery often has ups and downs.',
]

export default function Page() {
  return (
    <main className="font-sans">
      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <nav className="text-sm text-white/70 mb-6">
            <a href="/" className="hover:text-white transition-colors">Home</a> › <a href="/blog" className="hover:text-white transition-colors">Resources</a> › Article
          </nav>
          <p className="text-xs uppercase tracking-widest text-white/70 mb-4">Patient Education</p>
          <h1 className="font-cormorant text-5xl font-light leading-tight max-w-3xl mx-auto text-center">Substance Use and Mental Health</h1>
          <p className="mt-6 text-sm text-white/80">Published October 2026 · 6 min read · Reviewed by Blue Willow Psychiatry</p>
        </div>
      </section>

      {/* page-image:start */}
      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-10">
        <div className="relative w-full h-56 md:h-80 rounded-2xl overflow-hidden shadow-xl bg-[var(--color-light)]">
          <img src={"/images/stock/blog-substance-use-and-mental-health.jpg"} alt={"Close-up view of scattered white pills and empty blister pack on a wooden surface, suggesting concepts of medicine or mental health."} width={1200} height={627} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
      {/* page-image:end */}

      <article className="bg-white py-20 max-w-3xl mx-auto px-6 text-[var(--color-ink)] leading-loose text-base">
        <p className="text-lg">
          Many people reach for a drink, a smoke or a pill to take the edge off a hard day. For a while it can feel like relief. Over time, though, the very thing that seemed to help can deepen anxiety, darken mood and make life feel smaller. If this sounds familiar, you are not weak and you are not alone. Substance use and mental health are closely linked, and understanding that link is a powerful first step.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What Are Co-Occurring Disorders?</h2>
        <p>
          When a mental health condition and a substance use disorder exist together, clinicians call it a co-occurring disorder (sometimes “dual diagnosis”). Depression, anxiety, post-traumatic stress, bipolar disorder, ADHD and psychotic disorders are all commonly seen alongside problematic alcohol or drug use. Each condition can intensify the other, which is why treating only one often leaves the person struggling.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Who Is Affected?</h2>
        <p>
          Anyone can be. National survey data in the United States consistently shows that a large share of adults with a substance use disorder also have a mental illness, and the reverse is true as well. It cuts across age, income and background. People who have experienced trauma, chronic stress, chronic pain or a family history of addiction face higher risk, but many people with none of these still develop difficulties.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why Do They Occur Together?</h2>
        <p>Researchers point to several overlapping explanations:</p>
        <ul className="my-6 space-y-3">
          {['Self-medication: using substances to cope with painful emotions, racing thoughts, trauma memories or poor sleep.', 'Shared risk factors: genetics, brain chemistry, early adversity and ongoing stress can contribute to both.', 'Substance-induced changes: alcohol and drugs alter brain circuits for mood, motivation and stress, and can trigger or worsen symptoms.'].map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>

        <div className="bg-[var(--color-light)] border-l-4 border-[var(--color-primary)] p-6 my-8 text-[var(--color-ink)] italic text-xl font-cormorant">
          Each condition can intensify the other, which is why treating only one often leaves the person struggling.
        </div>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Why It Matters</h2>
        <p>
          Alcohol is a depressant, and although it may feel calming at first, it commonly worsens depression and anxiety as it wears off. Stimulants can provoke panic, agitation and sleeplessness. Cannabis may worsen anxiety or, in vulnerable people, psychotic symptoms. Withdrawal from many substances brings its own anxiety, low mood and insomnia, which can be mistaken for a psychiatric condition. Untangling what is driving symptoms is exactly why careful evaluation matters.
        </p>
        <p className="mt-4">
          Co-occurring conditions are also linked with strained relationships, trouble at work, and a higher risk of self-harm. If you or someone you love is in crisis or thinking about suicide, call or text 988 (the Suicide and Crisis Lifeline) or call 911 right away.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">What the Evidence Shows</h2>
        <p>
          Research supports integrated treatment, where mental health and substance use are addressed at the same time rather than one after the other. Effective care often combines several approaches:
        </p>
        <ul className="my-6 space-y-3">
          {['Psychotherapy such as cognitive behavioral therapy and motivational interviewing.', 'Medication for the mental health condition when appropriate.', 'Medications that can help with alcohol or opioid use disorders, when suited to the person.', 'Peer and community support, and help with sleep, stress and daily structure.'].map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p>
          Recovery is possible. Many people improve substantially with the right combination of support, and treating depression or anxiety often makes it easier to reduce substance use.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Practical Steps You Can Take</h2>
        <ul className="my-6 space-y-3">
          {tips.map((t) => (
            <li key={t} className="flex gap-3 items-start">
              <svg className="w-6 h-6 shrink-0 mt-1 text-[var(--color-accent)]" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <p>
          Stopping heavy alcohol or benzodiazepine use suddenly can be medically dangerous. Talk with a medical professional before making big changes.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Supporting Someone You Love</h2>
        <p>
          Approach with compassion rather than blame. Choose a calm moment, describe what you have noticed, and express concern without labels. Encourage professional help, and take care of your own wellbeing too. Change is rarely immediate, but steady, nonjudgmental support makes a real difference.
        </p>

        <h2 className="font-cormorant text-3xl text-[var(--color-ink)] mt-12 mb-4">Taking the Next Step</h2>
        <p>
          Asking for help is a sign of strength. If substance use and your mental health are affecting each other, Blue Willow Psychiatry in Tooele, UT invites you to reach out. Call (435) 200-3430 or visit us at 28 North Main Street, Tooele, UT 84074 to start a conversation about your concerns.
        </p>
      </article>

      <div className="bg-[var(--color-cream)] rounded-2xl p-8 max-w-3xl mx-auto my-12 px-6 flex gap-6 items-start animate-fade-up">
        <div className="bg-[var(--color-light)] rounded-full w-16 h-16 shrink-0 flex items-center justify-center text-[var(--color-primary)]">
          <svg className="w-8 h-8" stroke="currentColor" strokeWidth={1.5} fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0" /></svg>
        </div>
        <div>
          <p className="font-cormorant text-xl font-semibold text-[var(--color-ink)]">Reviewed by Blue Willow Psychiatry</p>
          <p className="text-sm text-[var(--color-muted)] mt-2">This article is for education and is not a substitute for personal medical advice.</p>
        </div>
      </div>

      <section className="bg-[var(--color-cream)] py-16 max-w-7xl mx-auto px-6">
        <h3 className="font-cormorant text-3xl mb-8 text-[var(--color-ink)]">Related Resources</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { h: '/blog', t: 'Resources Hub', d: 'Browse all patient education articles from Blue Willow Psychiatry.' },
            { h: '/services', t: 'Our Services', d: 'Learn about the mental health care offered in Tooele, UT.' },
            { h: '/contact', t: 'Contact the Practice', d: 'Reach out to ask questions or begin a conversation about care.' },
          ].map((c) => (
            <a key={c.h} href={c.h} className="animate-fade-up block bg-white rounded-2xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-shadow">
              <h4 className="font-cormorant text-2xl text-[var(--color-primary)] mb-2">{c.t}</h4>
              <p className="text-sm text-[var(--color-muted)]">{c.d}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-primary)] py-20 text-white text-center">
        <h2 className="font-cormorant text-4xl font-light mb-4">Ready to Take the Next Step?</h2>
        <p className="mb-8 text-white/80">Our team is here to help.</p>
        <a href="/contact" className="inline-block bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] border border-white/40 transition-colors text-white px-8 py-3 rounded-full">Contact Us</a>
      </section>
    </main>
  )
}